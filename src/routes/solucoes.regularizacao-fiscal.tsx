import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/solucoes/regularizacao-fiscal")({
  head: () => ({
    meta: [
      { title: "Regularização Fiscal | DCON Serviços Contábeis" },
      { name: "description", content: "Regularização fiscal de empresas com pendências. Atendimento consultivo DCON em Goiânia e online." },
      { property: "og:title", content: "Regularização Fiscal | DCON Serviços Contábeis" },
      { property: "og:description", content: "Regularização fiscal de empresas com pendências. Atendimento consultivo DCON em Goiânia e online." },
      { property: "og:url", content: "/solucoes/regularizacao-fiscal" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/regularizacao-fiscal" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Soluções"
      h1="Regularização fiscal de empresas com pendências"
      intro="Diagnóstico de pendências, plano de regularização e parcelamentos para recolocar a empresa em conformidade."
      intent="regularizar empresa pendências fiscais, parcelamento Receita Federal"
      observation="Dor altíssima — landing dedicada."
      ctaPrimary={{ label: "Solicitar proposta", to: "/contato" }}
      ctaSecondary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      sections={[
      { h2: "Diagnóstico de pendências", h3: [{"title":"Mapa de débitos","body":"Levantamento federal, estadual e municipal em um só relatório."},{"title":"CNDs e certidões","body":"Identificação clara do que impede certidão negativa."},{"title":"Risco de bloqueio","body":"Avaliação de exposição a penhora, protesto e bloqueio."}] },
      { h2: "Plano de regularização", h3: [{"title":"Priorização técnica","body":"O que regularizar primeiro para destravar a operação."},{"title":"Negociação","body":"Análise de parcelamentos vigentes e transação tributária."},{"title":"Cronograma","body":"Plano com prazos e responsáveis definidos."}] },
      { h2: "Parcelamentos disponíveis", h3: [{"title":"Federais","body":"Refis, parcelamento simplificado e transação tributária."},{"title":"Estaduais","body":"Programas vigentes em GO e demais estados quando aplicável."},{"title":"Municipais","body":"ISS e taxas municipais com acordo direto."}] },
      { h2: "Compliance pós-regularização", h3: [{"title":"Rotina fiscal saneada","body":"Para que o problema não volte em seis meses."},{"title":"Monitoramento de CNDs","body":"Acompanhamento contínuo das certidões."},{"title":"Revisão de regime","body":"Avaliar se o regime atual ainda faz sentido."}] },
      { h2: "Perguntas frequentes", h3: [{"title":"Quanto custa?","body":"Depende do volume de débitos e complexidade."},{"title":"Demora muito?","body":"Diagnóstico em dias; plano em semanas."},{"title":"Vai virar contadora minha?","body":"Pode ser projeto pontual ou rotina contínua."}] },
      ]}
    />
  );
}
