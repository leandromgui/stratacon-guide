import { createFileRoute, Link } from "@tanstack/react-router";
import { DOC } from "../lib/dcon-content";

const homeDoc = DOC.home();

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
    q: "Quanto custa o diagnóstico técnico da DCON?",
    aPlain: "O diagnóstico inicial é apresentado em proposta após uma conversa preliminar de escopo. O valor depende do porte, do número de CNPJs, dos regimes envolvidos e do volume documental. Não cobramos pela conversa inicial nem pela proposta.",
    a: <>O diagnóstico inicial é apresentado em proposta após uma conversa preliminar de escopo. O valor depende do porte, do número de CNPJs, dos regimes envolvidos e do volume documental. Não cobramos pela conversa inicial nem pela proposta.</>,
  },
  {
    q: "Trabalham com empresas de qualquer regime tributário?",
    aPlain: "Sim — Simples Nacional, Lucro Presumido e Lucro Real. Em muitos casos o próprio diagnóstico revela que a empresa está no regime errado para a operação atual; comparamos cenários antes de qualquer migração e validamos sublimite, Fator R e enquadramento de CNAE.",
    a: <>Sim — Simples Nacional, Lucro Presumido e Lucro Real. Em muitos casos o próprio <Link to="/diagnostico" className="underline text-gold hover:no-underline">diagnóstico</Link> revela que a empresa está no regime errado para a operação atual; comparamos cenários antes de qualquer migração e validamos sublimite, Fator R e enquadramento de CNAE.</>,
  },
  {
    q: "Como funciona a troca de contabilidade para a DCON?",
    aPlain: "Conduzimos a transição com plano formal de migração: solicitação técnica ao contador anterior, auditoria de entrada da base recebida, cronograma de assunção de obrigações e revisão dos últimos 5 anos. Não há janela sem responsável técnico — assumimos antes que qualquer prazo vença.",
    a: <>Conduzimos a transição com plano formal de migração: solicitação técnica ao contador anterior, auditoria de entrada da base recebida, cronograma de assunção de obrigações e revisão dos últimos 5 anos. Não há janela sem responsável técnico — assumimos antes que qualquer prazo vença. Veja o passo a passo para <Link to="/solucoes/trocar-contabilidade" className="underline text-gold hover:no-underline">trocar de contabilidade →</Link></>,
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
    q: "Atendem empresas fora de Goiânia?",
    aPlain: "Sim. A maior parte do atendimento é remoto, com reuniões técnicas por vídeo, canais auditáveis para documentos e protocolos de revisão cruzada. Mantemos a base operacional em Goiânia e atendemos clientes em todo o Brasil.",
    a: <>Sim. A maior parte do atendimento é remoto, com reuniões técnicas por vídeo, canais auditáveis para documentos e protocolos de revisão cruzada. Mantemos a base operacional em Goiânia e atendemos clientes em todo o Brasil.</>,
  },
  {
    q: "Atuam como assessoria contínua ou em projetos pontuais?",
    aPlain: "Ambos. Há clientes em consultoria mensal contínua (contabilidade, fiscal, DP e governança) e projetos pontuais como recuperação de créditos, reestruturação societária, holding, defesa fiscal e valuation. Todo trabalho segue o Método DCON de diagnóstico, estruturação, rotina e acompanhamento.",
    a: <>Ambos. Há clientes em consultoria mensal contínua (contabilidade, fiscal, DP e governança) e projetos pontuais como recuperação de créditos, reestruturação societária, holding, defesa fiscal e valuation. Todo trabalho segue o <Link to="/metodo" className="underline text-gold hover:no-underline">Método DCON</Link> de diagnóstico, estruturação, rotina e acompanhamento.</>,
  },
  {
    q: "Quem assina tecnicamente as entregas da DCON?",
    aPlain: "Responsável técnico com CRC ativo. Toda recomendação relevante — pareceres, defesas, planejamento, PER/DCOMP e relatórios de diagnóstico — passa por revisão cruzada antes da entrega ao cliente.",
    a: <>Responsável técnico com CRC ativo. Toda recomendação relevante — pareceres, defesas, planejamento, PER/DCOMP e relatórios de <Link to="/diagnostico" className="underline text-gold hover:no-underline">diagnóstico</Link> — passa por revisão cruzada antes da entrega ao cliente.</>,
  },
  {
    q: "Como é tratada a confidencialidade das informações?",
    aPlain: "Sob sigilo profissional do contador (Código de Ética CFC) e contratos de confidencialidade quando aplicável. Documentos circulam por canais auditáveis com controle de acesso por função e histórico de movimentação.",
    a: <>Sob sigilo profissional do contador (Código de Ética CFC) e contratos de confidencialidade quando aplicável. Documentos circulam por canais auditáveis com controle de acesso por função e histórico de movimentação.</>,
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

const themes = [
  { tag: "Tributário", h: "Reforma Tributária", b: "O que muda no caixa entre 2026 e 2033.", to: "/solucoes/reforma-tributaria" },
  { tag: "Defesa", h: "Autuação fiscal", b: "Como conduzir tecnicamente uma impugnação.", to: "/solucoes/defesas-fiscais" },
  { tag: "Patrimônio", h: "Sucessão e Holding", b: "ITCMD, doação em vida e governança familiar.", to: "/conteudos/holding-patrimonio" },
  { tag: "Compliance", h: "Regularização Fiscal", b: "Saída de pendências e plano de compliance.", to: "/solucoes/regularizacao-fiscal" },
];

const method = [
  { n: "01", h: "Diagnóstico técnico", b: "Mapeamos o que está sendo declarado, pago e registrado. Avaliamos exposição fiscal, contábil, societária e trabalhista." },
  { n: "02", h: "Estruturação", b: "Regime tributário, CNAE, sócios, distribuição e processos ajustados à operação real, não ao modelo padrão." },
  { n: "03", h: "Rotina auditável", b: "Calendário fiscal, fechamento revisado, relatórios padronizados e controles internos auditáveis." },
  { n: "04", h: "Acompanhamento consultivo", b: "Reuniões periódicas com leitura técnica do que o número está dizendo e do que precisa ser decidido." },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-secondary text-secondary-foreground overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-secondary-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-secondary-foreground) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="text-[11px] uppercase tracking-[0.26em] text-gold rule-gold">
              Consultoria contábil, fiscal, tributária e empresarial
            </div>
            <h1 className="mt-8 font-display text-5xl md:text-7xl font-medium tracking-tight leading-[1.02] max-w-4xl">
              Decisões econômicas seguras exigem leitura técnica do que está sendo declarado.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-secondary-foreground/75 leading-relaxed">
              A DCON é uma firma de consultoria contábil, fiscal, tributária e empresarial
              em Goiânia, com atendimento em todo o Brasil. Conduzimos planejamento
              tributário, reforma CBS/IBS, recuperação de créditos, holding patrimonial
              e defesa fiscal pelo <strong className="text-secondary-foreground">Método DCON</strong> em quatro fases auditáveis.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to={homeDoc.ctas[0].to}
                className="inline-flex items-center bg-gold px-7 py-3.5 text-[12px] uppercase tracking-[0.18em] font-medium text-gold-foreground hover:opacity-90"
              >
                {homeDoc.ctas[0].label} →
              </Link>
              <Link
                to={homeDoc.ctas[1].to}
                className="inline-flex items-center border border-gold px-7 py-3.5 text-[12px] uppercase tracking-[0.18em] text-gold hover:bg-gold hover:text-gold-foreground"
              >
                {homeDoc.ctas[1].label}
              </Link>
              <Link
                to={homeDoc.ctas[2].to}
                className="inline-flex items-center border border-secondary-foreground/30 px-7 py-3.5 text-[12px] uppercase tracking-[0.18em] hover:border-gold hover:text-gold"
              >
                {homeDoc.ctas[2].label}
              </Link>
            </div>
          </div>
          <aside className="lg:col-span-4 lg:border-l lg:border-secondary-foreground/15 lg:pl-10 flex flex-col justify-end gap-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.24em] text-secondary-foreground/55 mb-2">Em foco</div>
              <Link to="/solucoes/reforma-tributaria" className="font-display text-xl leading-snug hover:text-gold block">
                Reforma Tributária 2026–2033: o que muda no seu caixa.
              </Link>
              <p className="mt-2 text-sm text-secondary-foreground/65">Análise da transição CBS/IBS por setor e regime.</p>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-secondary-foreground/15">
              {[
                ["+20", "anos de atuação"],
                ["+500", "empresas atendidas"],
                ["7d", "diagnóstico"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl">{n}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-secondary-foreground/55 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {homeDoc.respostaValidada && (
        <section className="border-y border-border bg-card">
          <div className="mx-auto max-w-7xl px-6 py-14 md:py-16 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <div className="text-[11px] uppercase tracking-[0.24em] text-gold">
                Resposta validada DCON
              </div>
              <h2 className="mt-4 font-display text-2xl tracking-tight">
                O que dizemos sobre este tema.
              </h2>
            </div>
            <p className="lg:col-span-8 text-[15px] md:text-[16px] text-foreground/85 leading-relaxed">
              {homeDoc.respostaValidada}
            </p>
          </div>
        </section>
      )}

      {/* Posicionamento */}
      <section className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12">
        <header className="lg:col-span-5">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold">A firma</div>
          <h2 className="mt-4 font-display text-3xl md:text-5xl tracking-tight leading-[1.05]">
            Uma firma técnica, não uma contabilidade online.
          </h2>
        </header>
        <div className="lg:col-span-7 lg:pl-10 lg:border-l lg:border-border space-y-5 text-[16px] leading-relaxed text-foreground/85">
          <p>
            A DCON existe para empresários que pararam de tratar contabilidade como
            custo administrativo. Operamos no ponto em que a contabilidade tradicional
            para de pensar — a decisão do sócio, do CFO e do conselho.
          </p>
          <p>
            Nossas entregas são conduzidas sob responsabilidade técnica registrada,
            com revisão cruzada de processos e protocolos auditáveis. Não vendemos
            preço baixo; entregamos visão tributária, societária, patrimonial e
            contábil integrada.
          </p>
          <div className="pt-4 flex flex-wrap gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="rule-gold">CRC ativo</span>
            <span className="rule-gold">Sigilo profissional</span>
            <span className="rule-gold">Revisão técnica</span>
            <span className="rule-gold">Atendimento Brasil</span>
          </div>
        </div>
      </section>

      {/* Linhas de serviço */}
      <section className="bg-muted/40 border-y border-border">
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
            {solutions.map((s) => (
              <Link key={s.h} to={s.to} className="group bg-card p-8 flex flex-col justify-between hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-gold">{s.n}</div>
                  <h3 className="mt-3 font-display text-xl leading-snug">{s.h}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground group-hover:text-secondary-foreground/75">{s.b}</p>
                </div>
                <div className="mt-8 text-[11px] uppercase tracking-[0.2em] text-secondary group-hover:text-gold">Conhecer →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Setores */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-6">
            <div className="text-[11px] uppercase tracking-[0.24em] text-gold">Setores atendidos</div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl tracking-tight leading-[1.05]">
              Conhecimento específico por vertical.
            </h2>
          </div>
          <p className="lg:col-span-6 text-[16px] leading-relaxed text-foreground/80 lg:pt-8">
            Tributação muda por CNAE, por regime e por modelo de operação. Em cada setor
            que atendemos aplicamos método dedicado, com leitura específica das obrigações
            principais, acessórias e dos pontos típicos de exposição.
          </p>
        </div>
        <div className="grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s) => (
            <Link key={s.h} to={s.to} className="group bg-card p-7 hover:bg-secondary hover:text-secondary-foreground transition-colors">
              <h3 className="font-display text-lg">{s.h}</h3>
              <p className="mt-2 text-[14px] text-muted-foreground group-hover:text-secondary-foreground/75 leading-relaxed">{s.b}</p>
              <div className="mt-5 text-[11px] uppercase tracking-[0.2em] text-secondary group-hover:text-gold">Ver setor →</div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/segmentos" className="text-[12px] uppercase tracking-[0.2em] border-b border-secondary pb-1 hover:text-primary hover:border-primary">
            Ver todos os setores →
          </Link>
        </div>
      </section>

      {/* Método */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid lg:grid-cols-12 gap-12 mb-14">
            <div className="lg:col-span-5">
              <div className="text-[11px] uppercase tracking-[0.24em] text-gold">Método DCON</div>
              <h2 className="mt-4 font-display text-3xl md:text-5xl tracking-tight leading-[1.05]">
                Quatro etapas auditáveis para transformar contabilidade em decisão.
              </h2>
            </div>
            <p className="lg:col-span-7 text-[16px] leading-relaxed text-secondary-foreground/75 lg:pt-8">
              O método DCON é o protocolo aplicado a todo cliente, do diagnóstico inicial à
              consultoria periódica. Padroniza o que precisa ser previsível e dá espaço técnico
              para o que precisa ser específico.
            </p>
          </div>
          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-secondary-foreground/10 border border-secondary-foreground/10">
            {method.map((m) => (
              <li key={m.h} className="bg-secondary p-7">
                <div className="text-[11px] uppercase tracking-[0.22em] text-gold">{m.n}</div>
                <h3 className="mt-3 font-display text-xl">{m.h}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-secondary-foreground/75">{m.b}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12">
            <Link to="/metodo" className="inline-flex items-center border border-gold px-6 py-3 text-[12px] uppercase tracking-[0.18em] text-gold hover:bg-gold hover:text-gold-foreground">
              Conhecer o método completo →
            </Link>
          </div>
        </div>
      </section>

      {/* Diagnóstico em destaque */}
      <section className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold">Diagnóstico DCON</div>
          <h2 className="mt-4 font-display text-3xl md:text-5xl tracking-tight leading-[1.05]">
            Sete dias úteis para mapear o que está fora de controle.
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-foreground/80 max-w-2xl">
            Análise técnica integrada do que está sendo pago, declarado e registrado.
            Entrega com plano de ação priorizado por risco, impacto e prazo.
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3 text-[14px]">
            {[
              "Fiscal: SPEDs, ECF, EFD-Reinf, DCTFWeb",
              "Tributário: regime, CNAE, sublimite, fator R",
              "Contábil: balanços, ECD, conciliações",
              "Trabalhista: eSocial, pró-labore, encargos",
              "Societário: contrato social, distribuição, sócios",
              "Patrimonial: bens, holding, sucessão",
            ].map((it) => (
              <li key={it} className="border-b border-dashed border-border pb-2 flex gap-3">
                <span className="text-gold">·</span> {it}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/diagnostico" className="inline-flex items-center bg-secondary text-secondary-foreground px-6 py-3 text-[12px] uppercase tracking-[0.18em] hover:bg-primary">
              Solicitar diagnóstico →
            </Link>
            <Link to="/metodo" className="inline-flex items-center border border-border px-6 py-3 text-[12px] uppercase tracking-[0.18em] hover:border-secondary">
              Ver metodologia
            </Link>
          </div>
        </div>
        <aside className="lg:col-span-5 bg-secondary text-secondary-foreground p-10 flex flex-col justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.24em] text-gold mb-4">Tecnologia contábil</div>
            <h3 className="font-display text-2xl leading-snug">
              Automatização da rotina, decisão sob responsabilidade humana.
            </h3>
            <p className="mt-4 text-[14px] text-secondary-foreground/70 leading-relaxed">
              Integração com SPED, ERPs, plataformas de venda e bancos. Painéis gerenciais
              entregues sem cobrança do cliente. Toda recomendação técnica passa por revisão
              do responsável.
            </p>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-y-3 text-[12px] uppercase tracking-[0.18em] text-secondary-foreground/65">
            <li>SPED / ECF</li>
            <li>EFD-Reinf</li>
            <li>eSocial</li>
            <li>Painéis BI</li>
            <li>ERP / Bling</li>
            <li>Open Finance</li>
          </ul>
        </aside>
      </section>

      {/* Riscos */}
      <section className="bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-5">
              <div className="text-[11px] uppercase tracking-[0.24em] text-gold">Riscos típicos sob exposição</div>
              <h2 className="mt-4 font-display text-3xl md:text-5xl tracking-tight leading-[1.05]">
                O custo de não saber o que está sendo declarado.
              </h2>
            </div>
            <p className="lg:col-span-7 text-[16px] leading-relaxed text-foreground/80 lg:pt-8">
              Erros aparecem na autuação, não no balancete. A maioria das empresas que
              chegam à DCON descobre exposição relevante já no diagnóstico inicial.
            </p>
          </div>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {[
              ["Classificação fiscal incorreta", "NCM, CST, CFOP e CNAE desalinhados geram autuação retroativa com multa e juros."],
              ["ICMS-ST e DIFAL", "Operação multiestadual mal apurada acumula passivo silencioso por anos."],
              ["Pró-labore e distribuição", "Distribuição desproporcional sem fundamento contábil expõe o sócio à desconsideração."],
              ["Equiparação hospitalar", "Clínicas perdem benefício por enquadramento inadequado de CNAE e estrutura societária."],
              ["Crédito tributário não aproveitado", "Empresas pagam tributo a maior por anos sem fazer levantamento técnico de créditos."],
              ["Sucessão sem estrutura", "ITCMD e disputa familiar consomem patrimônio que poderia ser organizado em vida."],
            ].map(([h, b]) => (
              <li key={h} className="bg-card p-7">
                <div className="font-display text-gold text-2xl leading-none">!</div>
                <h3 className="mt-4 font-display text-lg">{h}</h3>
                <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{b}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Temas estratégicos */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-[11px] uppercase tracking-[0.24em] text-gold">Temas estratégicos</div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl tracking-tight max-w-2xl leading-[1.05]">
              A agenda do CFO e do sócio em 2026.
            </h2>
          </div>
          <Link to="/temas-estrategicos" className="text-[11px] uppercase tracking-[0.2em] border-b border-secondary pb-1 hover:text-primary hover:border-primary">
            Ver agenda completa →
          </Link>
        </div>
        <div className="grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-4">
          {themes.map((t) => (
            <Link key={t.h} to={t.to} className="group bg-card p-7 hover:bg-secondary hover:text-secondary-foreground transition-colors">
              <div className="text-[10px] uppercase tracking-[0.22em] text-gold">{t.tag}</div>
              <h3 className="mt-3 font-display text-lg leading-snug">{t.h}</h3>
              <p className="mt-2 text-[14px] text-muted-foreground group-hover:text-secondary-foreground/75 leading-relaxed">{t.b}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-12 gap-12">
          <header className="lg:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.24em] text-gold">Perguntas frequentes</div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl tracking-tight leading-[1.05]">
              Como funciona a consultoria contábil, tributária e patrimonial da DCON.
            </h2>
            <p className="mt-5 text-[14px] leading-relaxed text-muted-foreground">
              Respostas técnicas para as dúvidas mais comuns de sócios e CFOs antes
              de solicitar o diagnóstico — escopo, prazo, custo, troca de contador,
              recuperação de créditos, reforma tributária e holding.
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
            {faqs.map((faq, i) => (
              <details key={faq.q} className="group py-5" open={i === 0}>
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
              Solicitar diagnóstico →
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
        <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-12 gap-10">
          <header className="lg:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Onde estamos</div>
            <h2 className="font-display text-2xl md:text-3xl tracking-tight">Presença física em Goiânia</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed text-[15px]">
              R. 89-A, nº 51 — Setor Sul, Goiânia — GO, 74093-150
            </p>
            <a
              href="https://www.google.com/maps/place/Dcon+Servi%C3%A7os+Cont%C3%A1beis/data=!4m2!3m1!1s0x0:0xd8fc177d850a4b61?sa=X&ved=1t:2428&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 border border-border bg-card px-5 py-3 text-[12px] uppercase tracking-[0.16em] hover:border-gold hover:text-gold transition-colors"
            >
              <span>Abrir no Google Maps</span>
              <span className="text-gold">→</span>
            </a>
          </header>
          <div className="lg:col-span-8 aspect-[16/10] w-full overflow-hidden border border-border bg-card">
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
    </div>
  );
}