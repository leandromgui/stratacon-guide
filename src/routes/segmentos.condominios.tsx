import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/segmentos/condominios")({
  head: () => ({
    meta: [
      { title: "Condomínios | Contabilidade Especializada DCON" },
      { name: "description", content: "Contabilidade para condomínios residenciais e comerciais. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:title", content: "Condomínios | Contabilidade Especializada DCON" },
      { property: "og:description", content: "Contabilidade para condomínios residenciais e comerciais. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:url", content: "/segmentos/condominios" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/condominios" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para condomínios residenciais e comerciais"
      
      intent="contabilidade condomínio Goiânia, prestação de contas"
      observation="Nicho local."
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
