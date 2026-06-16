import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/segmentos/odontologia")({
  head: () => ({
    meta: [
      { title: "Odontologia | Contabilidade Especializada DCON" },
      { name: "description", content: "Contabilidade para dentistas e clínicas odontológicas. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:title", content: "Odontologia | Contabilidade Especializada DCON" },
      { property: "og:description", content: "Contabilidade para dentistas e clínicas odontológicas. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:url", content: "/segmentos/odontologia" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/odontologia" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para dentistas e clínicas odontológicas"
      
      intent="contabilidade para dentistas, clínica odontológica"
      observation="Sub-cluster de Saúde."
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
