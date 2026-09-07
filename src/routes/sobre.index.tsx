import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";

export const Route = createFileRoute("/sobre/")({
  head: () => ({
    ...buildSeoHead({
      title: "Sobre a DCON | Contabilidade de Autoridade em Goiânia",
      description: "Conheça a DCON Serviços Contábeis: contabilidade consultiva técnica em Goiânia, referência em planejamento tributário e regularização fiscal.",
      canonical: "/sobre",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            LEANDRO_PERSON_JSONLD,
            {
              "@type": "AboutPage",
              "@id": `${SITE_URL}/sobre#page`,
              url: `${SITE_URL}/sobre`,
              name: "Sobre a DCON Serviços Contábeis",
              about: { "@id": `${SITE_URL}/#organization` },
              author: { "@id": `${SITE_URL}/sobre/leandro#leandro` },
              reviewedBy: { "@id": `${SITE_URL}/sobre/leandro#leandro` },
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Sobre", item: `${SITE_URL}/sobre` },
          ],
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Sobre"
      h1="A DCON Serviços Contábeis"
      intro="Somos uma contabilidade consultiva técnica em Goiânia. Atuamos como o time fiscal, tributário e societário da sua empresa."
      intent="DCON contabilidade, contabilidade consultiva técnica, escritório contábil Goiânia"
      observation="Página-âncora de E-E-A-T. Linka para Leandro, Metodologia e Soluções."
      ctaPrimary={{ label: "Falar com a DCON", to: "/contato" }}
      ctaSecondary={{ label: "Conhecer a metodologia", to: "/sobre/metodologia" }}
      sections={[
      { h2: "Contabilidade com visão técnica, fiscal e empresarial", lead: "Atuamos onde a contabilidade tradicional para de pensar: na decisão do empresário.", h3: [{"title":"Origem da DCON","body":"Construída para empresas que precisam de respostas técnicas, não apenas guias entregues no prazo."},{"title":"Propósito","body":"Reduzir risco fiscal e dar ao empresário informação clara para decidir com segurança."},{"title":"Posicionamento consultivo","body":"Não vendemos preço baixo. Entregamos visão tributária, societária e contábil integrada."}] },
      { h2: "Liderança técnica", lead: "A liderança técnica da DCON é conduzida por Leandro Matsuoka Guimarães, contador registrado no CRC-GO sob nº 16.395/O-9, sócio da DCON Serviços Contábeis e profissional com atuação consolidada em contabilidade empresarial, consultoria tributária, controladoria, finanças corporativas e reorganização societária.", h3: [{"title":"Formação multidisciplinar","body":"Formado em Ciências Contábeis, bacharel em Direito e pós-graduado em Finanças Corporativas. Essa base permite leitura integrada da empresa: contábil, fiscal, jurídica, financeira, societária e patrimonial."},{"title":"Atuação técnica","body":"Planejamento tributário, recuperação de créditos, análise de regimes, regularização, defesas administrativas, SPED, Simples Nacional, Lucro Presumido, Lucro Real, estruturação de holdings, indicadores empresariais e suporte estratégico para decisões de crescimento, sucessão e reorganização."},{"title":"Responsabilidade técnica","body":"Mais que assinatura contábil: o responsável técnico assegura que cada entrega tenha método, documentação, fundamento, rastreabilidade e coerência entre a operação real, as notas fiscais, a escrituração, as obrigações acessórias e as decisões da administração."}] },
      { h2: "Responsabilidade técnica e CRC", h3: [{"title":"CRC-GO 1202/O-5","body":"DCON Serviços Contábeis atua sob registro CRC-GO 1202/O-5, com responsabilidade técnica registrada e equipe sob supervisão direta do responsável."},{"title":"Equipe técnica","body":"Profissionais formados em áreas fiscais, contábeis e trabalhistas, com revisão cruzada de processos."},{"title":"Padrões de qualidade","body":"Procedimentos auditáveis, controle de prazos e revisão analítica antes de cada entrega."}] },
      { h2: "Nossa forma de atuação", h3: [{"title":"Diagnóstico inicial","body":"Toda relação começa por um diagnóstico técnico do que está sendo pago, declarado e registrado."},{"title":"Rotina contábil estruturada","body":"Calendário fiscal, fechamento mensal e relatórios entregues sem cobrança do cliente."},{"title":"Reuniões estratégicas","body":"Encontros periódicos para revisar regime, sócios, distribuição e decisões societárias."}] },
      { h2: "Para quem a DCON é indicada", h3: [{"title":"Empresas em crescimento","body":"Negócios que precisam profissionalizar a gestão fiscal antes de virar um problema."},{"title":"Empresas com complexidade tributária","body":"Operações com ICMS-ST, DIFAL, lucro presumido, lucro real ou múltiplos CNPJs."},{"title":"Empresários que querem decidir com dados","body":"Quem entende que contabilidade barata costuma custar caro."}] },
      ]}
    />
  );
}
