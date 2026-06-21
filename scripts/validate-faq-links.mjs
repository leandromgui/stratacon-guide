#!/usr/bin/env node
/**
 * Valida links internos do FAQ da Home (src/routes/index.tsx):
 *  - Cada <Link to="..."> dentro do array `faqs` deve apontar para uma rota
 *    existente em src/routes/.
 *  - Não pode coincidir com nenhum redirect declarado em src/router.tsx,
 *    src/start.ts ou vite.config.ts (uso de `redirect(` / `Redirect`).
 *
 * Falha com exit 1 quando encontra problemas. Rodado no prebuild.
 *
 * Modo dry-run: passar --dry-run (ou DRY_RUN=1) para preview sem
 * quebrar o build e sem gravar arquivos.
 *   → Para ainda gerar o JSON de falhas em dry-run, defina
 *     FAQ_LINKS_DRY_RUN_REPORT=<caminho>.
 *   → Para gerar também um relatório HTML em dry-run, defina
 *     FAQ_LINKS_DRY_RUN_REPORT_HTML=<caminho>.
 */
import fs from "node:fs";
import path from "node:path";

const DRY_RUN = process.argv.includes("--dry-run") || process.env.DRY_RUN === "1";

const ROUTES_DIR = "src/routes";
const HOME_FILE = "src/routes/index.tsx";
const REDIRECT_FILES = ["src/router.tsx", "src/start.ts", "vite.config.ts"];
const REPORT_DIR = process.env.FAQ_LINKS_REPORT_DIR || "/mnt/documents";
const REPORT_PATH = path.join(REPORT_DIR, "faq-links-report.md");
const REPORT_JSON = path.join(REPORT_DIR, "faq-links-report.json");
const REPORT_FAILURES_JSON = path.join(REPORT_DIR, "faq-links-failures.json");
const REPORT_HTML = path.join(REPORT_DIR, "faq-links-report.html");
const DRY_RUN_REPORT_JSON = process.env.FAQ_LINKS_DRY_RUN_REPORT;
const DRY_RUN_REPORT_HTML = process.env.FAQ_LINKS_DRY_RUN_REPORT_HTML;

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

