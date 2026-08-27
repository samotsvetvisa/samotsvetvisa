import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outputDirectory = join(process.cwd(), "out");

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return htmlFiles(path);
    return entry.isFile() && entry.name.endsWith(".html") ? [path] : [];
  }));
  return nested.flat();
}

for (const path of await htmlFiles(join(outputDirectory, "en"))) {
  const html = await readFile(path, "utf8");
  const updated = html.replace('<html lang="ru">', '<html lang="en">');
  if (updated !== html) await writeFile(path, updated);
}
