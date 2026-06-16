import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/segmentos/lucro-real")({
  head: () => ({
    meta: [
      { title: "Lucro Real | Contabilidade Especializada DCON" },
      { name: "description", content: "Contabilidade para empresas no Lucro Real. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:title", content: "Lucro Real | Contabilidade Especializada DCON" },
      { property: "og:description", content: "Contabilidade para empresas no Lucro Real. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:url", content: "/segmentos/lucro-real" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/lucro-real" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para empresas no Lucro Real"
      
      intent="Lucro Real obrigatório, apuração trimestral anual"
      observation="Ticket alto."
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
