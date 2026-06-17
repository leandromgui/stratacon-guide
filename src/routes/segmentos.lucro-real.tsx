import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/segmentos/lucro-real")({
  head: () => ({
    meta: [
      { title: "Empresas no Lucro Real | DCON Goiânia" },
      { name: "description", content: "Contabilidade para empresas no Lucro Real em Goiânia: ECF, ECD, créditos de PIS e Cofins e planejamento tributário com a DCON." },
      { property: "og:title", content: "Empresas no Lucro Real | DCON Goiânia" },
      { property: "og:description", content: "Contabilidade para empresas no Lucro Real em Goiânia: ECF, ECD, créditos de PIS e Cofins e planejamento tributário com a DCON." },
      { property: "og:url", content: "/segmentos/lucro-real" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/lucro-real" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "/"}, {"@type": "ListItem", "position": 2, "name": "Segmentos", "item": "/segmentos"}, {"@type": "ListItem", "position": 3, "name": "Lucro Real", "item": "/segmentos/lucro-real"}]}),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para empresas no Lucro Real"
      intro="Contabilidade técnica desenhada para a realidade tributária e operacional de lucro real."
      intent="Lucro Real obrigatório, apuração trimestral anual"
      observation="Ticket alto."
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      sections={[
      { h2: "Particularidades tributárias e contábeis", h3: [{"title":"Tributação específica","body":"Regras fiscais que afetam diretamente operações de lucro real."},{"title":"Obrigações próprias","body":"Acessórias e declarações típicas deste segmento."},{"title":"Risco mais comum","body":"O erro que mais vemos neste tipo de operação."}] },
      { h2: "Riscos comuns no segmento", h3: [{"title":"Enquadramento errado","body":"Regime que parece econômico mas custa mais no fim."},{"title":"Falha de classificação fiscal","body":"CFOP, CST e NCM mal aplicados."},{"title":"Passivo trabalhista","body":"Vínculos mal estruturados que viram dor mais tarde."}] },
      { h2: "Como a DCON atua neste segmento", h3: [{"title":"Diagnóstico específico","body":"Revisamos a operação real do segmento antes de qualquer mudança."},{"title":"Rotina técnica","body":"Calendário, conferência e relatórios desenhados para o setor."},{"title":"Apoio consultivo","body":"Reuniões com leitura do que o número está dizendo."}] },
      { h2: "Casos e exemplos", h3: [{"title":"Caso típico 1","body":"[preencher com situação real anonimizada]"},{"title":"Caso típico 2","body":"[preencher com situação real anonimizada]"}] },
      { h2: "Perguntas frequentes", h3: [{"title":"Atendem só em Goiânia?","body":"Atendemos presencialmente em Goiânia e online em todo o Brasil."},{"title":"Trocar de contador agora vale a pena?","body":"Sim, se a contabilidade atual não dá visão técnica do segmento."},{"title":"Já posso pedir diagnóstico?","body":"Sim, em qualquer fase da operação."}] },
      ]}
    />
  );
}
