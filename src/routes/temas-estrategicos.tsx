import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/temas-estrategicos")({
  head: () => ({
    meta: [
      { title: "Temas Estratégicos | DCON Consultoria Contábil e Tributária" },
      { name: "description", content: "Agenda do CFO e do sócio: reforma tributária, sucessão, defesas fiscais, governança e recuperação de créditos. Análises técnicas da DCON." },
      { property: "og:title", content: "Temas Estratégicos | DCON" },
      { property: "og:description", content: "Os temas técnicos que mais movem o caixa das empresas brasileiras em 2026." },
      { property: "og:url", content: "/temas-estrategicos" },
    ],
    links: [{ rel: "canonical", href: "/temas-estrategicos" }],
  }),
  component: Page,
});

const pillars = [
  {
    eyebrow: "Tributário",
    h: "Reforma Tributária (CBS/IBS)",
    b: "Modelagem da transição 2026–2033, impacto setorial por regime e adaptação operacional.",
    items: [
      { l: "Cenário CBS/IBS por setor", to: "/solucoes/reforma-tributaria" },
      { l: "Recuperação de créditos", to: "/solucoes/recuperacao-creditos-tributarios" },
      { l: "Regimes tributários", to: "/conteudos/regimes-tributarios" },
    ],
  },
  {
    eyebrow: "Defesa fiscal",
    h: "Autuações e contencioso administrativo",
    b: "Impugnações, recursos, defesas e estratégias de prevenção de passivo fiscal.",
    items: [
      { l: "Defesas fiscais", to: "/solucoes/defesas-fiscais" },
      { l: "Regularização fiscal", to: "/solucoes/regularizacao-fiscal" },
      { l: "Pendências fiscais", to: "/segmentos/pendencias-fiscais" },
    ],
  },
  {
    eyebrow: "Patrimônio",
    h: "Holding, sucessão e proteção patrimonial",
    b: "Estrutura patrimonial e familiar, ITCMD, doação em vida e governança.",
    items: [
      { l: "Holding patrimonial", to: "/solucoes/holding-patrimonial" },
      { l: "Pessoa física e IRPF", to: "/solucoes/pessoa-fisica-irpf" },
      { l: "Conteúdos de holding", to: "/conteudos/holding-patrimonio" },
    ],
  },
  {
    eyebrow: "Crescimento",
    h: "Valuation, KPIs e captação",
    b: "Leitura econômica para M&A, captação, expansão e profissionalização.",
    items: [
      { l: "Valuation e KPIs", to: "/solucoes/valuation-kpis" },
      { l: "Tecnologia contábil", to: "/solucoes/tecnologia-contabil" },
      { l: "Societário e legalização", to: "/solucoes/societario-legalizacao" },
    ],
  },
  {
    eyebrow: "Trabalhista",
    h: "DP, eSocial e estruturação de pessoas",
    b: "Pró-labore, PJ x CLT, retenções, riscos de vínculo e governança trabalhista.",
    items: [
      { l: "Departamento pessoal", to: "/solucoes/departamento-pessoal" },
      { l: "DP e eSocial", to: "/conteudos/dp-esocial" },
    ],
  },
  {
    eyebrow: "Setoriais",
    h: "Temas por vertical de atuação",
    b: "Particularidades fiscais, contábeis e regulatórias por setor atendido.",
    items: [
      { l: "Saúde e clínicas", to: "/conteudos/saude-clinicas" },
      { l: "Comércio e ICMS", to: "/conteudos/comercio-icms" },
      { l: "Provedores de internet", to: "/segmentos/provedores-internet" },
    ],
  },
];

function Page() {
  return (
    <div>
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <div className="text-[11px] uppercase tracking-[0.24em] text-gold rule-gold">Temas estratégicos</div>
            <h1 className="mt-6 font-display text-4xl md:text-6xl font-medium tracking-tight leading-[1.05]">
              A agenda técnica que move caixa, decisão e patrimônio.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-secondary-foreground/75 leading-relaxed">
              Pilares editoriais e linhas de prática da DCON. Cada tema conecta soluções,
              conteúdos analíticos e referências aplicadas ao seu setor.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.h} className="bg-card p-8 flex flex-col">
            <div className="text-[11px] uppercase tracking-[0.22em] text-gold">{p.eyebrow}</div>
            <h2 className="mt-3 font-display text-xl leading-snug">{p.h}</h2>
            <p className="mt-3 text-[14px] text-muted-foreground leading-relaxed">{p.b}</p>
            <ul className="mt-6 space-y-2 text-sm border-t border-border pt-4">
              {p.items.map((i) => (
                <li key={i.to}>
                  <Link to={i.to} className="hover:text-primary inline-flex items-center gap-2">
                    <span className="text-gold">·</span> {i.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 flex flex-wrap items-center justify-between gap-6">
          <div>
            <div className="text-[11px] uppercase tracking-[0.24em] text-gold">Próximo passo</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl tracking-tight max-w-2xl">
              Discuta a agenda da sua empresa com a equipe técnica DCON.
            </h2>
          </div>
          <div className="flex gap-3">
            <Link to="/diagnostico" className="inline-flex items-center bg-gold px-6 py-3 text-[12px] uppercase tracking-[0.18em] text-gold-foreground">
              Solicitar diagnóstico →
            </Link>
            <Link to="/contato" className="inline-flex items-center border border-secondary-foreground/30 px-6 py-3 text-[12px] uppercase tracking-[0.18em] hover:border-gold hover:text-gold">
              Falar com a DCON
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}