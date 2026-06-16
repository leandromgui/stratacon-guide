import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/segmentos/pendencias-fiscais")({
  head: () => ({
    meta: [
      { title: "Empresas com Pendências Fiscais | Contabilidade Especializada DCON" },
      { name: "description", content: "Contabilidade para empresas com pendências fiscais e dívidas. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:title", content: "Empresas com Pendências Fiscais | Contabilidade Especializada DCON" },
      { property: "og:description", content: "Contabilidade para empresas com pendências fiscais e dívidas. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:url", content: "/segmentos/pendencias-fiscais" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/pendencias-fiscais" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para empresas com pendências fiscais e dívidas"
      
      intent="empresa com dívida fiscal, regularizar Receita Federal"
      observation="Dor extrema — alta conversão."
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
