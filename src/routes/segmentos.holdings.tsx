import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/segmentos/holdings")({
  head: () => ({
    meta: [
      { title: "Holdings | Contabilidade Especializada DCON" },
      { name: "description", content: "Contabilidade para holdings familiares e patrimoniais. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:title", content: "Holdings | Contabilidade Especializada DCON" },
      { property: "og:description", content: "Contabilidade para holdings familiares e patrimoniais. DCON Serviços Contábeis — atendimento consultivo em Goiânia e online." },
      { property: "og:url", content: "/segmentos/holdings" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/holdings" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para holdings familiares e patrimoniais"
      intro="Contabilidade técnica desenhada para a realidade tributária e operacional de holdings."
      intent="contabilidade holding, holding familiar Goiânia"
      observation="Ticket alto, intenção qualificada."
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      sections={[
      { h2: "Particularidades da holding", h3: [{"title":"Patrimonial × familiar","body":"Cada tipo serve a um objetivo diferente."},{"title":"Tributação dos aluguéis","body":"Pessoa jurídica versus pessoa física — análise técnica."},{"title":"Distribuição de lucros","body":"Mecânica de pagamento aos sócios."}] },
      { h2: "Riscos e mitos", h3: [{"title":"Não é blindagem mágica","body":"Não protege contra fraude ou má-fé."},{"title":"ITCMD e ITBI","body":"Avaliar antes de qualquer transferência."},{"title":"Estrutura sem patrimônio","body":"Vira custo sem benefício."}] },
      { h2: "Como a DCON atua", h3: [{"title":"Avaliação de viabilidade","body":"Análise patrimonial e familiar antes de constituir."},{"title":"Estruturação técnica","body":"Tipo societário, cláusulas e regime."},{"title":"Operação contínua","body":"Rotina contábil consultiva da holding."}] },
      { h2: "Para quem é indicado", h3: [{"title":"Famílias com patrimônio relevante","body":"Imóveis, participações e ativos significativos."},{"title":"Sócios com várias empresas","body":"Quando faz sentido concentrar."},{"title":"Sucessão em vista","body":"Quem quer organizar a transição em vida."}] },
      { h2: "Perguntas frequentes", h3: [{"title":"A partir de quanto vale?","body":"Avaliamos no diagnóstico patrimonial."},{"title":"Cônjuge precisa entrar?","body":"Depende do regime de bens e do objetivo."},{"title":"Holding paga menos imposto sempre?","body":"Não. Depende da operação."}] },
      ]}
    />
  );
}
