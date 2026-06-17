import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/segmentos/medicos-clinicas")({
  head: () => ({
    meta: [
      { title: "Médicos e Clínicas | Contabilidade Especializada DCON" },
      { name: "description", content: "Contabilidade especializada para médicos e clínicas. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:title", content: "Médicos e Clínicas | Contabilidade Especializada DCON" },
      { property: "og:description", content: "Contabilidade especializada para médicos e clínicas. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:url", content: "/segmentos/medicos-clinicas" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/medicos-clinicas" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade especializada para médicos e clínicas"
      
      intent="contabilidade para médicos Goiânia, contador para clínica médica"
      observation="Schema MedicalBusiness + FAQPage."
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
