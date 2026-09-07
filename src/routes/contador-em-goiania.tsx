import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";

const FAQ = [
  {
    q: "Quanto custa um contador em Goiânia?",
    a: "O honorário depende do regime tributário, do volume de notas, da folha de pagamento e do nível de consultoria contratado. Uma empresa de serviços no Simples Nacional tem custo bem diferente de um comércio no Lucro Real com ICMS-ST. Na DCON o valor é definido após o diagnóstico técnico inicial, com escopo escrito: o que está incluído, quais entregas são mensais e quais são pontuais.",
  },
  {
    q: "Como trocar de contador sem burocracia?",
    a: "A troca é feita por transferência de responsabilidade técnica: solicitamos os arquivos digitais (balanços, SPED, folha, procurações), conferimos o que foi entregue nos últimos períodos, apontamos pendências e assumimos as obrigações a partir de uma competência definida. Você não precisa negociar com o contador anterior — conduzimos a migração e a auditoria de abertura.",
  },
  {
    q: "Vocês atendem MEI, Simples Nacional e Lucro Presumido em Goiânia?",
    a: "Atendemos Simples Nacional, Lucro Presumido e Lucro Real, com comparativo de regimes antes de qualquer mudança. Para MEI, o foco é orientar o momento correto de migrar para ME/EPP antes do desenquadramento por faturamento ou por contratação de funcionário.",
  },
];

const JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "AccountingService"],
      "@id": `${SITE_URL}/contador-em-goiania#business`,
      name: "DCON Serviços Contábeis",
      description:
        "Contador em Goiânia com atuação consultiva: planejamento tributário, diagnóstico fiscal e responsabilidade técnica sob CRC ativo.",
      url: `${SITE_URL}/contador-em-goiania`,
      telephone: "+55-62-3223-7010",
      email: "contato@dcon.cnt.br",
      priceRange: "$$",
      areaServed: [
        { "@type": "City", name: "Goiânia" },
        { "@type": "Country", name: "Brasil" },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "R. 89-A, nº 51 — Setor Sul",
        addressLocality: "Goiânia",
        addressRegion: "GO",
        postalCode: "74093-150",
        addressCountry: "BR",
      },
      geo: { "@type": "GeoCoordinates", latitude: -16.699, longitude: -49.267 },
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      employee: { "@id": `${SITE_URL}/sobre/leandro#leandro` },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/contador-em-goiania#faq`,
      mainEntity: FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contador em Goiânia",
          item: `${SITE_URL}/contador-em-goiania`,
        },
      ],
    },
  ],
};

export const Route = createFileRoute("/contador-em-goiania")({
  head: () => ({
    ...buildSeoHead({
      title: "Contador em Goiânia | Contabilidade Consultiva - DCON",
      description:
        "Contador em Goiânia com 17+ anos de experiência. Consultoria tributária, planejamento fiscal e Método DCON. Atendimento para +300 empresas. Fale conosco.",
      canonical: "/contador-em-goiania",
    }),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(JSONLD) }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Goiânia"
      h1="Contador em Goiânia — Contabilidade Consultiva para Empresas"
      lead="Um contador que responde tecnicamente pelo que assina — e explica o impacto de cada decisão antes dela virar imposto pago a mais."
      intro="A DCON Serviços Contábeis atua em Goiânia desde 2004, sob CRC-GO 1202/O-5, com responsabilidade técnica de Leandro Matsuoka Guimarães (CRC-GO 16.395/O-9). A diferença entre uma contabilidade operacional e uma contabilidade consultiva aparece no mesmo lugar: a operacional entrega a guia calculada; a consultiva mostra por que aquele valor existe, se ele está correto e o que pode ser feito legalmente para reduzi-lo."
      breadcrumbs={[{ label: "Contador em Goiânia", to: "/contador-em-goiania" }]}
      ctaPrimary={{ label: "Solicitar diagnóstico técnico inicial", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      sections={[
        {
          h2: "Por que escolher um contador consultivo",
          lead: "Contabilidade operacional cumpre prazo. Contabilidade consultiva sustenta decisão — e é isso que muda o resultado no fim do ano.",
          h3: [
            {
              title: "Você entende o que paga",
              body: "Cada tributo é aberto por base de cálculo, alíquota e fundamento legal. Sem caixa-preta e sem ‘é assim mesmo’.",
            },
            {
              title: "Regime revisado, não herdado",
              body: "Simples, Presumido e Real comparados com números reais da sua operação — e não com o enquadramento que veio do escritório anterior.",
            },
            {
              title: "Risco identificado antes da fiscalização",
              body: "Divergência entre nota fiscal, escrituração e declaração é apontada e corrigida antes de virar autuação.",
            },
            {
              title: "Responsabilidade técnica nominal",
              body: "Há um contador responsável com CRC ativo por trás de cada parecer, retificação e tese aplicada.",
            },
          ],
        },
        {
          h2: "Serviços do contador DCON em Goiânia",
          lead: "Cada frente abaixo tem página própria, com escopo, entregáveis e prazos.",
          h3: [
            {
              title: "Planejamento tributário",
              body: "Comparativo de regimes, simulação e tese documentada — detalhado em /solucoes/planejamento-tributario.",
            },
            {
              title: "Departamento fiscal",
              body: "Apuração, SPED e obrigações acessórias sob revisão cruzada — /solucoes/departamento-fiscal.",
            },
            {
              title: "Recuperação de créditos",
              body: "Revisão dos últimos 5 anos para identificar tributo pago indevidamente — /solucoes/recuperacao-creditos-tributarios.",
            },
            {
              title: "Regularização fiscal",
              body: "Certidões, parcelamentos e retificações para liberar crédito e licitação — /solucoes/regularizacao-fiscal.",
            },
            {
              title: "Trocar de contabilidade",
              body: "Migração auditada, sem ruído com o escritório anterior — /solucoes/trocar-contabilidade.",
            },
            {
              title: "Abrir empresa em Goiânia",
              body: "CNPJ, alvará, inscrição municipal e escolha de regime — /solucoes/abrir-empresa.",
            },
          ],
        },
      ]}
      method={[
        {
          title: "Diagnóstico",
          body: "Levantamento de documentos fiscais, contábeis, societários e trabalhistas dos últimos períodos.",
        },
        {
          title: "Cruzamento",
          body: "Notas fiscais, escrituração, declarações e folha confrontadas entre si para revelar divergências.",
        },
        {
          title: "Parecer",
          body: "Relatório técnico com riscos, créditos, base legal e recomendação priorizada por impacto.",
        },
        {
          title: "Correção",
          body: "Retificações, mudança de regime, parametrização de sistema e protocolos administrativos.",
        },
        {
          title: "Monitoramento",
          body: "Acompanhamento mensal com indicadores e revisão de teses sob responsabilidade técnica permanente.",
        },
      ]}
      faq={FAQ}
      relatedLinks={[
        { label: "Escritório de contabilidade em Goiânia", to: "/escritorio-de-contabilidade-em-goiania", eyebrow: "Estrutura" },
        { label: "Liderança técnica: Leandro Matsuoka", to: "/sobre/leandro", eyebrow: "Responsável técnico" },
        { label: "Método DCON", to: "/metodo", eyebrow: "Como conduzimos" },
        { label: "Planejamento Tributário", to: "/solucoes/planejamento-tributario", eyebrow: "Solução" },
      ]}
      ctaVariant="diagnostic"
    />
  );
}
