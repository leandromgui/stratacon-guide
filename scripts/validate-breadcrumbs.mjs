#!/usr/bin/env node
/**
 * Valida BreadcrumbList JSON-LD em todas as rotas do site.
 *
 * Uso:
 *   node scripts/validate-breadcrumbs.mjs                 # valida estrutura local
 *   node scripts/validate-breadcrumbs.mjs --base=https://meusite.com   # imprime URLs + links Rich Results Test
 *
 * Validações (regras Google):
 *  - @context = https://schema.org
 *  - @type = BreadcrumbList
 *  - itemListElement: array não vazio
 *  - Cada item: @type=ListItem, position (1..n sequencial), name (string), item (URL)
 *  - position começa em 1 e é contíguo
 */
import fs from "node:fs";
import path from "node:path";

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, "").split("=");
    return [k, v ?? true];
  }),
);
const BASE = (args.base || "").replace(/\/$/, "");
const ROUTES_DIR = "src/routes";

function fileToPath(file) {
  let base = file.replace(/\.tsx$/, "");
  if (base === "index") return "/";
  const parts = base.split(".");
  if (parts.at(-1) === "index") parts.pop();
  return "/" + parts.join("/");
}

function extractJsonLd(src) {
  // procura JSON.stringify({...}) dentro do bloco scripts: type application/ld+json
  const re = /children:\s*JSON\.stringify\(([\s\S]*?)\)\s*,?\s*\}/g;
  const out = [];
  let m;
  while ((m = re.exec(src))) {
    try {
      // eslint-disable-next-line no-new-func
      const obj = new Function(`return (${m[1]});`)();
      out.push(obj);
    } catch (e) {
      out.push({ __parseError: e.message });
    }
  }
  return out;
}

function validateBreadcrumb(bc, routePath) {
  const errs = [];
  if (bc.__parseError) return [`JSON-LD parse error: ${bc.__parseError}`];
  if (bc["@context"] !== "https://schema.org") errs.push("@context inválido");
  if (bc["@type"] !== "BreadcrumbList") errs.push("@type ≠ BreadcrumbList");
  const items = bc.itemListElement;
  if (!Array.isArray(items) || items.length === 0)
    errs.push("itemListElement vazio");
  else {
    items.forEach((it, i) => {
      if (it["@type"] !== "ListItem") errs.push(`item[${i}].@type ≠ ListItem`);
      if (it.position !== i + 1)
        errs.push(`item[${i}].position=${it.position}, esperado ${i + 1}`);
      if (typeof it.name !== "string" || !it.name.trim())
        errs.push(`item[${i}].name ausente`);
      if (typeof it.item !== "string" || !it.item.trim())
        errs.push(`item[${i}].item ausente`);
    });
    // último item deve corresponder à rota
    const last = items.at(-1);
    if (last?.item && last.item !== routePath)
      errs.push(`último item="${last.item}" ≠ rota "${routePath}"`);
  }
  return errs;
}

const files = fs
  .readdirSync(ROUTES_DIR)
  .filter((f) => f.endsWith(".tsx") && !f.startsWith("__"));

const report = [];
let ok = 0,
  fail = 0,
  skipped = 0;

for (const f of files.sort()) {
  const routePath = fileToPath(f);
  const src = fs.readFileSync(path.join(ROUTES_DIR, f), "utf8");
  const blocks = extractJsonLd(src);
  const bc = blocks.find((b) => b?.["@type"] === "BreadcrumbList");
  if (!bc) {
    if (routePath === "/") {
      skipped++;
      report.push({ routePath, status: "SKIP (home)", errors: [] });
      continue;
    }
    fail++;
    report.push({ routePath, status: "❌ MISSING", errors: ["sem BreadcrumbList"] });
    continue;
  }
  const errs = validateBreadcrumb(bc, routePath);
  if (errs.length) {
    fail++;
    report.push({ routePath, status: "❌ INVALID", errors: errs });
  } else {
    ok++;
    report.push({ routePath, status: "✅ OK", errors: [], depth: bc.itemListElement.length });
  }
}

console.log("\n=== Validação local de BreadcrumbList ===\n");
for (const r of report) {
  const depth = r.depth ? ` (depth=${r.depth})` : "";
  console.log(`${r.status.padEnd(12)} ${r.routePath}${depth}`);
  for (const e of r.errors) console.log(`   • ${e}`);
}
console.log(
  `\nTotal: ${report.length} | ✅ ${ok} | ❌ ${fail} | ⏭  ${skipped}\n`,
);

if (BASE) {
  console.log("=== URLs para Rich Results Test ===");
  console.log(`Base: ${BASE}\n`);
  for (const r of report.filter((x) => x.status.startsWith("✅") || x.routePath === "/")) {
    const full = `${BASE}${r.routePath}`;
    const rrt = `https://search.google.com/test/rich-results?url=${encodeURIComponent(full)}`;
    console.log(`- [ ] ${full}\n      RRT: ${rrt}`);
  }
  console.log();
} else {
  console.log(
    "Dica: passe --base=https://seusite.com para gerar checklist com links do Rich Results Test.\n",
  );
}

process.exit(fail > 0 ? 1 : 0);
