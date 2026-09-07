import { createFileRoute, Link } from "@tanstack/react-router";
import ogImage from "../assets/og-dcon.jpg";
import heroBg from "../assets/hero-bg.png";
import { Reveal } from "../components/Reveal";
import { AnimatedHeroBg } from "../components/AnimatedHeroBg";
import { ClientsCarousel } from "../components/ClientsCarousel";
import { useState } from "react";
import { buildSeoHead } from "@/lib/seo";

const SITE_URL = "https://www.dcon.cnt.br";
const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;
const HERO_BG_URL = heroBg;

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
    q: "Em quanto tempo o diagnóstico fica pronto?",
    aPlain: "Em até 7 dias úteis após o envio da documentação. Entregamos um relatório técnico com mapeamento fiscal, tributário, contábil, trabalhista, societário e patrimonial, mais um plano de ação priorizado por risco, impacto financeiro e prazo de regularização.",
    a: <>Em até 7 dias úteis após o envio da documentação. Entregamos um relatório técnico com mapeamento fiscal, tributário, contábil, trabalhista, societário e patrimonial, mais um plano de ação priorizado por risco, impacto financeiro e prazo de regularização. <Link to="/diagnostico" className="underline text-gold hover:no-underline">Solicitar diagnóstico →</Link></>,
  },
  {
    q: "A DCON ajuda a recuperar tributos pagos a maior?",
    aPlain: "Sim. Fazemos levantamento técnico dos últimos 5 anos em PIS, COFINS, ICMS, INSS e contribuições previdenciárias, com hipóteses como monofásico, alíquota zero, exclusão do ICMS da base, equiparação hospitalar e DIFAL. A recuperação é executada com PER/DCOMP e parecer técnico auditável.",
    a: <>Sim. Fazemos levantamento técnico dos últimos 5 anos em PIS, COFINS, ICMS, INSS e contribuições previdenciárias, com hipóteses como monofásico, alíquota zero, exclusão do ICMS da base, equiparação hospitalar e DIFAL. A recuperação é executada com PER/DCOMP e parecer técnico auditável. <Link to="/solucoes/recuperacao-creditos-tributarios" className="underline text-gold hover:no-underline">Recuperação de créditos →</Link></>,
  },
  {
    q: "Como a DCON conduz a Reforma Tributária (CBS/IBS)?",
    aPlain: "Modelamos o impacto da transição 2026–2033 no caixa da empresa, revisamos NCM, CFOP, CST, cClassTrib e contratos, e preparamos o ERP e a apuração assistida para os novos tributos. Para setores específicos (saúde, construção, agro, ISP, e-commerce) aplicamos análise dedicada.",
    a: <>Modelamos o impacto da transição 2026–2033 no caixa da empresa, revisamos NCM, CFOP, CST, cClassTrib e contratos, e preparamos o ERP e a apuração assistida para os novos tributos. Para setores específicos (saúde, construção, agro, ISP, e-commerce) aplicamos análise dedicada. <Link to="/solucoes/reforma-tributaria" className="underline text-gold hover:no-underline">Reforma Tributária →</Link></>,
  },
  {
    q: "Faz sentido constituir uma holding patrimonial?",
    aPlain: "Depende do patrimônio, da estrutura familiar e do objetivo (proteção, sucessão, eficiência). Em parte dos casos a recomendação técnica é não constituir — holding sem patrimônio relevante vira custo de manutenção. Avaliamos ITBI, ITCMD e ganho de capital antes de qualquer transferência.",
    a: <>Depende do patrimônio, da estrutura familiar e do objetivo (proteção, sucessão, eficiência). Em parte dos casos a recomendação técnica é não constituir — holding sem patrimônio relevante vira custo de manutenção. Avaliamos ITBI, ITCMD e ganho de capital antes de qualquer transferência. <Link to="/solucoes/holding-patrimonial" className="underline text-gold hover:no-underline">Holding patrimonial →</Link></>,
  },
  {
    q: "Quanto custa a contabilidade da DCON?",
    aPlain: "Os honorários variam conforme regime tributário, porte e serviços contratados. Atendemos MEI, Simples Nacional, Lucro Presumido e Lucro Real. Solicite um diagnóstico técnico inicial para receber proposta personalizada.",
    a: <>Os honorários variam conforme regime tributário, porte e serviços contratados. Atendemos MEI, Simples Nacional, Lucro Presumido e Lucro Real. <Link to="/diagnostico" className="underline text-gold hover:no-underline">Solicitar proposta →</Link></>,
  },
  {
    q: "A DCON atende empresas de todo o Brasil?",
    aPlain: "Sim. Sede em Goiânia, GO, com atendimento digital completo em todo o Brasil. Clientes de outros estados contam com o mesmo nível de consultoria e suporte técnico.",
    a: <>Sim. Sede em Goiânia, GO, com atendimento digital completo em todo o Brasil. <Link to="/contato" className="underline text-gold hover:no-underline">Falar com a DCON →</Link></>,
  },
  {
    q: "O que é o Método DCON?",
    aPlain: "Metodologia proprietária de conformidade fiscal-contábil: Diagnóstico → Cruzamento de dados → Parecer técnico → Correção → Monitoramento contínuo. Garante operação com segurança fiscal e previsibilidade.",
    a: <>Metodologia proprietária em 4 fases auditáveis. <Link to="/metodo" className="underline text-gold hover:no-underline">Conhecer o Método DCON →</Link></>,
  },
  {
    q: "A DCON atende médicos e clínicas?",
    aPlain: "Sim. Experiência específica com médicos, dentistas, fisioterapeutas e clínicas: equiparação hospitalar, PJ médica, planejamento tributário e departamento pessoal para o setor de saúde.",
    a: <>Sim. Análise de equiparação hospitalar, PJ médica e planejamento tributário para o setor. <Link to="/segmentos/medicos-clinicas" className="underline text-gold hover:no-underline">Médicos e clínicas →</Link></>,
  },
  {
    q: "Dá para trocar de contador no meio do ano fiscal sem multa ou burocracia?",
    aPlain: "Sim. A transição pode ser feita em qualquer mês do ano fiscal, sem multa e sem burocracia. Antes da migração efetiva fazemos o levantamento técnico do histórico fiscal e contábil, para garantir continuidade das obrigações sem exposição a risco.",
    a: <>Sim. A transição pode ser feita em qualquer mês do ano fiscal, sem multa e sem burocracia. Antes da migração efetiva fazemos o levantamento técnico do histórico fiscal e contábil, para garantir continuidade das obrigações sem exposição a risco. <Link to="/solucoes/trocar-contabilidade" className="underline text-gold hover:no-underline">Como trocar de contabilidade →</Link></>,
  },
  {
    q: "Como funciona a cobrança da DCON?",
    aPlain: "O valor varia conforme o diagnóstico técnico inicial da empresa: porte, regime tributário, volume de operações e complexidade das obrigações. Não trabalhamos com tabela fixa genérica — a proposta é apresentada depois do diagnóstico.",
    a: <>O valor varia conforme o diagnóstico técnico inicial da empresa: porte, regime tributário, volume de operações e complexidade das obrigações. Não trabalhamos com tabela fixa genérica — a proposta é apresentada depois do diagnóstico. <Link to="/diagnostico" className="underline text-gold hover:no-underline">Solicitar diagnóstico →</Link></>,
  },
];


