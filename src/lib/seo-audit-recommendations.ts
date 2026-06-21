import type { AuditResult } from "@/lib/seo-audit.functions";
import { ALL_ENTRIES, type UrlEntry } from "@/lib/seo-audit-urls";

export type Severity = "critical" | "warning" | "info";

export type RecAction = {
  label: string;
  href: string;
  external?: boolean;
};

export type Recommendation = {
  id: string;
  severity: Severity;
  title: string;
  detail: string;
  actions: RecAction[];
  impact: number; // 0–100, higher = mais urgente para indexação/CTR
};

export type UrlRecommendations = {
  url: string;
  path: string;
  kind: "canonical" | "redirect";
  expectedTarget?: string;
  worst: Severity;
  items: Recommendation[];
  score: number; // 0–100, prioridade agregada
  priorityLabel: "P0" | "P1" | "P2" | "P3";
};

const sevRank: Record<Severity, number> = { critical: 3, warning: 2, info: 1 };

// Peso base por severidade
const SEV_BASE: Record<Severity, number> = {
  critical: 55,
  warning: 30,
  info: 12,
};

// Bônus por tipo de problema (impacto direto em indexação/cliques)
const ID_BONUS: Record<string, number> = {
  "api-error": 5,
  robots: 25,
  noindex: 20,
  "not-indexed": 25,
  "canonical-mismatch": 12,
  "canonical-missing": 10,
  fetch: 15,
  unknown: 6,
  "redirect-not-following": 18,
  "redirect-still-indexed": 8,
  "redirect-wrong-canonical": 10,
  "redirect-no-301": 12,
};

// Páginas comerciais de alto tráfego/conversão ganham peso extra
const HIGH_VALUE_PATHS = new Set<string>([
  "/",
  "/diagnostico",
  "/metodo",
  "/contato",
  "/goiania",
  "/solucoes",
  "/solucoes/planejamento-tributario",
  "/solucoes/regularizacao-fiscal",
  "/solucoes/holding-patrimonial",
  "/solucoes/contabilidade-empresarial",
  "/solucoes/abrir-empresa",
  "/solucoes/trocar-contabilidade",
  "/segmentos/medicos-clinicas",
  "/segmentos/comercio",
]);

function pageWeight(path: string, kind: "canonical" | "redirect") {
  if (kind === "redirect") return 0.7; // redirecionadas têm menos impacto direto
  if (HIGH_VALUE_PATHS.has(path)) return 1.25;
  return 1.0;
}

function scoreItem(
  rec: Omit<Recommendation, "impact">,
  path: string,
  kind: "canonical" | "redirect",
): number {
  const base = SEV_BASE[rec.severity];
  const bonus = ID_BONUS[rec.id] ?? 0;
  const weight = pageWeight(path, kind);
  return Math.min(100, Math.round((base + bonus) * weight));
}

function aggregateScore(items: Recommendation[]): number {
  if (items.length === 0) return 0;
  const max = Math.max(...items.map((i) => i.impact));
  const rest = items
    .map((i) => i.impact)
    .sort((a, b) => b - a)
    .slice(1)
    .reduce((s, v) => s + v, 0);
  return Math.min(100, Math.round(max + rest * 0.15));
}

function priorityFromScore(score: number): "P0" | "P1" | "P2" | "P3" {
  if (score >= 80) return "P0";
  if (score >= 60) return "P1";
  if (score >= 35) return "P2";
  return "P3";
}

export function priorityClass(p: "P0" | "P1" | "P2" | "P3"): string {
  return p === "P0"
    ? "bg-rose-600 text-white border-rose-700"
    : p === "P1"
      ? "bg-amber-500 text-white border-amber-600"
      : p === "P2"
        ? "bg-sky-500 text-white border-sky-600"
        : "bg-muted text-foreground border-border";
}

function pathOf(url: string, siteUrl: string): string {
  try {
    const origin = new URL(siteUrl).origin;
    return url.startsWith(origin) ? url.slice(origin.length) || "/" : url;
  } catch {
    return url;
  }
}

function entryFor(path: string): UrlEntry | undefined {
  return ALL_ENTRIES.find((e) => e.path === path);
}

function gscInspectHref(siteUrl: string, url: string) {
  // GSC URL Inspection deeplink
  const u = encodeURIComponent(url);
  const r = encodeURIComponent(siteUrl);
  return `https://search.google.com/search-console/inspect?resource_id=${r}&id=${u}`;
}