function buildSummary() {
  const byType = {
    "Rota inexistente": 0,
    "Aponta para rota com redirect declarado": 0,
  };
  for (const f of failures) {
    for (const r of f.reasons) {
      if (r in byType) byType[r]++;
    }
  }
  const byStatus = { ok: 0, fail: 0 };
  for (const r of results) {
    byStatus[r.status]++;
  }
  return {
    totalFailures: failures.length,
    byType,
    byStatus,
  };
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildHtml({ timestamp, mode }) {
  const summary = buildSummary();
  const allTypes = ["Rota inexistente", "Aponta para rota com redirect declarado"];

  const rows = results
    .map((r) => {
      const icon = r.status === "ok" ? "✓" : "✖";
      const cls = r.status === "ok" ? "ok" : "fail";
      const types = r.reasons.join("; ") || "";
      return `<tr class="${cls}" data-status="${r.status}" data-types="${escapeHtml(types)}" data-path="${escapeHtml(r.to)}"><td>${icon}</td><td>${escapeHtml(r.question)}</td><td><code>${escapeHtml(r.to)}</code></td><td>${escapeHtml(r.reasons.join("; ") || "—")}</td></tr>`;
    })
    .join("\n");

  const failureRows = failures
    .map((f, i) => {
      const types = f.reasons.join("; ");
      return `<tr data-types="${escapeHtml(types)}" data-path="${escapeHtml(f.to)}"><td>${i + 1}</td><td>${escapeHtml(f.question)}</td><td><code>${escapeHtml(f.to)}</code></td><td>${escapeHtml(f.reasons.join("; "))}</td></tr>`;
    })
    .join("\n");

  const byTypeRows = Object.entries(summary.byType)
    .map(([k, v]) => `<tr><td>${escapeHtml(k)}</td><td>${v}</td></tr>`)
    .join("\n");

  const typeCheckboxes = allTypes
    .map(
      (t) =>
        `<label class="chip"><input type="checkbox" class="filter-type" value="${escapeHtml(t)}" checked /> ${escapeHtml(t)}</label>`
    )
    .join(" ");

  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8" />
<title>Relatório de links do FAQ${mode ? ` (${mode})` : ""}</title>
<meta name="viewport" content="width=device-width,initial-scale=1" />
<style>
  :root { color-scheme: light dark; }
  body { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif; max-width: 1100px; margin: 2rem auto; padding: 0 1rem; line-height: 1.5; }
  h1 { margin-bottom: .25rem; }
  .meta { color: #666; font-size: .9rem; margin-bottom: 1.5rem; }
  .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: .75rem; margin: 1rem 0 2rem; }
  .card { border: 1px solid #8884; border-radius: 8px; padding: .9rem 1rem; }
  .card .label { font-size: .75rem; text-transform: uppercase; letter-spacing: .05em; color: #888; }
  .card .value { font-size: 1.6rem; font-weight: 600; }
  .card.fail .value { color: #c0392b; }
  .card.ok .value { color: #1e8449; }
  .filters { display: flex; flex-wrap: wrap; gap: 1rem; align-items: center; margin-bottom: 1.5rem; padding: .75rem 1rem; border: 1px solid #8883; border-radius: 8px; }
  #highlight-btn { padding: .35rem .7rem; border: 1px solid #8885; border-radius: 4px; background: #fff; cursor: pointer; font-size: .85rem; }
  #highlight-btn.active { background: #c0392b; color: #fff; border-color: #c0392b; }
  .highlight-failures tr.fail { background: #ffeaea !important; outline: 2px solid #c0392b; outline-offset: -2px; }
  .highlight-failures #failures-table tbody tr { background: #ffeaea !important; outline: 2px solid #c0392b; outline-offset: -2px; }
  .filters label { font-size: .85rem; }
  .filters input[type="text"] { padding: .35rem .5rem; border: 1px solid #8885; border-radius: 4px; font-size: .85rem; min-width: 220px; }
  .chip { display: inline-flex; align-items: center; gap: .25rem; padding: .25rem .5rem; border-radius: 999px; border: 1px solid #8884; font-size: .82rem; cursor: pointer; user-select: none; }
  .chip input { accent-color: #3b82f6; }
  .chip:has(input:checked) { background: #3b82f60d; border-color: #3b82f6aa; }
  table { width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: .92rem; }
  th, td { border-bottom: 1px solid #8883; padding: .5rem .6rem; text-align: left; vertical-align: top; }
  th { background: #8881; }
  tr.fail td:first-child { color: #c0392b; font-weight: 700; }
  tr.ok td:first-child { color: #1e8449; font-weight: 700; }
  tr.hidden { display: none; }
  code { background: #8882; padding: .1rem .35rem; border-radius: 4px; }
  .empty { padding: 1rem; border: 1px dashed #8884; border-radius: 8px; color: #1e8449; }
</style>
</head>
<body>
  <h1>Relatório de links internos do FAQ${mode ? ` <small>(${escapeHtml(mode)})</small>` : ""}</h1>
  <div class="meta">Gerado em ${escapeHtml(timestamp)} · Arquivo analisado: <code>${escapeHtml(HOME_FILE)}</code></div>

  <section class="cards">
    <div class="card"><div class="label">Links analisados</div><div class="value">${results.length}</div></div>
    <div class="card"><div class="label">Rotas detectadas</div><div class="value">${routes.size}</div></div>
    <div class="card ${summary.totalFailures > 0 ? "fail" : "ok"}"><div class="label">Falhas</div><div class="value">${summary.totalFailures}</div></div>
    <div class="card ok"><div class="label">OK</div><div class="value">${summary.byStatus.ok}</div></div>
  </section>

  <div class="filters">
    <label>Status:</label>
    <select id="filter-status">
      <option value="all">Todos</option>
      <option value="fail">Falha</option>
      <option value="ok">OK</option>
    </select>
    <label style="margin-left:.5rem">Caminho:</label>
    <input type="text" id="filter-path" placeholder="Digite parte do link…" />
    <label style="margin-left:.5rem">Tipo:</label>
    ${typeCheckboxes}
    <label style="margin-left:.5rem">Ordenar por:</label>
    <select id="sort-by">
      <option value="default">Padrão</option>
      <option value="status">Status</option>
      <option value="path">Caminho</option>
      <option value="type">Tipo</option>
    </select>
    <select id="sort-dir">
      <option value="asc">Ascendente</option>
      <option value="desc">Descendente</option>
    </select>
    <button id="highlight-btn" type="button">Destacar falhas</button>
  </div>

  <h2>Resumo por motivo</h2>
  <table>
    <thead><tr><th>Motivo</th><th>Quantidade</th></tr></thead>
    <tbody>
${byTypeRows}
    </tbody>
  </table>

  <h2>Falhas</h2>
  ${failures.length === 0 ? `<div class="empty">✓ Nenhuma falha encontrada.</div>` : `<table id="failures-table"><thead><tr><th>#</th><th>Pergunta</th><th>Link</th><th>Motivo</th></tr></thead><tbody>\n${failureRows}\n</tbody></table>`}

  <h2>Todos os links</h2>
  <table id="all-links-table">
    <thead><tr><th>Status</th><th>Pergunta</th><th>Link</th><th>Observação</th></tr></thead>
    <tbody>
${rows}
    </tbody>
  </table>

  <script>
    const statusSelect = document.getElementById('filter-status');
    const pathInput = document.getElementById('filter-path');
    const typeChecks = document.querySelectorAll('.filter-type');

    function getSelectedTypes() {
      return Array.from(typeChecks).filter(c => c.checked).map(c => c.value);
    }

    function matches(row) {
      const status = statusSelect.value;
      const pathTerm = pathInput.value.trim().toLowerCase();
      const selectedTypes = getSelectedTypes();
      const rowStatus = row.dataset.status || '';
      const rowTypes = row.dataset.types || '';
      const rowText = row.textContent.toLowerCase();

      if (status !== 'all' && rowStatus !== status) return false;
      if (pathTerm && !rowText.includes(pathTerm)) return false;
      if (selectedTypes.length > 0 && rowTypes) {
        const rowTypeList = rowTypes.split(';').map(s => s.trim());
        const hasMatch = selectedTypes.some(t => rowTypeList.includes(t));
        if (!hasMatch) return false;
      }
      return true;
    }

    function apply() {
      for (const table of ['failures-table', 'all-links-table']) {
        const el = document.getElementById(table);
        if (!el) continue;
        let visible = 0;
        for (const row of el.querySelectorAll('tbody tr')) {
          const show = matches(row);
          row.classList.toggle('hidden', !show);
          if (show) visible++;
        }
        // If a table ends up fully hidden, we leave the table itself visible but empty
      }
    }

    const sortBy = document.getElementById('sort-by');
    const sortDir = document.getElementById('sort-dir');

    function sortTable(tableId, col) {
      const table = document.getElementById(tableId);
      if (!table) return;
      const tbody = table.querySelector('tbody');
      const dir = sortDir.value === 'desc' ? -1 : 1;
      const rowsArr = Array.from(tbody.querySelectorAll('tr'));
      rowsArr.sort((a, b) => {
        let av, bv;
        if (col === 'status') {
          av = a.dataset.status || '';
          bv = b.dataset.status || '';
        } else if (col === 'path') {
          av = (a.dataset.path || '').toLowerCase();
          bv = (b.dataset.path || '').toLowerCase();
        } else if (col === 'type') {
          av = (a.dataset.types || '').toLowerCase();
          bv = (b.dataset.types || '').toLowerCase();
        } else {
          return 0;
        }
        if (av < bv) return -1 * dir;
        if (av > bv) return 1 * dir;
        return 0;
      });
      for (const row of rowsArr) tbody.appendChild(row);

      // renumera a coluna # na tabela de falhas
      if (tableId === 'failures-table') {
        let idx = 1;
        for (const row of tbody.querySelectorAll('tr')) {
          if (!row.classList.contains('hidden')) {
            row.cells[0].textContent = idx++;
          }
        }
      }
    }

    function applySort() {
      const col = sortBy.value;
      if (col === 'default') {
        // reload para restaurar ordem original
        location.reload();
        return;
      }
      for (const id of ['failures-table', 'all-links-table']) {
        sortTable(id, col);
      }
    }

    sortBy.addEventListener('change', applySort);
    sortDir.addEventListener('change', applySort);

    statusSelect.addEventListener('change', apply);
    pathInput.addEventListener('input', apply);
    for (const cb of typeChecks) cb.addEventListener('change', apply);
  </script>
</body>
</html>
`;
}

// No dry-run não grava arquivos por padrão (exceto se DRY_RUN_REPORT_JSON estiver setado).
if (!DRY_RUN) {
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
      JSON.stringify({ generatedAt: timestamp, routesCount: routes.size, summary: buildSummary(), results }, null, 2),
    );

    const failuresForJson = failures.map((f) => ({
      Pergunta: f.question,
      Link: f.to,
      Motivo: f.reasons.join("; "),
    }));
    fs.writeFileSync(
      REPORT_FAILURES_JSON,
      JSON.stringify({ summary: buildSummary(), failures: failuresForJson }, null, 2) + "\n",
    );
    fs.writeFileSync(REPORT_HTML, buildHtml({ timestamp, mode: "" }));
    console.log(`→ Relatório MD: ${REPORT_PATH}`);
    console.log(`→ Relatório JSON completo: ${REPORT_JSON}`);
    console.log(`→ Falhas JSON (automação): ${REPORT_FAILURES_JSON}`);
    console.log(`→ Relatório HTML: ${REPORT_HTML}`);
  } catch (err) {
    console.warn(`Aviso: não foi possível gravar relatório (${err.message}).`);
  }
}

// Em dry-run, exporta apenas o JSON de falhas se o usuário solicitou via env.
if (DRY_RUN && DRY_RUN_REPORT_JSON) {
  try {
    const dir = path.dirname(DRY_RUN_REPORT_JSON);
    fs.mkdirSync(dir, { recursive: true });
    const failuresForJson = failures.map((f) => ({
      Pergunta: f.question,
      Link: f.to,
      Motivo: f.reasons.join("; "),
    }));
    fs.writeFileSync(
      DRY_RUN_REPORT_JSON,
      JSON.stringify({ summary: buildSummary(), failures: failuresForJson }, null, 2) + "\n",
    );
    console.log(`→ Falhas JSON (dry-run): ${DRY_RUN_REPORT_JSON}`);
  } catch (err) {
    console.warn(`Aviso: não foi possível gravar relatório dry-run (${err.message}).`);
  }
}

// Em dry-run, exporta o HTML apenas se o usuário solicitou via env.
if (DRY_RUN && DRY_RUN_REPORT_HTML) {
  try {
    const dir = path.dirname(DRY_RUN_REPORT_HTML);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(DRY_RUN_REPORT_HTML, buildHtml({ timestamp: new Date().toISOString(), mode: "dry-run" }));
    console.log(`→ Relatório HTML (dry-run): ${DRY_RUN_REPORT_HTML}`);
  } catch (err) {
    console.warn(`Aviso: não foi possível gravar HTML dry-run (${err.message}).`);
  }
}

if (failures.length > 0) {
  console.error("\n✖ Validação de links internos do FAQ falhou:");
  for (const f of failures) {
    console.error(`  - [${f.reasons.join("; ")}] "${f.question}" → ${f.to}`);
  }
  if (!DRY_RUN) process.exit(1);
}

const modeLabel = DRY_RUN ? " (dry-run)" : "";
console.log(
  `✓${modeLabel} FAQ Home: ${results.length} link(s) validados contra ${routes.size} rotas. Sem redirects indesejados.`,
);