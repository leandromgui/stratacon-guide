import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/segmentos/e-commerce")({
  head: () => ({
    meta: [
      { title: "Contabilidade para E-commerce em Goiânia | DCON" },
      { name: "description", content: "Contabilidade para e-commerce em Goiânia: ICMS-ST, DIFAL, marketplaces e conciliação de gateways. Especialistas DCON em lojas virtuais." },
      { property: "og:title", content: "Contabilidade para E-commerce em Goiânia | DCON" },
      { property: "og:description", content: "Contabilidade para e-commerce em Goiânia: ICMS-ST, DIFAL, marketplaces e conciliação de gateways. Especialistas DCON em lojas virtuais." },
      { property: "og:url", content: "/segmentos/e-commerce" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/e-commerce" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "/"}, {"@type": "ListItem", "position": 2, "name": "Segmentos", "item": "/segmentos"}, {"@type": "ListItem", "position": 3, "name": "E-commerce", "item": "/segmentos/e-commerce"}]}),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para e-commerce, marketplaces e operações digitais"
      intro="Contabilidade técnica desenhada para a realidade tributária e operacional de e-commerce e marketplaces."
      intent="contabilidade para e-commerce, ICMS marketplace, DIFAL"
      observation="FAQ + comparativos por estado."
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      pillarKey="e-commerce"
      sections={[
        { h2: "ICMS-ST, DIFAL e cadastro fiscal", lead: "No e-commerce o tributo nasce no cadastro de produto e na regra do destino — sem disciplina cadastral, cada venda vira passivo silencioso.", h3: [
          { title: "ICMS-ST", body: "ST por produto, MVA, convênio estadual e base efetiva — recuperação de ST paga a maior em até 5 anos quando há lastro." },
          { title: "DIFAL", body: "Partilha entre estados, GNRE, Simples Nacional, consumidor final e autorregularização tratados antes da autuação." },
          { title: "Marketplace x loja própria", body: "Mercado Livre, Shopee, Amazon, Shopify e Nuvemshop — quem é o vendedor jurídico, quem retém, quem repassa e como a nota é emitida." },
        ]},
        { h2: "Logística, estoque e SPED", h3: [
          { title: "CD em outro estado", body: "Transferência entre estabelecimentos, ICMS de origem e cálculo correto da base impactam preço final e crédito do cliente PJ." },
          { title: "Estoque conciliado", body: "Estoque físico x escritural conferido — diferença gera presunção de venda sem nota e tributação retroativa." },
          { title: "Perdas e quebras", body: "Documentação técnica para reconhecer perda dentro da legislação e não pagar imposto sobre mercadoria que não foi vendida." },
        ]},
        { h2: "Regime tributário e margem", h3: [
          { title: "Simples x Presumido x Real", body: "Margem, frete, marketing, taxa de marketplace e crédito de PIS/Cofins simulados antes da escolha — Simples nem sempre é o mais econômico." },
          { title: "Sublimite estadual", body: "Faturamento monitorado para evitar mudança automática de regime no meio do ano e perda de benefício estadual." },
        ]},
        { h2: "Reforma Tributária no e-commerce", h3: [
          { title: "IBS/CBS na NF-e e NFC-e", body: "Documentos fiscais passam a carregar os novos tributos — a nota pode ser autorizada e ainda assim estar fiscalmente incorreta." },
          { title: "Decisão de 2027", body: "Setembro/2026 é mês de decisão para B2B do Simples: competitividade, crédito para clientes e preço simulados antes do regime regular de IBS/CBS." },
        ]},
      ]}
    />
  );
}
