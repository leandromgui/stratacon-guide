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
      sections={[
      { h2: "Particularidades do e-commerce", h3: [{"title":"DIFAL","body":"Diferencial de alíquota entre estados, com regra que muda conforme o destino."},{"title":"ICMS-ST","body":"Substituição tributária no varejo digital — fonte clássica de erro."},{"title":"Marketplace × loja própria","body":"Tributação muda conforme quem é o vendedor jurídico."}] },
      { h2: "Operações típicas", h3: [{"title":"Mercado Livre, Shopee e Amazon","body":"Repasse, retenção e nota fiscal sob regras específicas."},{"title":"Shopify, Nuvemshop e loja própria","body":"Operação direta com cliente final."},{"title":"Logística e estoque","body":"Centros de distribuição em outros estados mudam a tributação."}] },
      { h2: "Riscos comuns", h3: [{"title":"DIFAL não recolhido","body":"Autuação retroativa com juros e multa."},{"title":"ST paga duas vezes","body":"Falha de identificação na nota de entrada."},{"title":"Regime mal escolhido","body":"Simples nem sempre é o mais econômico para e-commerce."}] },
      { h2: "Como a DCON atua", h3: [{"title":"Diagnóstico fiscal digital","body":"Levantamento por estado, marketplace e tipo de operação."},{"title":"Rotina fiscal saneada","body":"CFOP, CST e NCM revisados antes da apuração."},{"title":"Revisão de regime","body":"Modelagem técnica de Simples × Presumido para o e-commerce."}] },
      { h2: "Perguntas frequentes", h3: [{"title":"Vendo só por marketplace, preciso de contador?","body":"Sim — a nota é sua, o risco é seu."},{"title":"Atendem operação multiestadual?","body":"Sim, é o nosso dia a dia."},{"title":"Recuperam ST paga a maior?","body":"Avaliamos na rotina e na recuperação."}] },
      ]}
    />
  );
}
