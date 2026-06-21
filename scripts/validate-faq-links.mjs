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
const REPORT_DIR = "/mnt/documents";
const REPORT_PATH = path.join(REPORT_DIR, "faq-links-report.md");
const REPORT_JSON = path.join(REPORT_DIR, "faq-links-report.json");
const REPORT_FAILURES_JSON = path.join(REPORT_DIR, "faq-links-failures.json");

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

function extractLinksByQuestion(block) {
  // Localiza cada `q: "..."` e associa os <Link to="..."> que aparecem
  // antes da próxima pergunta (i.e., dentro do mesmo objeto da FAQ).
  const qRe = /q:\s*["'`]([^"'`]+)["'`]/g;
  const positions = [];
  let m;
  while ((m = qRe.exec(block)) !== null) {
    positions.push({ q: m[1], start: m.index });
  }
  const linkRe = /<Link\s+to=\{?["'`]([^"'`]+)["'`]\}?/g;
  const entries = [];
  while ((m = linkRe.exec(block)) !== null) {
    const idx = m.index;
    let owner = positions[0]?.q ?? "(desconhecida)";
    for (let i = 0; i < positions.length; i++) {
      if (positions[i].start <= idx) owner = positions[i].q;
      else break;
    }
    entries.push({ question: owner, to: m[1] });
  }
  return entries;
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
const entries = extractLinksByQuestion(faqBlock);
const routes = collectRoutes(ROUTES_DIR);
const redirects = collectRedirectTargets();

const results = entries.map((e) => {
  const normalized = e.to.endsWith("/") && e.to !== "/" ? e.to.slice(0, -1) : e.to;
  const reasons = [];
  if (!routes.has(normalized)) reasons.push("Rota inexistente");
  if (redirects.has(normalized)) reasons.push("Aponta para rota com redirect declarado");
  return { ...e, status: reasons.length === 0 ? "ok" : "fail", reasons };
});

const failures = results.filter((r) => r.status === "fail");

// Sempre escreve relatório (sucesso ou falha) em /mnt/documents.
try {
  fs.mkdirSync(REPORT_DIR, { recursive: true });
  const timestamp = new Date().toISOString();
  const lines = [];
  lines.push(`# Relatório de links internos do FAQ (Home)`);
  lines.push("");
  lines.push(`- Gerado em: ${timestamp}`);
  lines.push(`- Arquivo analisado: \`${HOME_FILE}\``);
  lines.push(`- Links analisados: ${results.length}`);
  lines.push(`- Rotas detectadas: ${routes.size}`);
  lines.push(`- Falhas: **${failures.length}**`);
  lines.push("");
  if (failures.length === 0) {
    lines.push("✓ Nenhum problema encontrado.");
  } else {
    lines.push("## Falhas");
    lines.push("");
    lines.push("| # | Pergunta | Link | Motivo |");
    lines.push("|---|----------|------|--------|");
    failures.forEach((f, i) => {
      const q = f.question.replace(/\|/g, "\\|");
      lines.push(`| ${i + 1} | ${q} | \`${f.to}\` | ${f.reasons.join("; ")} |`);
    });
  }
  lines.push("");
  lines.push("## Todos os links");
  lines.push("");
  lines.push("| Status | Pergunta | Link | Observação |");
  lines.push("|--------|----------|------|------------|");
  results.forEach((r) => {
    const icon = r.status === "ok" ? "✓" : "✖";
    const q = r.question.replace(/\|/g, "\\|");
    lines.push(`| ${icon} | ${q} | \`${r.to}\` | ${r.reasons.join("; ") || "—"} |`);
  });
  fs.writeFileSync(REPORT_PATH, lines.join("\n") + "\n");
  fs.writeFileSync(
    REPORT_JSON,
    JSON.stringify({ generatedAt: timestamp, routesCount: routes.size, results }, null, 2),
  );

  const failuresForJson = failures.map((f) => ({
    Pergunta: f.question,
    Link: f.to,
    Motivo: f.reasons.join("; "),
  }));
  fs.writeFileSync(
    REPORT_FAILURES_JSON,
    JSON.stringify(failuresForJson, null, 2) + "\n",
  );
  console.log(`→ Relatório MD: ${REPORT_PATH}`);
  console.log(`→ Relatório JSON completo: ${REPORT_JSON}`);
  console.log(`→ Falhas JSON (automação): ${REPORT_FAILURES_JSON}`);
} catch (err) {
  console.warn(`Aviso: não foi possível gravar relatório (${err.message}).`);
}

if (failures.length > 0) {
  console.error("\n✖ Validação de links internos do FAQ falhou:");
  for (const f of failures) {
    console.error(`  - [${f.reasons.join("; ")}] "${f.question}" → ${f.to}`);
  }
  process.exit(1);
}

console.log(
  `✓ FAQ Home: ${results.length} link(s) validados contra ${routes.size} rotas. Sem redirects indesejados.`,
);