import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/conteudos/")({
  head: () => ({
    meta: [
      { title: "Insights DCON | Análises Contábeis, Fiscais e Tributárias" },
      { name: "description", content: "Central de insights da DCON: análises técnicas sobre tributação, regimes, holdings, defesas fiscais e governança para empresas brasileiras." },
      { property: "og:title", content: "Insights DCON" },
      { property: "og:description", content: "Análises técnicas para quem decide: tributação, patrimônio, governança e setores." },
      { property: "og:url", content: "/conteudos" },
    ],
    links: [{ rel: "canonical", href: "/conteudos" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: "/" },
            { "@type": "ListItem", position: 2, name: "Insights", item: "/conteudos" },
          ],
        }),
      },
    ],
  }),
  component: Page,
});

type Insight = {
  theme: string;
  kind: "Análise" | "Guia" | "Estudo" | "Briefing";
  h: string;
  b: string;
  to: string;
  date: string;
};

const insights: Insight[] = [
  { theme: "Tributário", kind: "Análise", h: "Reforma Tributária: o que muda no caixa entre 2026 e 2033", b: "Cenários de transição CBS/IBS por regime e setor, com cronograma de adaptação.", to: "/solucoes/reforma-tributaria", date: "Jun 2026" },
  { theme: "Tributário", kind: "Guia", h: "Simples × Presumido × Real: comparativo prático", b: "Como decidir o regime com base em margem, folha e operação interestadual.", to: "/conteudos/regimes-tributarios", date: "Mai 2026" },
  { theme: "Tributário", kind: "Estudo", h: "Recuperação de créditos tributários nos últimos 5 anos", b: "Levantamento técnico de tributos pagos a maior e caminhos de restituição.", to: "/solucoes/recuperacao-creditos-tributarios", date: "Abr 2026" },
  { theme: "Defesa fiscal", kind: "Análise", h: "Como conduzir tecnicamente uma autuação", b: "Etapas de impugnação administrativa e quando levar ao contencioso judicial.", to: "/solucoes/defesas-fiscais", date: "Mai 2026" },
  { theme: "Defesa fiscal", kind: "Guia", h: "Sair de uma pendência fiscal sem destruir o caixa", b: "Parcelamentos, transação tributária e plano de compliance.", to: "/conteudos/regularizacao-fiscal", date: "Mar 2026" },
  { theme: "Patrimônio", kind: "Guia", h: "Holding familiar: o que é, tipos, custos e passo a passo", b: "Definição, modalidades (patrimonial, pura, mista), ITBI, ITCMD e roteiro de constituição.", to: "/conteudos/holding-familiar", date: "Jun 2026" },
  { theme: "Patrimônio", kind: "Análise", h: "Holding patrimonial: quando vale e quando é mito", b: "Estrutura societária, ITCMD e governança familiar com base técnica.", to: "/solucoes/holding-patrimonial", date: "Mai 2026" },
  { theme: "Patrimônio", kind: "Briefing", h: "Sucessão em vida: doação, usufruto e cláusulas", b: "Decisões que reduzem litígio e custo de transmissão.", to: "/conteudos/holding-familiar", date: "Abr 2026" },
  { theme: "Trabalhista", kind: "Guia", h: "PJ x CLT: risco de vínculo e estruturação correta", b: "Critérios objetivos, jurisprudência recente e desenho seguro.", to: "/conteudos/dp-esocial", date: "Mar 2026" },
  { theme: "Trabalhista", kind: "Análise", h: "Pró-labore: como definir tecnicamente", b: "Impacto previdenciário, IRPF do sócio e distribuição de lucros.", to: "/conteudos/dp-esocial", date: "Fev 2026" },
  { theme: "Setores", kind: "Estudo", h: "PJ médica e equiparação hospitalar", b: "Quem tem direito, riscos do enquadramento errado e roteiro técnico.", to: "/conteudos/saude-clinicas", date: "Mai 2026" },
  { theme: "Setores", kind: "Guia", h: "ICMS-ST e DIFAL no e-commerce", b: "Operação multiestadual sem acumular passivo silencioso.", to: "/conteudos/comercio-icms", date: "Abr 2026" },
  { theme: "Setores", kind: "Análise", h: "Provedores de internet: tributação e regulatório", b: "Fust, Funttel, ISS e particularidades contábeis do setor ISP.", to: "/segmentos/provedores-internet", date: "Mar 2026" },
  { theme: "Governança", kind: "Briefing", h: "Valuation e KPIs para a mesa do sócio", b: "Indicadores que mostram saúde econômica antes de captação ou M&A.", to: "/solucoes/valuation-kpis", date: "Mai 2026" },
  { theme: "Governança", kind: "Análise", h: "Tecnologia contábil sob responsabilidade humana", b: "Integração com ERPs e SPED, com revisão técnica antes da entrega.", to: "/solucoes/tecnologia-contabil", date: "Abr 2026" },
];

