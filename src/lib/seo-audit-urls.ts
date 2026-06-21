export type AuditUrlKind = "canonical" | "redirect";

export type UrlEntry = { path: string; kind: AuditUrlKind; note?: string };

export const CANONICAL_PATHS: UrlEntry[] = [
  { path: "/", kind: "canonical" },
  { path: "/diagnostico", kind: "canonical" },
  { path: "/metodo", kind: "canonical" },
  { path: "/temas-estrategicos", kind: "canonical" },
  { path: "/contato", kind: "canonical" },
  { path: "/goiania", kind: "canonical" },
  { path: "/sobre", kind: "canonical" },
  { path: "/sobre/leandro", kind: "canonical" },
  { path: "/solucoes", kind: "canonical" },
  { path: "/solucoes/planejamento-tributario", kind: "canonical" },
  { path: "/solucoes/regularizacao-fiscal", kind: "canonical" },
  { path: "/solucoes/holding-patrimonial", kind: "canonical" },
  { path: "/solucoes/departamento-pessoal", kind: "canonical" },
  { path: "/solucoes/departamento-fiscal", kind: "canonical" },
  { path: "/solucoes/contabilidade-empresarial", kind: "canonical" },
  { path: "/solucoes/reforma-tributaria", kind: "canonical" },
  { path: "/solucoes/recuperacao-creditos-tributarios", kind: "canonical" },
  { path: "/solucoes/defesas-fiscais", kind: "canonical" },
  { path: "/solucoes/bpo-financeiro", kind: "canonical" },
  { path: "/solucoes/societario-legalizacao", kind: "canonical" },
  { path: "/solucoes/tecnologia-contabil", kind: "canonical" },
  { path: "/solucoes/pessoa-fisica-irpf", kind: "canonical" },
  { path: "/solucoes/valuation-kpis", kind: "canonical" },
  { path: "/solucoes/registro-marca-inpi", kind: "canonical" },
  { path: "/solucoes/abrir-empresa", kind: "canonical" },
  { path: "/solucoes/trocar-contabilidade", kind: "canonical" },
  { path: "/segmentos", kind: "canonical" },
  { path: "/segmentos/medicos-clinicas", kind: "canonical", note: "Saúde (canônica unificada)" },
  { path: "/segmentos/comercio", kind: "canonical", note: "Comércio/ICMS (canônica unificada)" },
  { path: "/conteudos", kind: "canonical" },
  { path: "/conteudos/regimes-tributarios", kind: "canonical", note: "Regimes (canônica unificada)" },
];

export const REDIRECT_PATHS: UrlEntry[] = [
  { path: "/conteudos/planejamento-tributario", kind: "redirect", target: "/solucoes/planejamento-tributario" },
  { path: "/conteudos/regularizacao-fiscal", kind: "redirect", target: "/solucoes/regularizacao-fiscal" },
  { path: "/conteudos/holding-patrimonio", kind: "redirect", target: "/solucoes/holding-patrimonial" },
  { path: "/conteudos/dp-esocial", kind: "redirect", target: "/solucoes/departamento-pessoal" },
  { path: "/conteudos/comercio-icms", kind: "redirect", target: "/segmentos/comercio" },
  { path: "/conteudos/saude-clinicas", kind: "redirect", target: "/segmentos/medicos-clinicas" },
  { path: "/segmentos/pendencias-fiscais", kind: "redirect", target: "/solucoes/regularizacao-fiscal" },
  { path: "/segmentos/simples-nacional", kind: "redirect", target: "/conteudos/regimes-tributarios" },
  { path: "/segmentos/lucro-presumido", kind: "redirect", target: "/conteudos/regimes-tributarios" },
  { path: "/segmentos/lucro-real", kind: "redirect", target: "/conteudos/regimes-tributarios" },
  { path: "/sobre/metodologia", kind: "redirect", target: "/metodo" },
];

export const ALL_ENTRIES: UrlEntry[] = [...CANONICAL_PATHS, ...REDIRECT_PATHS];
