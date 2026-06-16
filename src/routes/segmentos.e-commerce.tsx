import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/segmentos/e-commerce")({
  head: () => ({
    meta: [
      { title: "E-commerce e Marketplaces | Contabilidade Especializada DCON" },
      { name: "description", content: "Contabilidade para e-commerce, marketplaces e operações digitais. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:title", content: "E-commerce e Marketplaces | Contabilidade Especializada DCON" },
      { property: "og:description", content: "Contabilidade para e-commerce, marketplaces e operações digitais. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:url", content: "/segmentos/e-commerce" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/e-commerce" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para e-commerce, marketplaces e operações digitais"
      
      intent="contabilidade para e-commerce, ICMS marketplace, DIFAL"
      observation="FAQ + comparativos por estado."
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      sections={[
      { h2: "Particularidades tributárias e contábeis", h3: ["[preencher]"] },
      { h2: "Riscos comuns no segmento", h3: ["[preencher]"] },
      { h2: "Como a DCON atua neste segmento", h3: ["[preencher]"] },
      { h2: "Casos e exemplos", h3: ["[preencher]"] },
      { h2: "Perguntas frequentes", h3: ["[preencher]"] },
      ]}
    />
  );
}