const themes = ["Todos", "Tributário", "Defesa fiscal", "Patrimônio", "Trabalhista", "Setores", "Governança"] as const;
const kinds = ["Todos", "Análise", "Guia", "Estudo", "Briefing"] as const;

function Page() {
  const [theme, setTheme] = useState<(typeof themes)[number]>("Todos");
  const [kind, setKind] = useState<(typeof kinds)[number]>("Todos");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return insights.filter((i) =>
      (theme === "Todos" || i.theme === theme) &&
      (kind === "Todos" || i.kind === kind) &&
      (q === "" || (i.h + " " + i.b).toLowerCase().includes(q.toLowerCase()))
    );
  }, [theme, kind, q]);

  return (
    <div>
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <div className="text-[11px] uppercase tracking-[0.24em] text-gold rule-gold">Insights DCON</div>
            <h1 className="mt-6 font-display text-4xl md:text-6xl font-medium tracking-tight leading-[1.05]">
              Análises técnicas para quem decide.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-secondary-foreground/75 leading-relaxed">
              Publicações escritas pela equipe técnica da DCON sobre tributação, patrimônio,
              governança e particularidades setoriais. Use os filtros para encontrar o tema
              que importa para a sua empresa.
            </p>
          </div>
          <aside className="lg:col-span-4 lg:border-l lg:border-secondary-foreground/15 lg:pl-10 flex flex-col justify-end">
            <div className="text-[10px] uppercase tracking-[0.24em] text-secondary-foreground/55 mb-2">Editorial</div>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed">
              Conteúdo revisado pelo responsável técnico. Sem opinião não fundamentada, sem
              promessa de economia milagrosa.
            </p>
          </aside>
        </div>
      </section>

      {/* Filter bar */}
      <section className="border-b border-border bg-background sticky top-20 z-30 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mr-2">Tema</span>
            {themes.map((t) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className={`text-[11px] uppercase tracking-[0.16em] px-3 py-1.5 border ${theme === t ? "bg-secondary text-secondary-foreground border-secondary" : "border-border hover:border-secondary"}`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mr-2">Tipo</span>
            {kinds.map((k) => (
              <button
                key={k}
                onClick={() => setKind(k)}
                className={`text-[11px] uppercase tracking-[0.16em] px-3 py-1.5 border ${kind === k ? "bg-gold text-gold-foreground border-gold" : "border-border hover:border-gold"}`}
              >
                {k}
              </button>
            ))}
          </div>
          <div className="lg:ml-auto">
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar no editorial…"
              className="w-full lg:w-72 border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:border-secondary"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground mb-6">
          {filtered.length} publicaç{filtered.length === 1 ? "ão" : "ões"}
        </div>
        {filtered.length === 0 ? (
          <div className="border border-dashed border-border p-10 text-center text-muted-foreground">
            Nenhuma publicação para esse filtro. Ajuste os critérios acima.
          </div>
        ) : (
          <div className="grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((i) => (
              <Link key={i.h} to={i.to} className="group bg-card p-7 flex flex-col justify-between hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <div>
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-gold">
                    <span>{i.kind}</span>
                    <span className="opacity-40">·</span>
                    <span className="text-muted-foreground group-hover:text-secondary-foreground/60">{i.theme}</span>
                  </div>
                  <h2 className="mt-4 font-display text-lg leading-snug">{i.h}</h2>
                  <p className="mt-3 text-[14px] text-muted-foreground group-hover:text-secondary-foreground/75 leading-relaxed">{i.b}</p>
                </div>
                <div className="mt-6 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-muted-foreground group-hover:text-secondary-foreground/65">
                  <span>{i.date}</span>
                  <span className="text-secondary group-hover:text-gold">Ler →</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 flex flex-wrap items-center justify-between gap-6">
          <div>
            <div className="text-[11px] uppercase tracking-[0.24em] text-gold">Mais que leitura</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl tracking-tight max-w-2xl">
              Aplique o conteúdo à realidade da sua empresa.
            </h2>
          </div>
          <div className="flex gap-3">
            <Link to="/diagnostico" className="inline-flex items-center bg-gold px-6 py-3 text-[12px] uppercase tracking-[0.18em] text-gold-foreground">
              Solicitar diagnóstico →
            </Link>
            <Link to="/temas-estrategicos" className="inline-flex items-center border border-secondary-foreground/30 px-6 py-3 text-[12px] uppercase tracking-[0.18em] hover:border-gold hover:text-gold">
              Ver temas estratégicos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}