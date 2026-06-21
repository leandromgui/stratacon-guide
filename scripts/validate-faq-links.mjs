#!/usr/bin/env node
/**
 * Valida links internos do FAQ da Home (src/routes/index.tsx):
 *  - Cada <Link to="..."> dentro do array `faqs` deve apontar para uma rota
 *    existente em src/routes/.
 *  - Não pode coincidir com nenhum redirect declarado em src/router.tsx,
 *    src/start.ts ou vite.config.ts (uso de `redirect(` / `Redirect`).
 *
 * Falha com exit 1 quando encontra problemas. Rodado no prebuild.
 */
import fs from "node:fs";
import path from "node:path";

const ROUTES_DIR = "src/routes";
const HOME_FILE = "src/routes/index.tsx";
const REDIRECT_FILES = ["src/router.tsx", "src/start.ts", "vite.config.ts"];

function fileToRoutePath(file) {
  let base = file.replace(/\.tsx?$/, "");
  if (base === "index") return "/";
  // ignora segmentos pathless (_authenticated etc) ao construir URL pública
  const parts = base.split(".").filter((p) => !p.startsWith("_"));
  if (parts.at(-1) === "index") parts.pop();
  if (parts.length === 0) return "/";
  return "/" + parts.join("/");
}

function collectRoutes(dir, acc = new Set()) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectRoutes(full, acc);
      continue;
    }
    if (!/\.tsx?$/.test(entry.name)) continue;
    if (entry.name === "__root.tsx") continue;
    if (entry.name.startsWith("-")) continue; // arquivos ignorados pelo router
    const rel = path.relative(ROUTES_DIR, full).replace(/\\/g, "/");
    // suporta tanto flat (segmentos.x.tsx) como diretórios (segmentos/x.tsx)
    const flat = rel.replace(/\//g, ".");
    acc.add(fileToRoutePath(flat));
  }
  return acc;
}

function extractFaqBlock(src) {
  const start = src.indexOf("const faqs");
  if (start === -1) throw new Error("Array `faqs` não encontrado em " + HOME_FILE);
  // encontra o fechamento ']' do array no nível 0
  const openIdx = src.indexOf("[", start);
  let depth = 0;
  for (let i = openIdx; i < src.length; i++) {
    const c = src[i];
    if (c === "[") depth++;
    else if (c === "]") {
      depth--;
      if (depth === 0) return src.slice(openIdx, i + 1);
    }
  }
  throw new Error("Não foi possível delimitar o array `faqs`");
}

function extractLinks(block) {
  const re = /<Link\s+to=\{?["'`]([^"'`]+)["'`]\}?/g;
  const out = [];
  let m;
  while ((m = re.exec(block)) !== null) out.push(m[1]);
  return out;
}

function collectRedirectTargets() {
  const targets = new Set();
  for (const f of REDIRECT_FILES) {
    if (!fs.existsSync(f)) continue;
    const src = fs.readFileSync(f, "utf8");
    // padrões: redirect({ to: "/x" }) ou throw redirect({ to: '/x' })
    const re = /redirect\s*\(\s*\{[^}]*\bto\s*:\s*["'`]([^"'`]+)["'`]/g;
    let m;
    while ((m = re.exec(src)) !== null) targets.add(m[1]);
  }
  return targets;
}

const home = fs.readFileSync(HOME_FILE, "utf8");
const faqBlock = extractFaqBlock(home);
const links = extractLinks(faqBlock);
const routes = collectRoutes(ROUTES_DIR);
const redirects = collectRedirectTargets();

const errors = [];
const seen = new Set();
for (const to of links) {
  if (seen.has(to)) continue;
  seen.add(to);
  const normalized = to.endsWith("/") && to !== "/" ? to.slice(0, -1) : to;
  if (!routes.has(normalized)) {
    errors.push(`Rota inexistente: ${to}`);
  }
  if (redirects.has(normalized)) {
    errors.push(`Link aponta para rota com redirect declarado: ${to}`);
  }
}

if (errors.length > 0) {
  console.error("\n✖ Validação de links internos do FAQ falhou:");
  for (const e of errors) console.error("  - " + e);
  console.error(`\nRotas válidas detectadas: ${routes.size}.`);
  process.exit(1);
}

console.log(
  `✓ FAQ Home: ${seen.size} link(s) internos validados contra ${routes.size} rotas. Sem redirects indesejados.`,
);