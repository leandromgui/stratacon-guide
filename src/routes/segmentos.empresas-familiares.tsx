import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/segmentos/empresas-familiares")({
  head: () => ({
    meta: [
      { title: "Empresas Familiares | Contabilidade Especializada DCON" },
      { name: "description", content: "Contabilidade para empresas familiares com sucessão e governança. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:title", content: "Empresas Familiares | Contabilidade Especializada DCON" },
      { property: "og:description", content: "Contabilidade para empresas familiares com sucessão e governança. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:url", content: "/segmentos/empresas-familiares" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/empresas-familiares" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para empresas familiares com sucessão e governança"
      
      intent="contabilidade empresa familiar, sucessão patrimonial"
      observation="Pré-venda de Holding."
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
