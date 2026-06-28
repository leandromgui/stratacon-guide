#!/usr/bin/env node
/**
 * Valida que cada rota pública gera SSR HTML com exatamente 1 tag de cada um:
 *   - <title>
 *   - <link rel="canonical">
 *   - <meta property="og:title">
 *   - <meta property="og:description">
 *   - <meta property="og:url">
 *   - <meta property="og:image">
 *   - <meta name="twitter:image">
 *   - <meta name="description">
 *
 * Uso:
 *   node scripts/validate-head-uniqueness.mjs                       # localhost:8080
 *   node scripts/validate-head-uniqueness.mjs --base=https://x.com  # contra prod
 */
import fs from "node:fs";
import path from "node:path";

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, "").split("=");
    return [k, v ?? true];
  }),
);
const BASE = (args.base || "http://localhost:8080").replace(/\/$/, "");
const ROUTES_DIR = "src/routes";

// Rotas a ignorar: API, layouts, autenticadas, dinâmicas, recursos.
const SKIP_PATTERNS = [
  /^_/, // pathless / layout (e.g. _authenticated)
  /^api\./,
  /\$/, // segmentos dinâmicos
  /^auth$/,
  /^sitemap\[\.\]xml$/,
  /^README$/,
];

function fileToRoute(file) {
  let base = file.replace(/\.tsx?$/, "");
  if (base === "index") return { route: "/", base };
  const parts = base.split(".");
  if (parts.at(-1) === "index") parts.pop();
  return { route: "/" + parts.join("/"), base };
}

function listRoutes(dir, prefix = "") {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith("_") || entry.name === "api") continue;
      out.push(...listRoutes(full, prefix + entry.name + "/"));
      continue;
    }
    if (!/\.tsx?$/.test(entry.name)) continue;
    if (entry.name.startsWith("__")) continue;
    const stem = entry.name.replace(/\.tsx?$/, "");
    if (SKIP_PATTERNS.some((re) => re.test(stem))) continue;
    const { route } = fileToRoute(entry.name);
    out.push(prefix ? "/" + prefix.replace(/\/$/, "") + route : route);
  }
  return out;
}

function countMatches(html, regex) {
  return (html.match(regex) || []).length;
}

const CHECKS = [
  { name: "title", re: /<title[^>]*>/gi, expected: 1 },
  {
    name: "canonical",
    re: /<link[^>]+rel=["']canonical["'][^>]*>/gi,
    expected: 1,
  },
  {
    name: "og:title",
    re: /<meta[^>]+property=["']og:title["'][^>]*>/gi,
    expected: 1,
  },
  {
    name: "og:description",
    re: /<meta[^>]+property=["']og:description["'][^>]*>/gi,
    expected: 1,
  },
  {
    name: "og:url",
    re: /<meta[^>]+property=["']og:url["'][^>]*>/gi,
    expected: 1,
  },
  {
    name: "og:image",
    re: /<meta[^>]+property=["']og:image["'][^>]*>/gi,
    expected: 1,
  },
  {
    name: "twitter:image",
    re: /<meta[^>]+name=["']twitter:image["'][^>]*>/gi,
    expected: 1,
  },
  {
    name: "description",
    re: /<meta[^>]+name=["']description["'][^>]*>/gi,
    expected: 1,
  },
];

async function fetchRoute(route) {
  const url = `${BASE}${route}`;
  const res = await fetch(url, { redirect: "manual" });
  return { status: res.status, html: await res.text(), url };
}

const routes = Array.from(new Set(listRoutes(ROUTES_DIR))).sort();
let ok = 0;
let fail = 0;
const failures = [];

console.log(`\n=== Validação de unicidade de tags <head> ===`);
console.log(`Base: ${BASE}`);
console.log(`Rotas: ${routes.length}\n`);

for (const route of routes) {
  try {
    const { status, html } = await fetchRoute(route);
    if (status >= 300) {
      console.log(`⏭  ${route}  (HTTP ${status} — redirect/skip)`);
      continue;
    }
    const issues = [];
    for (const check of CHECKS) {
      const n = countMatches(html, check.re);
      if (n !== check.expected)
        issues.push(`${check.name}=${n} (esperado ${check.expected})`);
    }
    if (issues.length) {
      fail++;
      failures.push({ route, issues });
      console.log(`❌ ${route}`);
      for (const i of issues) console.log(`     • ${i}`);
    } else {
      ok++;
      console.log(`✅ ${route}`);
    }
  } catch (e) {
    fail++;
    failures.push({ route, issues: [`fetch error: ${e.message}`] });
    console.log(`❌ ${route}  (${e.message})`);
  }
}

console.log(`\nTotal: ${routes.length} | ✅ ${ok} | ❌ ${fail}\n`);
if (fail > 0) {
  console.log("Falhas:");
  for (const f of failures) {
    console.log(`  ${f.route}`);
    for (const i of f.issues) console.log(`    • ${i}`);
  }
}
process.exit(fail > 0 ? 1 : 0);