#!/usr/bin/env node
// Compara title/description/H1 das rotas para detectar canibalização (metadados quase idênticos).
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const dir = "src/routes";
const files = readdirSync(dir, { recursive: true }).filter(
  (f) => typeof f === "string" && f.endsWith(".tsx"),
);

const pick = (src, key) => {
  const m = src.match(new RegExp(`${key}:\\s*\\n?\\s*"((?:[^"\\\\]|\\\\.)*)"`));
  return m ? m[1] : null;
};

const pages = [];
for (const f of files) {
  const src = readFileSync(join(dir, f), "utf8");
  if (!src.includes("buildSeoHead")) continue;
  const canonical = pick(src, "canonical");
  if (!canonical) continue;
  pages.push({
    file: f,
    canonical,
    title: pick(src, "title") ?? "",
    description: pick(src, "description") ?? "",
    h1: (src.match(/h1="((?:[^"\\]|\\.)*)"/) ?? [])[1] ?? "",
  });
}

const tokens = (s) =>
  new Set(
    s
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .split(/[^a-z0-9]+/)
      .filter((w) => w.length > 3),
  );

const jaccard = (a, b) => {
  const A = tokens(a);
  const B = tokens(b);
  if (!A.size || !B.size) return 0;
  let inter = 0;
  for (const t of A) if (B.has(t)) inter += 1;
  return inter / (A.size + B.size - inter);
};

const THRESHOLD = 0.7;
const issues = [];
for (let i = 0; i < pages.length; i += 1) {
  for (let j = i + 1; j < pages.length; j += 1) {
    const a = pages[i];
    const b = pages[j];
    if (a.canonical === b.canonical) {
      issues.push(`canonical duplicado: ${a.canonical} (${a.file} / ${b.file})`);
      continue;
    }
    const t = jaccard(a.title, b.title);
    const d = jaccard(a.description, b.description);
    const h = jaccard(a.h1, b.h1);
    if (t >= THRESHOLD || d >= THRESHOLD || h >= THRESHOLD) {
      issues.push(
        `sobreposição alta ${a.canonical} × ${b.canonical} — title ${t.toFixed(2)}, description ${d.toFixed(2)}, h1 ${h.toFixed(2)}`,
      );
    }
  }
}

console.log(`Rotas analisadas: ${pages.length}`);
if (issues.length) {
  console.error(`Possível canibalização (${issues.length}):`);
  for (const i of issues) console.error(` - ${i}`);
  process.exit(1);
}
console.log("Nenhuma canibalização detectada.");
