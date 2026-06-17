import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/segmentos/imobiliarias")({
  head: () => ({
    meta: [
      { title: "Imobiliárias | Contabilidade Especializada DCON" },
      { name: "description", content: "Contabilidade para imobiliárias e administradoras. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:title", content: "Imobiliárias | Contabilidade Especializada DCON" },
      { property: "og:description", content: "Contabilidade para imobiliárias e administradoras. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:url", content: "/segmentos/imobiliarias" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/imobiliarias" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para imobiliárias e administradoras"
      
      intent="contabilidade imobiliária, administradora de imóveis"
      observation="Ponte para Holding."
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
