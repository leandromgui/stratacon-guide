import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/segmentos/comercio")({
  head: () => ({
    meta: [
      { title: "Contabilidade para Comércio em Goiânia | DCON" },
      { name: "description", content: "Contabilidade para comércio em Goiânia: ICMS, substituição tributária, SPED Fiscal e gestão de estoque com a DCON Contábil." },
      { property: "og:title", content: "Contabilidade para Comércio em Goiânia | DCON" },
      { property: "og:description", content: "Contabilidade para comércio em Goiânia: ICMS, substituição tributária, SPED Fiscal e gestão de estoque com a DCON Contábil." },
      { property: "og:url", content: "/segmentos/comercio" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/comercio" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "/"}, {"@type": "ListItem", "position": 2, "name": "Segmentos", "item": "/segmentos"}, {"@type": "ListItem", "position": 3, "name": "Comércio", "item": "/segmentos/comercio"}]}),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para comércio varejista e atacadista"
      intro="Contabilidade técnica desenhada para a realidade tributária e operacional de comércio."
      intent="contabilidade comércio Goiânia, ICMS-ST varejo"
      observation="ICMS-ST e DIFAL."
      ctaPrimary={{ label: "Solicitar diagnóstico técnico inicial", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      sections={[
        { h2: "ICMS, ST e DIFAL", lead: "No comércio, o tributo nasce no cadastro do produto — NCM, CST, CFOP e CEST mal aplicados viram autuação ou crédito perdido.", h3: [
          { title: "ICMS-ST", body: "Substituição tributária revisada por produto, MVA, convênio estadual e base efetiva — ST paga a maior pode ser recuperada nos últimos 5 anos." },
          { title: "DIFAL", body: "Operações interestaduais para consumidor final exigem GNRE, partilha entre estados e tratamento específico no Simples Nacional." },
          { title: "Cadastro de mercadorias", body: "NCM, CST, CEST e código de benefício revisados antes da emissão — erro na nota não se corrige na apuração." },
        ]},
        { h2: "Regime tributário e margem", h3: [
          { title: "Simples x Presumido x Real", body: "Margem, estoque, crédito de ICMS, PIS/Cofins e folha simulados antes da escolha — Simples nem sempre é o mais econômico no varejo." },
          { title: "Benefícios estaduais", body: "Crédito presumido, crédito outorgado e regimes especiais analisados por ato concessivo, prazo e contrapartidas — sem dossiê o benefício vira passivo." },
        ]},
        { h2: "Reforma Tributária no comércio", h3: [
          { title: "Fase de teste 2026", body: "NF-e e NFC-e passam a carregar IBS e CBS — a nota pode ser autorizada e ainda assim estar fiscalmente incorreta." },
          { title: "Decisão de 2027", body: "Empresas B2B do Simples precisam simular competitividade, crédito para clientes e preço antes de optar pelo regime regular de IBS/CBS." },
        ]},
        { h2: "Estoque, perdas e SPED Fiscal", h3: [
          { title: "Inventário e conciliação", body: "Estoque físico x escritural conciliados — diferença gera presunção de venda sem nota e tributação retroativa." },
          { title: "Perdas e quebras", body: "Documentação técnica para reconhecer perda dentro da legislação e não pagar imposto sobre mercadoria que não foi vendida." },
        ]},
      ]}
    />
  );
}