export const Route = createFileRoute("/")({
  head: () => {
    const seo = buildSeoHead({
      title: "DCON | Contador Tributarista e Consultoria Tributária em Goiânia",
      description: "Consultoria tributária estratégica em Goiânia. Planejamento tributário, recuperação de créditos, defesas fiscais e reforma CBS/IBS com responsabilidade técnica CRC-GO 1202/O-5.",
      canonical: `${SITE_URL}/`,
      ogImage: OG_IMAGE_URL,
    });
    return ({
    meta: [
      ...seo.meta,
      { name: "keywords", content: "consultoria contábil Goiânia, planejamento tributário, reforma tributária CBS IBS, recuperação de créditos tributários, holding patrimonial, defesa fiscal, contabilidade consultiva" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "DCON · Contabilidade Consultiva Técnica — Goiânia, CRC-GO 1202/O-5" },
    ],
    links: [
      ...seo.links,
      { rel: "alternate", hrefLang: "pt-BR", href: `${SITE_URL}/` },
      { rel: "alternate", hrefLang: "x-default", href: `${SITE_URL}/` },
      { rel: "preload", as: "image", href: HERO_BG_URL, fetchPriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AccountingService",
          name: "DCON Serviços Contábeis",
          alternateName: "DCON",
          description: "Escritório de contabilidade consultiva em Goiânia, GO. Especializado em conformidade fiscal-contábil, planejamento tributário, recuperação de créditos, reforma tributária CBS/IBS, holding patrimonial, departamento pessoal e valuation. Método DCON: Diagnóstico, Cruzamento, Parecer, Correção e Monitoramento.",
          url: `${SITE_URL}/`,
          logo: `${SITE_URL}/logo-dcon.png`,
          image: OG_IMAGE_URL,
          telephone: "+55-62-3223-7010",
          email: "contato@dcon.cnt.br",
          foundingDate: "2005",
          numberOfEmployees: { "@type": "QuantitativeValue", value: 11 },
          areaServed: [
            { "@type": "City", name: "Goiânia", addressRegion: "GO", addressCountry: "BR" },
            { "@type": "State", name: "Goiás", addressCountry: "BR" },
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua 89-A, 51",
            addressLocality: "Goiânia",
            addressRegion: "GO",
            postalCode: "74093-150",
            addressCountry: "BR",
          },
          geo: { "@type": "GeoCoordinates", latitude: "-16.699", longitude: "-49.267" },
          openingHoursSpecification: [{
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
          }],
          sameAs: [
            "https://www.linkedin.com/company/dcon-servicos-contabeis/",
            "https://www.instagram.com/dconservicoscontabeis/",
            "https://www.facebook.com/dconservicoscontabeis",
          ],
          founder: {
            "@type": "Person",
            name: "Leandro Matsuoka Guimarães",
            jobTitle: "Contador responsável",
            identifier: "CRC-GO 16.395/O-9",
          },
          hasCredential: {
            "@type": "EducationalOccupationalCredential",
            name: "CRC-GO 1202/O-5",
            credentialCategory: "Registro no Conselho Regional de Contabilidade de Goiás",
          },
          serviceType: [
            "Planejamento Tributário",
            "Contabilidade Recorrente",
            "Reforma Tributária (CBS/IBS)",
            "Recuperação de Créditos Tributários",
            "Defesa Fiscal e Administrativa",
            "Holding Patrimonial e Familiar",
            "Departamento Pessoal e eSocial",
            "BPO Financeiro",
            "Valuation e KPIs",
            "Abertura e Encerramento de Empresas",
            "Conformidade SPED ECD/ECF",
          ],
          priceRange: "$$",
          paymentAccepted: "PIX, Boleto, Transferência bancária",
          currenciesAccepted: "BRL",
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
    });
  },
  component: Home,
});

const solutions = [
  { n: "01", h: "Planejamento Tributário", b: "Comparativo de regimes, cenários e estruturas societárias com fundamento legal.", to: "/solucoes/planejamento-tributario" },
  { n: "02", h: "Reforma Tributária (CBS/IBS)", b: "Modelagem da transição, impacto setorial e adaptação da operação ao novo modelo.", to: "/solucoes/reforma-tributaria" },
  { n: "03", h: "Defesas Fiscais", b: "Impugnações, recursos e defesas administrativas para autuações federais, estaduais e municipais.", to: "/solucoes/defesas-fiscais" },
  { n: "04", h: "Recuperação de Créditos", b: "Revisão técnica de tributos pagos a maior nos últimos 5 anos.", to: "/solucoes/recuperacao-creditos-tributarios" },
  { n: "05", h: "Holding e Patrimônio", b: "Estrutura patrimonial, sucessão e proteção dentro do enquadramento legal.", to: "/solucoes/holding-patrimonial" },
  { n: "06", h: "Valuation e KPIs", b: "Leitura econômica e indicadores para decisões de M&A, captação e expansão.", to: "/solucoes/valuation-kpis" },
];

const sectors = [
  { h: "Médicos e Clínicas", b: "PJ médica, equiparação hospitalar e sociedade entre profissionais.", to: "/segmentos/medicos-clinicas" },
  { h: "E-commerce", b: "DIFAL, ICMS-ST e operação multiestadual sob controle.", to: "/segmentos/e-commerce" },
  { h: "Construção Civil e SPEs", b: "RET, patrimônio de afetação e SPE por obra.", to: "/segmentos/construcao-civil-spe" },
  { h: "Tecnologia e Startups", b: "SaaS, ISS, equity, Lei do Bem e captação.", to: "/segmentos/tecnologia-startups" },
  { h: "Provedores de Internet", b: "Tributação ISP, Fust, Funttel e regulatório.", to: "/segmentos/provedores-internet" },
  { h: "Holdings", b: "Estrutura patrimonial e familiar sob método.", to: "/segmentos/holdings" },
];

const method = [
  { n: "01", h: "Diagnóstico técnico", b: "Mapeamos o que está sendo declarado, pago e registrado. Avaliamos exposição fiscal, contábil, societária e trabalhista." },
  { n: "02", h: "Estruturação", b: "Regime tributário, CNAE, sócios, distribuição e processos ajustados à operação real, não ao modelo padrão." },
  { n: "03", h: "Rotina auditável", b: "Calendário fiscal, fechamento revisado, relatórios padronizados e controles internos auditáveis." },
  { n: "04", h: "Acompanhamento consultivo", b: "Reuniões periódicas com leitura técnica do que o número está dizendo e do que precisa ser decidido." },
];

function Home() {
  const [showAllSolutions, setShowAllSolutions] = useState(false);
  const visibleSolutions = showAllSolutions ? solutions : solutions.slice(0, 3);
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
            Consultoria tributária em Goiânia com{" "}
            <span className="font-semibold">leitura técnica</span> do que sua empresa declara.
          </Reveal>

          <Reveal as="p" delay={160} className="mt-6 max-w-2xl text-[15px] md:text-[17px] leading-relaxed text-white/70">
            Diagnóstico técnico em <span className="text-white font-medium">7 dias úteis</span>, planejamento tributário, Reforma Tributária (CBS/IBS) e recuperação de créditos sob responsabilidade técnica com CRC ativo.
          </Reveal>

          <Reveal delay={240} className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
            <Link to="/diagnostico" className="inline-flex items-center bg-gold text-gold-foreground px-8 py-4 text-[13px] font-medium uppercase tracking-[0.18em] shadow-lg hover:opacity-90 transition-opacity">
              Solicitar diagnóstico técnico inicial →
            </Link>
            <Link to="/solucoes/reforma-tributaria" className="text-[11px] uppercase tracking-[0.18em] text-white/60 underline decoration-white/25 underline-offset-4 hover:text-gold hover:decoration-gold transition-colors">
              Reforma Tributária 2026
            </Link>
          </Reveal>

          {/* Tira compacta de credenciais */}
          <Reveal delay={320} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-white/50 border-t border-white/15 pt-5">
            <span><span className="text-gold">●</span> DCON CRC-GO 1202/O-5</span>
            <span className="text-white/25">/</span>
            <span>Resp. técnico CRC-GO 16.395/O-9</span>
            <span className="text-white/25">/</span>
            <span>Atendimento nacional</span>
            <span className="text-white/25">/</span>
            <span>Diagnóstico em 7 dias úteis</span>
          </Reveal>
        </div>
      </section>

      {/* Faixa de resultados — números já usados no site */}
      <section className="border-b border-border bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-7 grid grid-cols-1 sm:grid-cols-3 gap-y-5 sm:gap-x-8 divide-y sm:divide-y-0 sm:divide-x divide-secondary-foreground/15">
          {[
            { n: "+300", l: "empresas atendidas" },
            { n: "Desde 2004", l: "20+ anos de atuação" },
            { n: "CRC-GO 1202/O-5", l: "registro ativo" },
          ].map((s) => (
            <div key={s.l} className="pt-5 sm:pt-0 sm:px-8 first:sm:pl-0 last:sm:pr-0">
              <div className="font-display text-xl md:text-2xl tracking-tight text-gold">{s.n}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-secondary-foreground/60">{s.l}</div>
            </div>
          ))}
        </div>
      </section>


      {/* Por onde começar — 4 atalhos grandes coloridos */}
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
              <div className="text-[11px] uppercase tracking-[0.24em] text-gold">Por onde começar</div>
              <h2 className="mt-3 font-display text-2xl md:text-4xl tracking-tight leading-[1.1]">
                Escolha o que você precisa agora.
              </h2>
            </div>
          </div>
          <div className="grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-4">
            {[
              { tag: "CBS / IBS", h: "Reforma Tributária", b: "Impacto no caixa 2026–2033", to: "/solucoes/reforma-tributaria", color: "var(--gold)" },
              { tag: "Crédito", h: "Recuperar tributos", b: "Últimos 5 anos · PER/DCOMP", to: "/solucoes/recuperacao-creditos-tributarios", color: "var(--secondary)" },
              { tag: "Patrimônio", h: "Holding e sucessão", b: "ITBI, ITCMD e governança", to: "/solucoes/holding-patrimonial", color: "var(--gold)" },
              { tag: "Diagnóstico", h: "Mapear minha empresa", b: "7 dias úteis · relatório técnico", to: "/diagnostico", color: "var(--secondary)" },
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

      {/* Linhas de serviço */}
      <section className="bg-muted/60 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-[11px] uppercase tracking-[0.24em] text-gold">Linhas de serviço</div>
              <h2 className="mt-4 font-display text-3xl md:text-5xl tracking-tight max-w-xl leading-[1.05]">
                Da rotina obrigatória às decisões patrimoniais.
              </h2>
            </div>
            <Link to="/solucoes" className="text-[11px] uppercase tracking-[0.2em] border-b border-gold pb-1 text-secondary hover:text-primary">
              Ver todas as soluções →
            </Link>
          </div>
          <div className="grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-3">
            {visibleSolutions.map((s, i) => (
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
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllSolutions((v) => !v)}
              className="inline-flex items-center gap-3 border border-border bg-card px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-secondary hover:border-gold hover:text-gold transition-colors"
              aria-expanded={showAllSolutions}
            >
              <span>{showAllSolutions ? "Mostrar menos" : `Ver mais ${solutions.length - 3} linhas de serviço`}</span>
              <span className={`text-gold transition-transform ${showAllSolutions ? "rotate-180" : ""}`}>↓</span>
            </button>
          </div>
        </div>
      </section>

      {/* Setores — compactos */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-[11px] uppercase tracking-[0.24em] text-gold">Setores atendidos</div>
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

      {/* Método — compacto e colorido */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-[11px] uppercase tracking-[0.24em] text-gold">Método DCON</div>
              <h2 className="mt-3 font-display text-2xl md:text-4xl tracking-tight leading-[1.1] max-w-2xl">
                Quatro etapas auditáveis. Clique para expandir.
              </h2>
            </div>
            <Link to="/metodo" className="text-[11px] uppercase tracking-[0.2em] border-b border-gold pb-1 text-gold">
              Método completo →
            </Link>
          </div>
          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-secondary-foreground/10 border border-secondary-foreground/10">
            {method.map((m, i) => (
              <Reveal key={m.h} as="li" delay={i * 120} y={24} className="panel-interactive p-6" style={{ ["--panel-accent" as never]: "var(--gold)", background: `linear-gradient(180deg, color-mix(in oklab, var(--gold) ${i % 2 === 0 ? 14 : 7}%, var(--secondary)) 0%, var(--secondary) 100%)` }}>
                <details className="group">
                  <summary className="cursor-pointer list-none">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-gold">{m.n}</div>
                    <h3 className="mt-2 font-display text-lg flex items-start justify-between gap-3">
                      <span>{m.h}</span>
                      <span className="text-gold text-lg leading-none group-open:rotate-45 transition-transform">+</span>
                    </h3>
                  </summary>
                  <p className="mt-3 text-[14px] leading-relaxed text-secondary-foreground/85">{m.b}</p>
                </details>
              </Reveal>
            ))}
          </ol>

        </div>
      </section>

      {/* FAQ */}
      <section
        className="border-t border-border"
        style={{
          background:
            "linear-gradient(180deg, var(--background) 0%, color-mix(in oklab, var(--gold) 6%, var(--background)) 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12">
          <header className="lg:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.24em] text-gold">Perguntas frequentes</div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl tracking-tight leading-[1.05]">
              Como funciona a consultoria contábil, tributária e patrimonial da DCON.
            </h2>
            <p className="mt-5 text-[14px] leading-relaxed text-muted-foreground">
              Clique em uma pergunta para abrir a resposta técnica.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/diagnostico" className="inline-flex items-center bg-secondary text-secondary-foreground px-5 py-3 text-[11px] uppercase tracking-[0.18em] hover:bg-primary">
                Solicitar diagnóstico →
              </Link>
              <Link to="/metodo" className="inline-flex items-center border border-gold px-5 py-3 text-[11px] uppercase tracking-[0.18em] text-secondary hover:bg-gold hover:text-gold-foreground">
                ● Método DCON
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

      {/* Closing CTA */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="text-[11px] uppercase tracking-[0.24em] text-gold">Próximo passo</div>
            <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-tight leading-[1.02] max-w-3xl">
              Comece pelo diagnóstico técnico da sua empresa.
            </h2>
            <p className="mt-6 max-w-xl text-secondary-foreground/75 text-[15px] leading-relaxed">
              Sem compromisso comercial. Devolutiva técnica conduzida pelo responsável.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
            <Link to="/diagnostico" className="inline-flex items-center bg-gold px-7 py-3.5 text-[12px] uppercase tracking-[0.18em] text-gold-foreground hover:opacity-90">
              Solicitar diagnóstico técnico inicial →
            </Link>
            <Link to="/metodo" className="inline-flex items-center border border-gold px-7 py-3.5 text-[12px] uppercase tracking-[0.18em] text-gold hover:bg-gold hover:text-gold-foreground">
              ● Método DCON
            </Link>
            <Link to="/contato" className="inline-flex items-center border border-secondary-foreground/30 px-7 py-3.5 text-[12px] uppercase tracking-[0.18em] hover:border-gold hover:text-gold">
              Falar com a DCON
            </Link>
          </div>
        </div>
      </section>

      {/* Mapa / endereço */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20 grid lg:grid-cols-12 gap-8 lg:gap-10">
          <header className="lg:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Onde estamos</div>
            <h2 className="font-display text-2xl md:text-3xl tracking-tight">Presença física em Goiânia</h2>
            <p className="mt-4 text-foreground/90 leading-relaxed text-[15px] sm:text-base">
              R. 89-A, nº 51 — Setor Sul<br className="sm:hidden" />
              <span className="sm:ml-0"> Goiânia — GO, 74093-150</span>
            </p>
            <a
              href="https://www.google.com/maps/place/Dcon+Servi%C3%A7os+Cont%C3%A1beis/data=!4m2!3m1!1s0x0:0xd8fc177d850a4b61?sa=X&ved=1t:2428&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2 border border-border bg-card px-5 py-3 min-h-[44px] text-[12px] uppercase tracking-[0.16em] hover:border-gold hover:text-gold transition-colors"
            >
              <span>Abrir no Google Maps</span>
              <span className="text-gold" aria-hidden="true">→</span>
            </a>
            <p className="mt-6 text-[14px] leading-relaxed text-muted-foreground">
              Saiba como atuamos como{" "}
              <Link to="/contador-em-goiania" className="text-gold underline underline-offset-4 hover:no-underline">
                contador em Goiânia
              </Link>{" "}
              ou conheça a estrutura do nosso{" "}
              <Link to="/escritorio-de-contabilidade-em-goiania" className="text-gold underline underline-offset-4 hover:no-underline">
                escritório de contabilidade em Goiânia
              </Link>
              .
            </p>
          </header>
          <div className="lg:col-span-8 aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden border border-border bg-card">
            <iframe
              title="DCON Serviços Contábeis — R. 89-A, nº 51, Setor Sul, Goiânia"
              src="https://www.google.com/maps?q=Dcon+Servi%C3%A7os+Cont%C3%A1beis,+R.+89-A,+51+-+Setor+Sul,+Goi%C3%A2nia+-+GO&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      <ClientsCarousel />
    </div>
  );
}
