import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DCON Serviços Contábeis | Contabilidade Estratégica em Goiânia" },
      { name: "description", content: "Contabilidade consultiva, fiscal e tributária em Goiânia. Segurança, organização e inteligência tributária para empresas que precisam decidir bem." },
      { property: "og:title", content: "DCON Serviços Contábeis | Contabilidade Estratégica em Goiânia" },
      { property: "og:description", content: "Contabilidade consultiva, fiscal e tributária em Goiânia. Segurança e inteligência tributária para empresas." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const blocks = [
  { h2: "Por que sua contabilidade precisa ir além das guias", h3: ["Riscos invisíveis", "O custo de cada erro fiscal", "Decisão sem dado é risco"] },
  { h2: "Como a DCON atua", h3: ["Diagnóstico técnico", "Estruturação", "Acompanhamento estratégico"] },
  { h2: "Soluções contábeis, fiscais e tributárias", h3: ["Contabilidade Empresarial", "Planejamento Tributário", "Regularização Fiscal", "Holding e Patrimônio"] },
  { h2: "Segmentos atendidos", h3: ["Médicos e clínicas", "E-commerce", "Construção civil e SPEs", "Holdings", "Tecnologia"] },
  { h2: "Diagnóstico fiscal e contábil", h3: ["O que avaliamos", "Quando solicitar", "Como funciona"] },
  { h2: "Conteúdos para empresários", h3: ["Planejamento tributário", "Regimes tributários", "Holding e sucessão"] },
  { h2: "Fale com a DCON", h3: ["Goiânia", "Atendimento online", "WhatsApp"] },
];

function Home() {
  return (
    <div>
      <section className="border-b border-border bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="text-xs uppercase tracking-[0.18em] text-primary mb-6">
            DCON Serviços Contábeis · Goiânia
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-4xl leading-[1.05]">
            Contabilidade estratégica para empresas que precisam de segurança fiscal, organização e inteligência tributária.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-secondary-foreground/75">
            Atuamos como o time técnico que sua empresa precisa para decidir com clareza — fiscal, tributário, societário, trabalhista e contábil.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/diagnostico" className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
              Solicitar diagnóstico
            </Link>
            <Link to="/solucoes" className="inline-flex items-center rounded-md border border-border/40 px-6 py-3 text-sm font-medium hover:bg-secondary-foreground/5">
              Conhecer as soluções
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 space-y-16">
        {blocks.map((b) => (
          <article key={b.h2} className="border-l-2 border-primary/60 pl-6">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{b.h2}</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {b.h3.map((h) => (
                <li key={h} className="rounded-md border border-border bg-card p-4 text-sm">
                  <h3 className="font-medium">{h}</h3>
                  <p className="mt-1 text-muted-foreground text-xs">[conteúdo a desenvolver]</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="border-t border-border bg-accent">
        <div className="mx-auto max-w-6xl px-6 py-16 flex flex-wrap items-center justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-primary">Próximo passo</div>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight max-w-xl">
              Solicite um diagnóstico fiscal e contábil da sua empresa
            </h2>
          </div>
          <Link to="/diagnostico" className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
            Solicitar diagnóstico
          </Link>
        </div>
      </section>
    </div>
  );
}
