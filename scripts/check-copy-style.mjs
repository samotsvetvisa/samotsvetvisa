import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const appRoot = path.resolve("app");

const rules = [
  { name: "буква ё", pattern: /[Ёё]/gu },
  { name: "длинное тире", pattern: /—/gu },
  { name: "старое название формы", pattern: /аудит\s+профиля|profile\s+audit/giu },
  { name: "шаблон «это не..., это...»", pattern: /\bэто\s+не\b[^.!?\n]{0,140}\b(?:это|а)\b/giu },
  { name: "шаблон «не просто»", pattern: /\bне\s+просто\b/giu },
  { name: "шаблон «не только..., но...»", pattern: /\bне\s+только\b[^.!?\n]{0,140}\bно\b/giu },
  { name: "English ‘not just’ pattern", pattern: /\bnot\s+(?:just|merely)\b/giu },
  { name: "English ‘not only...but’ pattern", pattern: /\bnot\s+only\b[^.!?\n]{0,140}\bbut\b/giu },
  { name: "English ‘more than just’ pattern", pattern: /\bmore\s+than\s+just\b/giu },
];

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const itemPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return collectFiles(itemPath);
    return /\.(?:ts|tsx)$/.test(entry.name) ? [itemPath] : [];
  }));
  return files.flat();
}

const problems = [];
for (const filePath of await collectFiles(appRoot)) {
  const source = await readFile(filePath, "utf8");
  const lines = source.split("\n");
  for (const rule of rules) {
    rule.pattern.lastIndex = 0;
    for (const match of source.matchAll(rule.pattern)) {
      const lineNumber = source.slice(0, match.index).split("\n").length;
      problems.push(`${path.relative(process.cwd(), filePath)}:${lineNumber} ${rule.name}: ${lines[lineNumber - 1].trim()}`);
    }
  }
}

if (problems.length) {
  console.error("Copy style check failed:\n");
  console.error(problems.join("\n"));
  process.exit(1);
}

console.log("Copy style check passed.");
