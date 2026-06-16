import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/segmentos/construcao-civil-spe")({
  head: () => ({
    meta: [
      { title: "Construção Civil e SPEs | Contabilidade Especializada DCON" },
      { name: "description", content: "Contabilidade para construtoras, incorporadoras e SPEs. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:title", content: "Construção Civil e SPEs | Contabilidade Especializada DCON" },
      { property: "og:description", content: "Contabilidade para construtoras, incorporadoras e SPEs. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:url", content: "/segmentos/construcao-civil-spe" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/construcao-civil-spe" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para construtoras, incorporadoras e SPEs"
      
      intent="contabilidade construção civil, SPE incorporação, RET 4%"
      observation="Alto valor por clique; cluster denso."
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
