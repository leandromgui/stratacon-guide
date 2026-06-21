import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { FAQ, faqJsonLd, serviceJsonLd, type FAQItem } from "../components/FAQ";
import { LeadCaptureForm } from "../components/LeadCaptureForm";

const faqs: FAQItem[] = [
  { q: "Como se calcula o valuation de uma empresa?", a: "Os métodos mais usados são DCF (fluxo de caixa descontado), múltiplos de EBITDA/receita e avaliação patrimonial. A escolha depende do setor, do estágio e do propósito (venda, entrada/saída de sócio, sucessão)." },
  { q: "Faturamento alto é sinal de lucro?", a: "Não. Empresa pode crescer em faturamento e perder dinheiro ao mesmo tempo. O que importa é margem de contribuição, ponto de equilíbrio, Curva ABC e rentabilidade por cliente/produto." },
  { q: "Quais KPIs todo empresário deveria acompanhar?", a: "Margem bruta e líquida, EBITDA, ponto de equilíbrio, inadimplência, ticket médio, LTV, CAC, rentabilidade por cliente, indicadores tributários e fluxo de caixa." },
  { q: "Como definir preço de venda corretamente?", a: "Considerar custos, despesas fixas, tributos, comissões, frete, cartão, inadimplência e margem desejada — junto com Curva ABC e margem de contribuição." },
];

export const Route = createFileRoute("/solucoes/valuation-kpis")({
  head: () => ({
    meta: [
      { title: "Valuation, KPIs e Precificação para Empresas | DCON" },
      { name: "description", content: "Empresa não vale apenas pelo faturamento. Vale pela capacidade de gerar caixa, sustentar resultado e reduzir riscos." },
      { property: "og:title", content: "Valuation, KPIs e Precificação para Empresas | DCON" },
      { property: "og:description", content: "Valuation, DRE gerencial, KPIs, Curva ABC, LTV/CAC, margem e precificação técnica." },
      { property: "og:url", content: "/solucoes/valuation-kpis" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/valuation-kpis" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Início","item":"/"},{"@type":"ListItem","position":2,"name":"Soluções","item":"/solucoes"},{"@type":"ListItem","position":3,"name":"Valuation e KPIs","item":"/solucoes/valuation-kpis"}]}) },
      { type: "application/ld+json", children: serviceJsonLd({ name: "Valuation, KPIs e Precificação", description: "Avaliação de empresas, DRE gerencial, indicadores e precificação técnica.", url: "/solucoes/valuation-kpis" }) },
      { type: "application/ld+json", children: faqJsonLd(faqs) },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Solução"
      h1="Valuation, KPIs e precificação para crescer com lucro"
      intro="Empresa que não mede margem, Curva ABC e preço mínimo pode crescer em faturamento e perder dinheiro ao mesmo tempo. A DCON estrutura indicadores e avaliação técnica."
      intent="valuation empresa, KPIs contábeis, precificação técnica"
      ctaPrimary={{ label: "Medir valor da minha empresa", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      pillarKey="valuation-kpis"
      sections={[
        { h2: "Valuation", h3: [
          { title: "Métodos", body: "DCF, múltiplos, EBITDA, receita recorrente, LTV, CAC, churn, fluxo de caixa futuro, carteira de clientes e risco." },
          { title: "Aplicações", body: "Venda de empresa, entrada e saída de sócios, sucessão, captação e benchmarking estratégico." },
        ]},
        { h2: "KPIs", h3: [
          { title: "Indicadores essenciais", body: "Faturamento, margem, lucro, DRE gerencial, ponto de equilíbrio, inadimplência, produtividade, rentabilidade por cliente, dashboard e indicadores tributários." },
        ]},
        { h2: "Precificação", h3: [
          { title: "Formação técnica de preço", body: "Margem de contribuição, Curva ABC, markup, preço mínimo, impostos, comissões, frete, cartão, inadimplência e lucro esperado." },
        ]},
      ]}
    >
      <FAQ items={faqs} />
      <LeadCaptureForm page="solucoes" />
    </PageScaffold>
  );
}