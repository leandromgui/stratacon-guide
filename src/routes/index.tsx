import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Contabilidade Consultiva em Goiânia | DCON Contábil" },
      { name: "description", content: "DCON: contabilidade consultiva em Goiânia para empresas que querem decidir com segurança fiscal, tributária e patrimonial. Atendimento presencial e online." },
      { property: "og:title", content: "Contabilidade Consultiva em Goiânia | DCON Contábil" },
      { property: "og:description", content: "DCON: contabilidade consultiva em Goiânia para empresas que querem decidir com segurança fiscal, tributária e patrimonial. Atendimento presencial e online." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const blocks: Array<{ h2: string; lead: string; h3: { title: string; body: string }[] }> = [
  {
    h2: "Por que sua contabilidade precisa ir além das guias",
    lead: "Cumprir prazo é o mínimo. Decisão segura exige leitura técnica do que está sendo declarado.",
    h3: [
      { title: "Riscos invisíveis", body: "Erro de classificação fiscal, ST e DIFAL costumam aparecer só na autuação." },
      { title: "O custo do erro fiscal", body: "Multa, juros e perda de oportunidade superam em muito qualquer economia inicial." },
      { title: "Decisão sem dado é risco", body: "Sem relatório gerencial confiável, o sócio decide no instinto — e paga caro." },
    ],
  },
  {
    h2: "Como a DCON atua",
    lead: "Quatro etapas que transformam contabilidade em informação útil para decidir.",
    h3: [
      { title: "Diagnóstico técnico", body: "Antes de qualquer entrega, mapeamos o que está exposto." },
      { title: "Estruturação", body: "Regime, CNAE, sócios e processos ajustados à operação real." },
      { title: "Rotina auditável", body: "Calendário fiscal, fechamento revisado e relatórios padronizados." },
      { title: "Acompanhamento consultivo", body: "Reuniões periódicas com leitura do que o número está dizendo." },
    ],
  },
  {
    h2: "Soluções contábeis, fiscais e tributárias",
    lead: "Da rotina obrigatória às decisões de maior impacto patrimonial.",
    h3: [
      { title: "Contabilidade Empresarial", body: "Escrituração, balanços e relatórios entregues com revisão técnica." },
      { title: "Planejamento Tributário", body: "Comparativo de regimes com fundamento legal e cenários reais." },
      { title: "Regularização Fiscal", body: "Saída de pendências com plano e parcelamentos adequados." },
      { title: "Holding e Patrimônio", body: "Estrutura patrimonial e sucessão dentro da lei." },
    ],
  },
  {
    h2: "Segmentos atendidos",
    lead: "Conhecimento específico por vertical — não tratamos todo cliente igual.",
    h3: [
      { title: "Médicos e clínicas", body: "PJ médica, sociedade médica e equiparação hospitalar." },
      { title: "E-commerce", body: "DIFAL, ICMS-ST e operação multiestadual sob controle." },
      { title: "Construção civil e SPEs", body: "RET, patrimônio de afetação e SPE por obra." },
      { title: "Holdings", body: "Estrutura patrimonial e familiar com base técnica." },
      { title: "Tecnologia e startups", body: "SaaS, ISS, equity e Lei do Bem." },
    ],
  },
  {
    h2: "Diagnóstico fiscal e contábil",
    lead: "Entrega técnica em até 7 dias úteis com plano de ação acionável.",
    h3: [
      { title: "O que avaliamos", body: "Fiscal, contábil, tributário, trabalhista e societário." },
      { title: "Quando solicitar", body: "Troca de contador, crescimento ou pendência fiscal." },
      { title: "Como funciona", body: "Coleta, análise técnica e devolutiva consultiva." },
    ],
  },
  {
    h2: "Conteúdos para empresários",
    lead: "Material técnico escrito para quem decide, não só para quem opera.",
    h3: [
      { title: "Planejamento tributário", body: "Cenários, regimes e estruturas explicados com base." },
      { title: "Regimes tributários", body: "Simples, Presumido e Real comparados sem floreio." },
      { title: "Holding e sucessão", body: "O que funciona, o que é mito e o que ninguém te conta." },
    ],
  },
  {
    h2: "Fale com a DCON",
    lead: "Atendimento presencial em Goiânia e online em todo o Brasil.",
    h3: [
      { title: "Goiânia", body: "Reuniões presenciais com o responsável técnico." },
      { title: "Atendimento online", body: "Videoconferência agendada para empresas de outras cidades." },
      { title: "WhatsApp e e-mail", body: "Canais diretos para clientes e novos contatos." },
    ],
  },
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
            <p className="mt-3 max-w-3xl text-muted-foreground">{b.lead}</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {b.h3.map((h) => (
                <li key={h.title} className="rounded-md border border-border bg-card p-4 text-sm">
                  <h3 className="font-medium">{h.title}</h3>
                  <p className="mt-1.5 text-muted-foreground text-[13px] leading-relaxed">{h.body}</p>
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
