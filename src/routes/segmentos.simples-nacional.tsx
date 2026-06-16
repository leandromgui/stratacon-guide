import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/segmentos/simples-nacional")({
  head: () => ({
    meta: [
      { title: "Simples Nacional | Contabilidade Especializada DCON" },
      { name: "description", content: "Contabilidade para empresas no Simples Nacional. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:title", content: "Simples Nacional | Contabilidade Especializada DCON" },
      { property: "og:description", content: "Contabilidade para empresas no Simples Nacional. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:url", content: "/segmentos/simples-nacional" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/simples-nacional" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para empresas no Simples Nacional"
      
      intent="Simples Nacional 2026, anexo Simples Nacional"
      observation="Volume de busca alto."
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