export function recommendForResult(
  r: AuditResult,
  siteUrl: string,
): Recommendation[] {
  const out: Recommendation[] = [];
  const path = pathOf(r.url, siteUrl);
  const entry = entryFor(path);
  const kind = r.kind;
  const gsc = gscInspectHref(siteUrl, r.url);

  if (!r.ok) {
    out.push({
      id: "api-error",
      severity: "critical",
      title: "Falha ao inspecionar a URL no Google Search Console",
      detail:
        r.error ??
        "A API não retornou dados. Verifique a conexão do conector, o site verificado e a cota diária (~2.000/dia).",
      actions: [
        { label: "Abrir no GSC", href: gsc, external: true },
      ],
    });
    return out;
  }

  const fetchState = r.pageFetchState ?? "";
  const robots = r.robotsTxtState ?? "";
  const coverage = (r.coverageState ?? "").toLowerCase();
  const indexing = (r.indexingState ?? "").toUpperCase();
  const verdict = (r.verdict ?? "").toUpperCase();

  // robots.txt block
  if (robots === "DISALLOWED" || indexing.includes("BLOCKED_BY_ROBOTS")) {
    out.push({
      id: "robots",
      severity: "critical",
      title: "URL bloqueada pelo robots.txt",
      detail:
        "O Googlebot está sendo impedido de rastrear esta página. Revise /robots.txt e remova a regra Disallow correspondente.",
      actions: [
        { label: "Abrir robots.txt", href: "/robots.txt", external: true },
        { label: "Inspecionar no GSC", href: gsc, external: true },
      ],
    });
  }

  // noindex
  if (indexing.includes("NOINDEX") || coverage.includes("noindex")) {
    out.push({
      id: "noindex",
      severity: kind === "canonical" ? "critical" : "info",
      title:
        kind === "canonical"
          ? "Canônica marcada como noindex"
          : "Página redirecionada com noindex",
      detail:
        kind === "canonical"
          ? "Remova a meta robots noindex desta rota (em head()) para que ela volte ao índice."
          : "Para 301s, o noindex não é necessário — basta o redirecionamento. Verifique se não está atrapalhando o processamento.",
      actions: [{ label: "Inspecionar no GSC", href: gsc, external: true }],
    });
  }

  // page fetch problems
  if (fetchState && fetchState !== "SUCCESSFUL") {
    out.push({
      id: "fetch",
      severity: "warning",
      title: `Google não conseguiu carregar a página (${fetchState})`,
      detail:
        "Cheque se a URL renderiza HTTP 200 sem erros de SSR, se não há bloqueios de firewall/CDN ao Googlebot e se o tempo de resposta está aceitável.",
      actions: [
        { label: "Abrir página", href: r.url, external: true },
        { label: "Inspecionar no GSC", href: gsc, external: true },
      ],
    });
  }

  if (kind === "canonical") {
    // canonical mismatch
    if (
      r.googleCanonical &&
      r.userCanonical &&
      r.googleCanonical !== r.userCanonical
    ) {
      out.push({
        id: "canonical-mismatch",
        severity: "warning",
        title: "Canonical divergente: Google escolheu outra URL",
        detail: `Você declarou ${r.userCanonical}, mas o Google está usando ${r.googleCanonical}. Confirme se a tag <link rel="canonical"> em head() está consistente e se o conteúdo desta página realmente difere da escolhida pelo Google.`,
        actions: [
          { label: "Abrir página", href: r.url, external: true },
          {
            label: "Abrir canônica do Google",
            href: r.googleCanonical,
            external: true,
          },
          { label: "Inspecionar no GSC", href: gsc, external: true },
        ],
      });
    } else if (r.googleCanonical && !r.userCanonical) {
      out.push({
        id: "canonical-missing",
        severity: "warning",
        title: "Sem canonical declarado — Google escolheu sozinho",
        detail: `Declare um <link rel="canonical"> explícito em head() apontando para ${r.url}. Hoje o Google está usando ${r.googleCanonical}.`,
        actions: [
          { label: "Inspecionar no GSC", href: gsc, external: true },
        ],
      });
    }

    // not indexed canonical
    if (verdict === "FAIL" || coverage.includes("excluded")) {
      out.push({
        id: "not-indexed",
        severity: "critical",
        title: "Canônica excluída do índice",
        detail: `Cobertura: ${r.coverageState ?? "—"}. Verifique noindex, canonical apontando para fora, conteúdo duplicado ou qualidade. Após corrigir, solicite indexação no GSC.`,
        actions: [{ label: "Inspecionar no GSC", href: gsc, external: true }],
      });
    } else if (verdict === "NEUTRAL" || coverage.includes("unknown")) {
      out.push({
        id: "unknown",
        severity: "info",
        title: "URL ainda desconhecida pelo Google",
        detail:
          "O Google ainda não rastreou esta página. Confirme que ela está no sitemap.xml e use 'Solicitar indexação' no GSC.",
        actions: [
          { label: "Abrir sitemap", href: "/sitemap.xml", external: true },
          { label: "Solicitar indexação", href: gsc, external: true },
        ],
      });
    }
  }

  if (kind === "redirect") {
    const target = entry?.target;
    // Google ainda indexa a origem
    if (verdict === "PASS" || coverage.includes("indexed")) {
      out.push({
        id: "redirect-still-indexed",
        severity: "warning",
        title: "URL redirecionada ainda aparece como indexada",
        detail: target
          ? `O Google ainda não consolidou o 301 para ${target}. Confirme que a rota responde 301 (não 200 nem 302) e aguarde re-crawl. Se persistir por semanas, considere 'Remover URL' temporariamente no GSC.`
          : "Confirme que a rota responde 301 e aguarde re-crawl. Se persistir, use 'Remover URL' no GSC.",
        actions: [
          { label: "Abrir URL antiga", href: r.url, external: true },
          ...(target
            ? [
                {
                  label: "Abrir destino canônico",
                  href: target,
                  external: true,
                },
              ]
            : []),
          { label: "Inspecionar no GSC", href: gsc, external: true },
        ],
      });
    }

    // Canonical não bate com o destino esperado
    if (target && r.googleCanonical) {
      const expectedAbs = (() => {
        try {
          return new URL(target, siteUrl).toString();
        } catch {
          return target;
        }
      })();
      if (
        r.googleCanonical !== expectedAbs &&
        r.googleCanonical !== r.url
      ) {
        out.push({
          id: "redirect-wrong-canonical",
          severity: "warning",
          title: "Google não está consolidando para o destino esperado",
          detail: `Esperado: ${expectedAbs}. Google está usando: ${r.googleCanonical}. Revise o 301 e o canonical da página de destino.`,
          actions: [
            { label: "Destino esperado", href: expectedAbs, external: true },
            {
              label: "Canônica do Google",
              href: r.googleCanonical,
              external: true,
            },
          ],
        });
      } else if (r.googleCanonical === r.url) {
        out.push({
          id: "redirect-not-following",
          severity: "critical",
          title: "Google ainda trata a URL como destino final",
          detail: `A canônica do Google é a própria URL antiga (${r.url}). Verifique se o redirect 301 está sendo emitido no servidor — não apenas client-side.`,
          actions: [
            { label: "Testar URL", href: r.url, external: true },
            { label: "Inspecionar no GSC", href: gsc, external: true },
          ],
        });
      }
    }

    // Fetch successful = não houve redirect detectado pelo Google
    if (fetchState === "SUCCESSFUL" && verdict !== "PASS") {
      out.push({
        id: "redirect-no-301",
        severity: "warning",
        title: "Fetch retornou 200 — 301 pode não estar ativo",
        detail:
          "Para URLs redirecionadas, o Google normalmente reporta REDIRECT/SOFT_REDIRECT no Fetch. Confirme que o handler emite statusCode 301 no SSR.",
        actions: [{ label: "Abrir URL", href: r.url, external: true }],
      });
    }
  }

  return out;
}

export function buildRecommendations(
  results: AuditResult[],
  siteUrl: string,
): UrlRecommendations[] {
  return results
    .map((r) => {
      const items = recommendForResult(r, siteUrl);
      const worst = items.reduce<Severity>(
        (acc, it) => (sevRank[it.severity] > sevRank[acc] ? it.severity : acc),
        "info",
      );
      const path = pathOf(r.url, siteUrl);
      return {
        url: r.url,
        path,
        kind: r.kind,
        expectedTarget: entryFor(path)?.target,
        worst,
        items,
      };
    })
    .filter((u) => u.items.length > 0)
    .sort(
      (a, b) => sevRank[b.worst] - sevRank[a.worst] || a.path.localeCompare(b.path),
    );
}

export function severityLabel(s: Severity): string {
  return s === "critical" ? "Crítico" : s === "warning" ? "Atenção" : "Info";
}

export function severityClass(s: Severity): string {
  return s === "critical"
    ? "bg-rose-500/15 text-rose-600 border-rose-500/30"
    : s === "warning"
      ? "bg-amber-500/15 text-amber-600 border-amber-500/30"
      : "bg-sky-500/15 text-sky-600 border-sky-500/30";
}