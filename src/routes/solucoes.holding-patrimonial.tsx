import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/solucoes/holding-patrimonial")({
  head: () => ({
    meta: [
      { title: "Holding e Estrutura Patrimonial | DCON Serviços Contábeis" },
      { name: "description", content: "Holding patrimonial e familiar com estrutura técnica e tributária. Atendimento consultivo DCON em Goiânia e online." },
      { property: "og:title", content: "Holding e Estrutura Patrimonial | DCON Serviços Contábeis" },
      { property: "og:description", content: "Holding patrimonial e familiar com estrutura técnica e tributária. Atendimento consultivo DCON em Goiânia e online." },
      { property: "og:url", content: "/solucoes/holding-patrimonial" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/holding-patrimonial" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Soluções"
      h1="Holding patrimonial e familiar com estrutura técnica e tributária"
      intro="Avaliação técnica de viabilidade, estruturação e operação da holding como ferramenta de proteção e sucessão."
      intent="abrir holding familiar, holding patrimonial vantagens"
      observation="Ticket alto, intenção qualificada."
      ctaPrimary={{ label: "Solicitar proposta", to: "/contato" }}
      ctaSecondary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      sections={[
      { h2: "Quando faz sentido", h3: [{"title":"Patrimônio relevante","body":"Imóveis, participações e ativos que justifiquem estrutura."},{"title":"Sucessão em vista","body":"Famílias que querem antecipar a transição patrimonial."},{"title":"Múltiplas operações","body":"Quando o sócio tem várias empresas e quer organizar."}] },
      { h2: "Tipos de holding", h3: [{"title":"Patrimonial","body":"Concentra imóveis e ativos da família."},{"title":"Familiar","body":"Estrutura para governança e sucessão."},{"title":"Mista","body":"Patrimonial e operacional combinadas conforme o caso."}] },
      { h2: "Benefícios reais", h3: [{"title":"Sucessão organizada","body":"Transição em vida com regras claras."},{"title":"Proteção patrimonial","body":"Blindagem dentro dos limites legais."},{"title":"Eficiência tributária","body":"Distribuição de aluguéis e ganhos com tratamento mais adequado."}] },
      { h2: "Riscos e mitos", h3: [{"title":"Não é blindagem mágica","body":"Não protege contra fraude, sonegação ou má-fé."},{"title":"Não vale para todo mundo","body":"Holding sem patrimônio é custo sem benefício."},{"title":"ITCMD e ITBI importam","body":"Avaliação técnica antes de qualquer transferência."}] },
      { h2: "Como estruturamos", h3: [{"title":"Estudo prévio","body":"Análise patrimonial e familiar antes da decisão."},{"title":"Constituição técnica","body":"Tipo societário, capital e cláusulas alinhadas ao objetivo."},{"title":"Operação contínua","body":"Contabilidade da holding com olhar consultivo."}] },
      ]}
    />
  );
}
