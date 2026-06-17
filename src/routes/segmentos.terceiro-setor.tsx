import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/segmentos/terceiro-setor")({
  head: () => ({
    meta: [
      { title: "Terceiro Setor | Contabilidade Especializada DCON" },
      { name: "description", content: "Contabilidade para OSCs, associações e fundações. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:title", content: "Terceiro Setor | Contabilidade Especializada DCON" },
      { property: "og:description", content: "Contabilidade para OSCs, associações e fundações. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:url", content: "/segmentos/terceiro-setor" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/terceiro-setor" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para OSCs, associações e fundações"
      
      intent="contabilidade terceiro setor, OSC, OSCIP"
      observation="Imunidade e prestação de contas."
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
