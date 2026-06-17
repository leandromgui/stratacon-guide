import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/segmentos/holdings")({
  head: () => ({
    meta: [
      { title: "Holdings | Contabilidade Especializada DCON" },
      { name: "description", content: "Contabilidade para holdings familiares e patrimoniais. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:title", content: "Holdings | Contabilidade Especializada DCON" },
      { property: "og:description", content: "Contabilidade para holdings familiares e patrimoniais. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:url", content: "/segmentos/holdings" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/holdings" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para holdings familiares e patrimoniais"
      
      intent="contabilidade holding, holding familiar Goiânia"
      observation="Ticket alto, intenção qualificada."
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
