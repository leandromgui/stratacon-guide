import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/segmentos/franquias-redes")({
  head: () => ({
    meta: [
      { title: "Franquias e Redes | Contabilidade Especializada DCON" },
      { name: "description", content: "Contabilidade para franquias e redes de unidades. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:title", content: "Franquias e Redes | Contabilidade Especializada DCON" },
      { property: "og:description", content: "Contabilidade para franquias e redes de unidades. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:url", content: "/segmentos/franquias-redes" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/franquias-redes" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para franquias e redes de unidades"
      
      intent="contabilidade franquia, contabilidade rede de lojas"
      observation="Operações multi-CNPJ."
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
