import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/segmentos/produtor-rural")({
  head: () => ({
    meta: [
      { title: "Produtor Rural | Contabilidade Especializada DCON" },
      { name: "description", content: "Contabilidade para produtor rural pessoa física e jurídica. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:title", content: "Produtor Rural | Contabilidade Especializada DCON" },
      { property: "og:description", content: "Contabilidade para produtor rural pessoa física e jurídica. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:url", content: "/segmentos/produtor-rural" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/produtor-rural" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para produtor rural pessoa física e jurídica"
      
      intent="contabilidade produtor rural, contador agronegócio"
      observation="ITR, Funrural, LCDPR."
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
