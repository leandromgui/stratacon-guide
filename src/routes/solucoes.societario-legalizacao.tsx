import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/solucoes/societario-legalizacao")({
  head: () => ({
    meta: [
      { title: "Societário e Legalização | DCON Serviços Contábeis" },
      { name: "description", content: "Estrutura societária com segurança jurídica. Atendimento consultivo DCON em Goiânia e online." },
      { property: "og:title", content: "Societário e Legalização | DCON Serviços Contábeis" },
      { property: "og:description", content: "Estrutura societária com segurança jurídica. Atendimento consultivo DCON em Goiânia e online." },
      { property: "og:url", content: "/solucoes/societario-legalizacao" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/societario-legalizacao" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Soluções"
      h1="Estrutura societária com segurança jurídica"
      intro="Constituição, alterações, reorganizações e governança societária com olhar técnico e tributário."
      intent="alteração contratual, abertura de empresa Goiânia, societário"
      observation="Ponte direta para Holding."
      ctaPrimary={{ label: "Solicitar proposta", to: "/contato" }}
      ctaSecondary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      sections={[
      { h2: "Constituições", h3: [{"title":"Escolha do tipo","body":"LTDA, SLU, S/A ou outros, conforme objetivo do sócio."},{"title":"Enquadramento","body":"CNAE e regime tributário definidos para a operação real."},{"title":"Junta Comercial","body":"Registro e licenças iniciais conduzidos por nós."}] },
      { h2: "Alterações contratuais", h3: [{"title":"Entrada e saída de sócios","body":"Cessão de quotas, valoração e documentação."},{"title":"Mudança de objeto","body":"Ajuste de CNAEs e impactos tributários."},{"title":"Aumento de capital","body":"Integralização e reflexo contábil."}] },
      { h2: "Reorganizações", h3: [{"title":"Cisão, fusão e incorporação","body":"Reestruturação societária com base técnica."},{"title":"Múltiplos CNPJs","body":"Quando faz sentido segmentar a operação."},{"title":"Holding como instrumento","body":"Estrutura patrimonial e operacional integrada."}] },
      { h2: "Governança", h3: [{"title":"Acordo de sócios","body":"Apoio técnico-contábil na construção, junto a advogado."},{"title":"Distribuição de lucros","body":"Conformidade contábil e tributária."},{"title":"Sucessão","body":"Planejamento alinhado com holding e patrimônio."}] },
      { h2: "Encerramentos", h3: [{"title":"Baixa correta","body":"Encerramento técnico para evitar passivo futuro."},{"title":"Distrato e CNDs","body":"Negativas obtidas no fluxo correto."},{"title":"Comunicações aos órgãos","body":"Encerramento em todas as esferas."}] },
      ]}
    />
  );
}
