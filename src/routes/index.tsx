import { createFileRoute, Link } from "@tanstack/react-router";
import ogImage from "../assets/og-dcon.jpg";
import heroBg from "../assets/hero-bg.png";
import { Reveal } from "../components/Reveal";
import { AnimatedHeroBg } from "../components/AnimatedHeroBg";

const SITE_URL = "https://stratacon-guide.lovable.app";
const OG_IMAGE_URL = `${SITE_URL}${ogImage}`;

// Paleta on-brand: preto/grafite + vermelho DCON. Sem cores fora da marca.
const PANEL_ACCENTS = [
  "var(--gold)",
  "var(--secondary)",
  "var(--gold)",
  "var(--secondary)",
  "var(--gold)",
  "var(--secondary)",
] as const;

const faqs = [
  {
    q: "A DCON é uma contabilidade online?",
    aPlain: "Não. Somos uma firma técnica de consultoria contábil, fiscal, tributária e empresarial. Atendemos presencialmente em Goiânia e remotamente em todo o Brasil, mas a entrega é consultiva — análise técnica, plano de ação e acompanhamento por responsável com CRC ativo — e não meramente transacional.",
    a: <>Não. Somos uma firma técnica de consultoria contábil, fiscal, tributária e empresarial. Atendemos presencialmente em Goiânia e remotamente em todo o Brasil, mas a entrega é consultiva — análise técnica, plano de ação e acompanhamento por responsável com CRC ativo — e não meramente transacional.</>,
  },
  {
    q: "Em quanto tempo o diagnóstico fica pronto?",
    aPlain: "Em até 7 dias úteis após o envio da documentação. Entregamos um relatório técnico com mapeamento fiscal, tributário, contábil, trabalhista, societário e patrimonial, mais um plano de ação priorizado por risco, impacto financeiro e prazo de regularização.",
    a: <>Em até 7 dias úteis após o envio da documentação. Entregamos um relatório técnico com mapeamento fiscal, tributário, contábil, trabalhista, societário e patrimonial, mais um plano de ação priorizado por risco, impacto financeiro e prazo de regularização. <Link to="/diagnostico" className="underline text-gold hover:no-underline">Solicitar diagnóstico →</Link></>,
  },
  {
    q: "Quem assina tecnicamente as entregas da DCON?",
    aPlain: "Responsável técnico com CRC ativo. Toda recomendação relevante — pareceres, defesas, planejamento, PER/DCOMP e relatórios de diagnóstico — passa por revisão cruzada antes da entrega ao cliente.",
    a: <>Responsável técnico com CRC ativo. Toda recomendação relevante — pareceres, defesas, planejamento, PER/DCOMP e relatórios de <Link to="/diagnostico" className="underline text-gold hover:no-underline">diagnóstico</Link> — passa por revisão cruzada antes da entrega ao cliente.</>,
  },
  {
    q: "A DCON atende empresas fora de Goiânia?",
    aPlain: "Sim. A maior parte do atendimento é remoto, com reuniões técnicas por vídeo, canais auditáveis para documentos e protocolos de revisão cruzada. Mantemos a base operacional em Goiânia e atendemos clientes em todo o Brasil.",
    a: <>Sim. A maior parte do atendimento é remoto, com reuniões técnicas por vídeo, canais auditáveis para documentos e protocolos de revisão cruzada. Mantemos a base operacional em Goiânia e atendemos clientes em todo o Brasil.</>,
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DCON · Consultoria Contábil e Tributária em Goiânia" },
      { name: "description", content: "Consultoria contábil, fiscal e tributária em Goiânia. Planejamento, reforma CBS/IBS, recuperação de créditos, holding e defesa fiscal sob método auditável." },
      { name: "keywords", content: "consultoria contábil Goiânia, planejamento tributário, reforma tributária CBS IBS, recuperação de créditos tributários, holding patrimonial, defesa fiscal, contabilidade consultiva" },
      { property: "og:title", content: "DCON · Consultoria Contábil, Tributária e Empresarial em Goiânia" },
      { property: "og:description", content: "Firma de consultoria contábil, fiscal e tributária com Método DCON em 4 fases. Diagnóstico em 7 dias úteis." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE_URL },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "DCON · Contabilidade Consultiva Técnica — Goiânia, CRC-GO 1202" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE_URL },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AccountingService",
          name: "DCON Serviços Contábeis",
          description: "Consultoria contábil, fiscal, tributária e empresarial. Planejamento tributário, reforma CBS/IBS, recuperação de créditos, holding patrimonial e defesa fiscal sob Método DCON.",
          areaServed: "BR",
          address: { "@type": "PostalAddress", addressLocality: "Goiânia", addressRegion: "GO", addressCountry: "BR" },
          url: "/",
          serviceType: [
            "Planejamento Tributário",
            "Reforma Tributária (CBS/IBS)",
            "Recuperação de Créditos Tributários",
            "Defesa Fiscal",
            "Holding Patrimonial e Familiar",
            "Departamento Pessoal e eSocial",
            "Valuation e KPIs",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.aPlain },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

const solutions = [
  { n: "01", h: "Planejamento Tributário", b: "Comparativo de regimes, cenários e estruturas societárias com fundamento legal.", to: "/solucoes/planejamento-tributario" },
  { n: "02", h: "Recuperação de Créditos", b: "Revisão técnica dos últimos 5 anos em PIS, COFINS, ICMS, INSS e contribuições, com PER/DCOMP e parecer auditável.", to: "/solucoes/recuperacao-creditos-tributarios" },
  { n: "03", h: "Defesas e Regularização Fiscal", b: "Impugnações, recursos e plano de regularização para autuações e pendências federais, estaduais e municipais.", to: "/solucoes/defesas-fiscais" },
  { n: "04", h: "Tecnologia Contábil e Indicadores", b: "Apuração assistida, integração de ERP, KPIs e relatórios padronizados para decisão.", to: "/solucoes/tecnologia-contabil" },
];

const sectors = [
  { h: "Saúde", b: "PJ médica, equiparação hospitalar, Fator R e sociedade entre profissionais.", to: "/segmentos/medicos-clinicas" },
  { h: "Construção Civil", b: "RET, patrimônio de afetação, SPE por obra e empreitada total.", to: "/segmentos/construcao-civil-spe" },
  { h: "Comércio e E-commerce", b: "ICMS-ST, DIFAL, NCM/CFOP/CST e operação multiestadual.", to: "/segmentos/comercio" },
  { h: "Produtor Rural", b: "Funrural, LCDPR, ITR e sucessão patrimonial rural.", to: "/segmentos/produtor-rural" },
  { h: "Provedores de Internet", b: "Segregação NFCom/SVA, Fust, Funttel e tributação ISP.", to: "/segmentos/provedores-internet" },
  { h: "Holdings e Empresas Familiares", b: "Governança, sucessão, ITBI/ITCMD e separação PF/PJ.", to: "/segmentos/empresas-familiares" },
];

function Home() {
  return (
    <div>
      {/* Hero — fundo interativo com parallax + spotlight */}
      <section className="relative overflow-hidden text-white">
        <AnimatedHeroBg imageUrl={heroBg} />

        <div className="relative mx-auto max-w-6xl px-6 pt-16 md:pt-24 pb-12 md:pb-16">
          <Reveal as="div" className="flex items-center gap-3 text-gold text-[11px] font-semibold uppercase tracking-[0.22em] border-l-2 border-gold pl-4">
            Consultoria Contábil e Tributária · Goiânia
          </Reveal>

          <Reveal as="h1" delay={80} className="mt-8 md:mt-10 font-display text-4xl md:text-6xl font-light tracking-tight leading-[1.05] max-w-4xl">
            Contabilidade consultiva e tributária para empresas que precisam{" "}
            <span className="font-semibold">decidir com segurança</span>.
          </Reveal>

          <Reveal as="p" delay={160} className="mt-6 max-w-2xl text-[15px] md:text-[17px] leading-relaxed text-white/70">
            A DCON cruza declarações, notas fiscais, folha, SPED, DCTF/MIT, ECF, ECD, certidões e indicadores para identificar riscos, oportunidades e estratégias tributárias com responsabilidade técnica.
          </Reveal>

          <Reveal delay={240} className="mt-8 flex flex-wrap gap-3">
            <Link to="/diagnostico" className="inline-flex items-center bg-gold text-gold-foreground px-6 py-3 text-[12px] uppercase tracking-[0.18em] hover:opacity-90 transition-opacity">
              Solicitar diagnóstico técnico inicial →
            </Link>
            <Link to="/solucoes/reforma-tributaria" className="inline-flex items-center border border-white/30 px-6 py-3 text-[12px] uppercase tracking-[0.18em] hover:border-gold hover:text-gold transition-colors">
              Ver Reforma Tributária 2026 →
            </Link>
          </Reveal>

          {/* Tira compacta de credenciais */}
          <Reveal delay={320} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-white/50 border-t border-white/15 pt-5">
            <span><span className="text-gold">●</span> DCON CRC-GO 1202</span>
            <span className="text-white/25">/</span>
            <span>Resp. técnico CRC-GO 16.395/O-9</span>
            <span className="text-white/25">/</span>
            <span>Atendimento nacional</span>
            <span className="text-white/25">/</span>
            <span>Diagnóstico em 7 dias úteis</span>
          </Reveal>
        </div>
      </section>

      {/* Escolha o que você precisa agora — 4 atalhos */}
      <section
        className="border-y border-border"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--secondary) 5%, var(--background)) 0%, var(--background) 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-[11px] uppercase tracking-[0.24em] text-gold">Escolha o que você precisa agora</div>
              <h2 className="mt-3 font-display text-2xl md:text-4xl tracking-tight leading-[1.1]">
                Quatro pontos de partida.
              </h2>
            </div>
            <p className="text-[13px] text-muted-foreground max-w-sm">
              Cada bloco abre a página completa com escopo, prazo e responsável técnico.
            </p>
          </div>
          <div className="grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-4">
            {[
              { tag: "Diagnóstico", h: "Mapear minha empresa", b: "7 dias úteis · relatório técnico", to: "/diagnostico", color: "var(--gold)" },
              { tag: "CBS / IBS", h: "Preparar Reforma Tributária", b: "Impacto no caixa 2026–2033", to: "/solucoes/reforma-tributaria", color: "var(--secondary)" },
              { tag: "Crédito", h: "Recuperar tributos", b: "Últimos 5 anos · PER/DCOMP", to: "/solucoes/recuperacao-creditos-tributarios", color: "var(--gold)" },
              { tag: "Patrimônio", h: "Organizar patrimônio", b: "Holding, ITBI, ITCMD e sucessão", to: "/solucoes/holding-patrimonial", color: "var(--secondary)" },
            ].map((c, i) => (
              <Reveal key={c.h} delay={i * 80} y={24}>
                <Link
                  to={c.to}
                  style={{
                    ["--panel-accent" as never]: c.color,
                    background: `linear-gradient(180deg, color-mix(in oklab, ${c.color} 10%, var(--card)) 0%, var(--card) 100%)`,
                  }}
                  className="panel-interactive group p-7 flex flex-col h-full hover:bg-secondary hover:text-secondary-foreground"
                >
                  <div className="text-[10px] uppercase tracking-[0.22em]" style={{ color: c.color }}>{c.tag}</div>
                  <h3 className="mt-3 font-display text-xl leading-snug">{c.h}</h3>
                  <p className="mt-2 text-[13.5px] text-foreground/70 group-hover:text-secondary-foreground/80">{c.b}</p>
                  <div className="mt-6 text-[11px] uppercase tracking-[0.2em]" style={{ color: c.color }}>Abrir →</div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Soluções principais — 4 linhas */}
      <section className="bg-muted/60 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-[11px] uppercase tracking-[0.24em] text-gold">Soluções principais</div>
              <h2 className="mt-3 font-display text-2xl md:text-4xl tracking-tight max-w-xl leading-[1.1]">
                Quatro frentes consultivas integradas.
              </h2>
            </div>
            <Link to="/solucoes" className="text-[11px] uppercase tracking-[0.2em] border-b border-gold pb-1 text-secondary hover:text-primary">
              Ver todas as soluções →
            </Link>
          </div>
          <div className="grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-4">
            {solutions.map((s, i) => (
              <Reveal key={s.h} delay={i * 80} y={32}>
              <Link to={s.to} style={{ ["--panel-accent" as never]: PANEL_ACCENTS[i % PANEL_ACCENTS.length] }} className="panel-interactive group bg-card p-8 flex flex-col justify-between hover:bg-secondary hover:text-secondary-foreground h-full">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: PANEL_ACCENTS[i % PANEL_ACCENTS.length] }}>{s.n}</div>
                  <h3 className="mt-3 font-display text-xl leading-snug">{s.h}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-foreground/75 group-hover:text-secondary-foreground/80">{s.b}</p>
                </div>
                <div className="mt-8 text-[11px] uppercase tracking-[0.2em] text-secondary group-hover:text-gold">Conhecer →</div>
              </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Setores estratégicos */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-[11px] uppercase tracking-[0.24em] text-gold">Setores estratégicos</div>
            <h2 className="mt-3 font-display text-2xl md:text-4xl tracking-tight leading-[1.1]">
              Conhecimento específico por vertical.
            </h2>
          </div>
          <Link to="/segmentos" className="text-[11px] uppercase tracking-[0.2em] border-b border-gold pb-1 text-secondary hover:text-primary">
            Ver todos os setores →
          </Link>
        </div>
        <div className="grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s, i) => (
            <Reveal key={s.h} delay={i * 70} y={28}>
            <Link to={s.to} style={{ ["--panel-accent" as never]: PANEL_ACCENTS[(i + 1) % PANEL_ACCENTS.length] }} className="panel-interactive group bg-card p-7 hover:bg-secondary hover:text-secondary-foreground block h-full">
              <h3 className="font-display text-lg">{s.h}</h3>
              <p className="mt-2 text-[14.5px] text-foreground/70 group-hover:text-secondary-foreground/80 leading-relaxed">{s.b}</p>
              <div className="mt-5 text-[11px] uppercase tracking-[0.2em]" style={{ color: PANEL_ACCENTS[(i + 1) % PANEL_ACCENTS.length] }}>Ver setor →</div>
            </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Método DCON resumido */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold">Método DCON</div>
          <h2 className="mt-4 font-display text-3xl md:text-5xl tracking-tight leading-[1.05] max-w-3xl">
            Quatro etapas auditáveis, do diagnóstico ao acompanhamento.
          </h2>
          <p className="mt-6 max-w-3xl text-[15px] md:text-[17px] leading-relaxed text-secondary-foreground/80">
            O Método DCON organiza a análise em quatro etapas: <span className="text-gold">diagnóstico técnico</span>, <span className="text-gold">cruzamento de dados</span>, <span className="text-gold">plano de ação</span> e <span className="text-gold">acompanhamento consultivo</span>. Cada entrega é baseada em documentação, memória de cálculo e responsabilidade técnica.
          </p>
          <div className="mt-10">
            <Link to="/metodo" className="inline-flex items-center bg-gold text-gold-foreground px-6 py-3 text-[12px] uppercase tracking-[0.18em] hover:opacity-90">
              Conhecer o método →
            </Link>
          </div>
        </div>
      </section>

      {/* Autoridade e prova social */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold">Autoridade técnica</div>
          <h2 className="mt-3 font-display text-2xl md:text-4xl tracking-tight leading-[1.1] max-w-3xl">
            Responsabilidade técnica com registro ativo no CRC-GO.
          </h2>
          <div className="mt-12 grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-card p-7">
              <div className="text-[10px] uppercase tracking-[0.22em] text-gold">Responsável técnico</div>
              <h3 className="mt-3 font-display text-lg leading-snug">Leandro Matsuoka Guimarães</h3>
              <p className="mt-2 text-[13.5px] text-foreground/70">Contador · CRC-GO 16.395/O-9</p>
            </div>
            <div className="bg-card p-7">
              <div className="text-[10px] uppercase tracking-[0.22em] text-gold">Firma</div>
              <h3 className="mt-3 font-display text-lg leading-snug">DCON Serviços Contábeis</h3>
              <p className="mt-2 text-[13.5px] text-foreground/70">CRC-GO 1202 · Goiânia/GO</p>
            </div>
            <div className="bg-card p-7">
              <div className="text-[10px] uppercase tracking-[0.22em] text-gold">Cobertura</div>
              <h3 className="mt-3 font-display text-lg leading-snug">Atendimento nacional</h3>
              <p className="mt-2 text-[13.5px] text-foreground/70">Reuniões técnicas remotas e base presencial em Goiânia.</p>
            </div>
            <div className="bg-card p-7">
              <div className="text-[10px] uppercase tracking-[0.22em] text-gold">Entrega</div>
              <h3 className="mt-3 font-display text-lg leading-snug">Diagnóstico em 7 dias úteis</h3>
              <p className="mt-2 text-[13.5px] text-foreground/70">Relatório técnico com plano de ação priorizado por risco e impacto.</p>
            </div>
          </div>
          <p className="mt-10 max-w-3xl text-[14px] leading-relaxed text-muted-foreground">
            Toda recomendação relevante — pareceres, defesas, planejamento, PER/DCOMP e relatórios de diagnóstico — passa por revisão cruzada e é assinada por contador com CRC ativo, sob sigilo profissional do Código de Ética do CFC.
          </p>
        </div>
      </section>

      {/* FAQ reduzida */}
      <section
        className="border-t border-border"
        style={{
          background:
            "linear-gradient(180deg, var(--background) 0%, color-mix(in oklab, var(--gold) 6%, var(--background)) 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-12 gap-12">
          <header className="lg:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.24em] text-gold">Perguntas frequentes</div>
            <h2 className="mt-4 font-display text-2xl md:text-4xl tracking-tight leading-[1.05]">
              Quatro respostas rápidas sobre a DCON.
            </h2>
            <p className="mt-5 text-[14px] leading-relaxed text-muted-foreground">
              Demais perguntas estão em <Link to="/diagnostico" className="underline text-gold hover:no-underline">/diagnostico</Link>, <Link to="/metodo" className="underline text-gold hover:no-underline">/metodo</Link> e nas páginas de solução.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/diagnostico" className="inline-flex items-center bg-secondary text-secondary-foreground px-5 py-3 text-[11px] uppercase tracking-[0.18em] hover:bg-primary">
                Solicitar diagnóstico →
              </Link>
            </div>
          </header>
          <div className="lg:col-span-8 divide-y divide-border border-y border-border">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
                  <h3 className="font-display text-[17px] m-0 font-normal">{faq.q}</h3>
                  <span className="text-gold text-xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground text-[14px] leading-relaxed pr-10">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contato final — sem mapa */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="text-[11px] uppercase tracking-[0.24em] text-gold">Próximo passo</div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl tracking-tight leading-[1.02] max-w-3xl">
              Comece pelo diagnóstico técnico da sua empresa.
            </h2>
            <p className="mt-6 max-w-xl text-secondary-foreground/75 text-[15px] leading-relaxed">
              Sem compromisso comercial. Devolutiva técnica conduzida pelo responsável.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[13px] text-secondary-foreground/85">
              <a href="tel:+5562992890898" className="hover:text-gold transition-colors">
                <span className="text-gold">●</span> Telefone · (62) 99289-0898
              </a>
              <a href="mailto:contato@dcon.cnt.br" className="hover:text-gold transition-colors">
                <span className="text-gold">●</span> contato@dcon.cnt.br
              </a>
              <a href="https://wa.me/5562992890898" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                <span className="text-gold">●</span> WhatsApp · (62) 99289-0898
              </a>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
            <Link to="/diagnostico" className="inline-flex items-center bg-gold px-7 py-3.5 text-[12px] uppercase tracking-[0.18em] text-gold-foreground hover:opacity-90">
              Solicitar diagnóstico técnico inicial →
            </Link>
            <Link to="/contato" className="inline-flex items-center border border-secondary-foreground/30 px-7 py-3.5 text-[12px] uppercase tracking-[0.18em] hover:border-gold hover:text-gold">
              Falar com a DCON
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}