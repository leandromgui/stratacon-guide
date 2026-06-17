import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/segmentos/tecnologia-startups")({
  head: () => ({
    meta: [
      { title: "Tecnologia e Startups | Contabilidade Especializada DCON" },
      { name: "description", content: "Contabilidade para empresas de tecnologia, SaaS e startups. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:title", content: "Tecnologia e Startups | Contabilidade Especializada DCON" },
      { property: "og:description", content: "Contabilidade para empresas de tecnologia, SaaS e startups. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:url", content: "/segmentos/tecnologia-startups" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/tecnologia-startups" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para empresas de tecnologia, SaaS e startups"
      
      intent="contabilidade startup, contabilidade SaaS, Lei do Bem"
      observation="Cluster forte para captação."
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
