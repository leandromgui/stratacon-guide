import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/segmentos/comercio")({
  head: () => ({
    meta: [
      { title: "Comércio | Contabilidade Especializada DCON" },
      { name: "description", content: "Contabilidade para comércio varejista e atacadista. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:title", content: "Comércio | Contabilidade Especializada DCON" },
      { property: "og:description", content: "Contabilidade para comércio varejista e atacadista. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:url", content: "/segmentos/comercio" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/comercio" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para comércio varejista e atacadista"
      
      intent="contabilidade comércio Goiânia, ICMS-ST varejo"
      observation="ICMS-ST e DIFAL."
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
