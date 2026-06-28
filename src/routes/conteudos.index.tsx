import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/conteudos/")({
  head: () => ({
    ...buildSeoHead({
      title: "Insights Contábeis e Tributários | DCON",
      description: "Análises técnicas sobre planejamento tributário, reforma tributária, holding, eSocial e gestão fiscal para empresários e gestores. DCON Serviços Contábeis.",
      canonical: "https://www.dcon.cnt.br/conteudos",
    }),
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
  { theme: "Tributário", kind: "Guia", h: "Respostas validadas DCON: equiparação, PGFN e créditos", b: "Central de respostas objetivas para dúvidas fiscais, tributárias e contábeis recorrentes.", to: "/conteudos/respostas-validadas", date: "Jun 2026" },
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

type Category = {
  slug: string;
  h2: string;
  intro: string;
  topics: { h3: string; to: string; desc: string }[];
};

const categories: Category[] = [
  {
    slug: "tributario",
    h2: "Tributário",
    intro: "Regimes, reforma, créditos e decisões fiscais que afetam diretamente o caixa da empresa.",
    topics: [
      { h3: "Regimes tributários: Simples, Presumido e Real", to: "/conteudos/regimes-tributarios", desc: "Comparativo prático por margem, folha e operação interestadual." },
      { h3: "Respostas validadas DCON", to: "/conteudos/respostas-validadas", desc: "Equiparação hospitalar, PGFN, PRDI, créditos, folha, construção, agro e IRPF em formato de resposta." },
      { h3: "Planejamento tributário lícito", to: "/conteudos/planejamento-tributario", desc: "Critérios técnicos para reduzir carga com segurança jurídica." },
      { h3: "Reforma tributária (CBS/IBS)", to: "/solucoes/reforma-tributaria", desc: "Cronograma de transição 2026–2033 por regime e setor." },
      { h3: "Recuperação de créditos tributários", to: "/solucoes/recuperacao-creditos-tributarios", desc: "Levantamento de tributos pagos a maior nos últimos 5 anos." },
    ],
  },
  {
    slug: "defesa-fiscal",
    h2: "Defesa fiscal e regularização",
    intro: "Como conduzir autuações, parcelamentos e transação tributária sem destruir o caixa.",
    topics: [
      { h3: "Regularização fiscal sem comprometer o caixa", to: "/conteudos/regularizacao-fiscal", desc: "Parcelamentos, transação tributária e plano de compliance." },
      { h3: "PGFN, PRDI e transação tributária", to: "/conteudos/regularizacao-fiscal", desc: "Como tratar débitos que não aparecem, estão na Receita ou já foram inscritos." },
      { h3: "Defesas fiscais administrativas e judiciais", to: "/solucoes/defesas-fiscais", desc: "Impugnação técnica e quando levar ao contencioso." },
      { h3: "Pendências fiscais por segmento", to: "/segmentos/pendencias-fiscais", desc: "Roteiro setorial para sair do passivo fiscal." },
    ],
  },
  {
    slug: "patrimonio",
    h2: "Patrimônio e sucessão",
    intro: "Estruturas societárias, holdings e sucessão em vida com base técnica, sem promessa milagrosa.",
    topics: [
      { h3: "Holding familiar: tipos, custos e passo a passo", to: "/conteudos/holding-familiar", desc: "Modalidades, ITBI, ITCMD e roteiro de constituição." },
      { h3: "Holding patrimonial: quando vale", to: "/conteudos/holding-patrimonio", desc: "Estrutura societária, ITCMD e governança familiar." },
      { h3: "Holding patrimonial (solução DCON)", to: "/solucoes/holding-patrimonial", desc: "Implementação assistida por equipe técnica." },
    ],
  },
  {
    slug: "trabalhista",
    h2: "Trabalhista e DP/eSocial",
    intro: "Desenho correto de vínculos, pró-labore e obrigações acessórias do departamento pessoal.",
    topics: [
      { h3: "Departamento Pessoal e eSocial", to: "/conteudos/dp-esocial", desc: "PJ x CLT, pró-labore e obrigações acessórias." },
      { h3: "Departamento Pessoal (solução)", to: "/solucoes/departamento-pessoal", desc: "Operação de folha sob responsabilidade técnica." },
    ],
  },
  {
    slug: "setores",
    h2: "Setores e segmentos",
    intro: "Particularidades contábeis e fiscais de cada operação — do comércio à saúde e tecnologia.",
    topics: [
      { h3: "Saúde, clínicas e PJ médica", to: "/conteudos/saude-clinicas", desc: "Equiparação hospitalar e enquadramento correto." },
      { h3: "Comércio, ICMS-ST e DIFAL", to: "/conteudos/comercio-icms", desc: "Operação multiestadual sem passivo silencioso." },
      { h3: "Provedores de internet (ISP)", to: "/segmentos/provedores-internet", desc: "Fust, Funttel, ISS e contabilidade do setor." },
      { h3: "Tecnologia e startups", to: "/segmentos/tecnologia-startups", desc: "Stock options, investidores e regimes possíveis." },
    ],
  },
  {
    slug: "governanca",
    h2: "Governança e gestão",
    intro: "Indicadores, tecnologia contábil e leitura econômica para a mesa do sócio.",
    topics: [
      { h3: "Valuation e KPIs para sócios", to: "/solucoes/valuation-kpis", desc: "Indicadores antes de captação ou M&A." },
      { h3: "Tecnologia contábil com revisão humana", to: "/solucoes/tecnologia-contabil", desc: "Integração com ERPs e SPED sob supervisão técnica." },
      { h3: "BPO financeiro", to: "/solucoes/bpo-financeiro", desc: "Rotina financeira terceirizada com governança." },
    ],
  },
];

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

      {/* Categorias — estrutura H2/H3 para SEO e recorrência */}
      <section className="mx-auto max-w-7xl px-6 pt-20">
        <header className="max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold rule-gold">Central de Conteúdo</div>
          <h2 className="mt-6 font-display text-3xl md:text-4xl tracking-tight">
            Categorias do editorial DCON
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Organizamos as publicações por área técnica. Cada categoria reúne guias, análises e
            estudos que conectam o conteúdo às soluções aplicáveis na sua empresa.
          </p>
        </header>

        <div className="mt-12 grid gap-px bg-border border border-border md:grid-cols-2">
          {categories.map((c) => (
            <article key={c.slug} id={c.slug} className="bg-card p-8">
              <h3 className="font-display text-xl tracking-tight">
                <Link
                  to="/conteudos/$category"
                  params={{ category: c.slug }}
                  className="hover:text-secondary"
                >
                  {c.h2}
                </Link>
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.intro}</p>
              <ul className="mt-6 space-y-4 border-t border-border pt-6">
                {c.topics.map((t) => (
                  <li key={t.to}>
                    <Link to={t.to} className="text-[15px] font-medium leading-snug hover:text-secondary block">
                      {t.h3}
                    </Link>
                    <p className="mt-1 text-[13px] text-muted-foreground leading-relaxed">{t.desc}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-border">
                <Link
                  to="/conteudos/$category"
                  params={{ category: c.slug }}
                  className="text-[11px] uppercase tracking-[0.18em] text-secondary hover:text-gold"
                >
                  Ver categoria completa →
                </Link>
              </div>
            </article>
          ))}
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