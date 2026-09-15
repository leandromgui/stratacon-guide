import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { dconMethod } from "@/lib/dconMethod";

const FAQ = [
  {
    q: "A DCON atende empresas fora de Goiânia?",
    a: "Sim. A sede fica no Setor Sul de Goiânia, com atendimento presencial na capital e remoto para empresas de toda a região metropolitana — como Aparecida de Goiânia e Senador Canedo — e de todo o Brasil.",
  },
  {
    q: "Quais setores a DCON mais atende em Goiânia?",
    a: "Saúde, comércio e atacado, construção civil, serviços e tecnologia, além de holdings, produtores rurais e empresas familiares — sempre com responsável técnico nominal e revisão cruzada.",
  },
  {
    q: "Dá para trocar de contador no meio do ano fiscal?",
    a: "Sim. A transição começa com um diagnóstico de entrada que identifica pendências do escritório anterior antes da migração, sem ruído na operação.",
  },
  {
    q: "Como começo a trabalhar com a DCON?",
    a: "Pelo formulário do site ou WhatsApp. O primeiro passo é o diagnóstico técnico inicial, entregue em até 7 dias úteis, com riscos, créditos e recomendações priorizadas.",
  },
];

const JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/goiania#faq`,
      mainEntity: FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: "/" },
        { "@type": "ListItem", position: 2, name: "Contador em Goiânia", item: "/goiania" },
      ],
    },
  ],
};

export const Route = createFileRoute("/goiania")({
  head: () => ({
    ...buildSeoHead({
      title: "Contador em Goiânia | DCON Serviços Contábeis",
      description:
        "DCON é a contabilidade consultiva técnica em Goiânia para empresas que buscam liderança técnica, segurança fiscal e decisões com base em dados.",
      canonical: "/goiania",
    }),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(JSONLD) }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Goiânia"
      h1="Contador em Goiânia para empresas que precisam de visão técnica"
      intro="A DCON Serviços Contábeis atua em Goiânia desde 2004 — mais de 20 anos acompanhando empresas locais em decisões contábeis, tributárias e patrimoniais. Nossa sede fica no Setor Sul, com atendimento presencial na capital e remoto para empresas de toda a região metropolitana e de todo o Brasil. Hoje, mais de 700 clientes confiam na condução técnica da DCON, com R$ 11,5 milhões em créditos tributários recuperados nos últimos 5 anos."
      intent="contador em Goiânia, escritório contábil Goiânia, contabilidade Goiânia"
      observation="Página de SEO local. Schema LocalBusiness + NAP consistente."
      breadcrumbs={[{ label: "Contador em Goiânia", to: "/goiania" }]}
      ctaPrimary={{ label: "Solicitar diagnóstico técnico inicial", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      sections={[
        {
          h2: "Atuação em Goiânia e região metropolitana",
          h3: [
            { title: "Atendimento presencial", body: "Reuniões na capital, com responsável técnico." },
            { title: "Atendimento remoto", body: "Suporte para empresas em Aparecida, Senador Canedo e demais cidades." },
            { title: "Empresas em transição", body: "Quem quer trocar de contabilidade local com segurança." },
          ],
        },
        {
          h2: "Setores fortes em Goiânia",
          h3: [
            { title: "Saúde", body: "Clínicas, médicos e operações com plano de saúde como cliente PJ." },
            { title: "Comércio e atacado", body: "Operações com ICMS-ST e DIFAL." },
            { title: "Construção civil", body: "Construtoras, SPEs e incorporadoras." },
            { title: "Serviços e tecnologia", body: "ISS goianiense, SaaS e operações digitais." },
          ],
        },
        {
          h2: "Por que contabilidade consultiva local",
          h3: [
            { title: "Conhecimento regional", body: "Regras municipais, estaduais e benefícios fiscais locais." },
            { title: "Proximidade técnica", body: "Reunião presencial quando faz diferença." },
            { title: "Rede de parceiros", body: "Advogados, bancos e auditorias quando necessário." },
          ],
        },
        {
          h2: "Como funciona o Método DCON",
          lead: "Todo trabalho segue quatro etapas auditáveis, cada uma com responsável técnico nominal e CRC ativo.",
          h3: dconMethod,
        },
        {
          h2: "Presença em Goiânia",
          lead: "Endereço: Rua 89-A, nº 51, Setor Sul, Goiânia/GO, CEP 74093-150. Atendimento presencial e online. Responsável técnico: Leandro Matsuoka Guimarães, CRC-GO 16.395/O-9. Empresa: CRC-GO 1202/O-5.",
        },
        {
          h2: "Perguntas frequentes",
          h3: FAQ.map((f) => ({ title: f.q, body: f.a })),
        },
      ]}
      relatedLinks={[
        { label: "Escritório de contabilidade em Goiânia", to: "/escritorio-de-contabilidade-em-goiania", eyebrow: "Estrutura" },
        { label: "Contador em Goiânia — atuação consultiva", to: "/contador-em-goiania", eyebrow: "Profissional e método" },
        { label: "Método DCON", to: "/metodo", eyebrow: "Como conduzimos" },
        { label: "Contato e endereço", to: "/contato", eyebrow: "Atendimento" },
      ]}
      ctaVariant="diagnostic"
    />
  );
}
