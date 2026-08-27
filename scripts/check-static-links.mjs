import { access, readdir, readFile } from "node:fs/promises";
import { constants } from "node:fs";
import { dirname, join, normalize } from "node:path";

const outputDirectory = join(process.cwd(), "out");

async function files(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return files(path);
    return entry.isFile() && entry.name.endsWith(".html") ? [path] : [];
  }));
  return nested.flat();
}

async function exists(path) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

function localTarget(source, href) {
  const clean = href.split("#")[0].split("?")[0];
  if (!clean) return null;
  if (/^(?:https?:|mailto:|tel:|javascript:|data:)/i.test(clean)) return null;

  const relative = clean.startsWith("/")
    ? clean.slice(1)
    : normalize(join(dirname(source.slice(outputDirectory.length + 1)), clean));

  if (relative.endsWith(".html") || relative.includes(".")) return join(outputDirectory, relative);
  return join(outputDirectory, relative, "index.html");
}

const missing = [];
const htmlFiles = await files(outputDirectory);

for (const source of htmlFiles) {
  const html = await readFile(source, "utf8");
  for (const match of html.matchAll(/href=["']([^"']+)["']/g)) {
    const target = localTarget(source, match[1]);
    if (target && !(await exists(target))) {
      missing.push(`${source.slice(outputDirectory.length + 1)} -> ${match[1]}`);
    }
  }
}

if (missing.length) {
  console.error(`Broken internal links (${missing.length}):\n${missing.join("\n")}`);
  process.exitCode = 1;
} else {
  console.log(`Checked ${htmlFiles.length} HTML files: no broken internal links.`);
}
