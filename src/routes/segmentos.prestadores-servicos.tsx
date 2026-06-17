import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/segmentos/prestadores-servicos")({
  head: () => ({
    meta: [
      { title: "Prestadores de Serviços | Contabilidade Especializada DCON" },
      { name: "description", content: "Contabilidade para prestadores de serviços e consultorias. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:title", content: "Prestadores de Serviços | Contabilidade Especializada DCON" },
      { property: "og:description", content: "Contabilidade para prestadores de serviços e consultorias. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:url", content: "/segmentos/prestadores-servicos" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/prestadores-servicos" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para prestadores de serviços e consultorias"
      
      intent="contabilidade prestadores de serviços, ISS Goiânia"
      observation="ISS e regimes de serviço."
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
