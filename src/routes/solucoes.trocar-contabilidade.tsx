import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/solucoes/trocar-contabilidade")({
  head: () => ({
    meta: [
      { title: "Trocar de Contabilidade | DCON Serviços Contábeis" },
      { name: "description", content: "Troque de contabilidade com segurança e sem perder prazos. Atendimento consultivo DCON em Goiânia e online." },
      { property: "og:title", content: "Trocar de Contabilidade | DCON Serviços Contábeis" },
      { property: "og:description", content: "Troque de contabilidade com segurança e sem perder prazos. Atendimento consultivo DCON em Goiânia e online." },
      { property: "og:url", content: "/solucoes/trocar-contabilidade" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/trocar-contabilidade" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Soluções"
      h1="Troque de contabilidade com segurança e sem perder prazos"
      intro="Transição técnica conduzida pela DCON: sem perda de prazo, sem documento solto e com auditoria de entrada."
      intent="trocar de contador, como mudar de contabilidade"
      observation="Conversão pura — também é LP."
      ctaPrimary={{ label: "Solicitar proposta", to: "/contato" }}
      ctaSecondary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      sections={[
      { h2: "Quando trocar", h3: [{"title":"Falta de comunicação","body":"Quando você só recebe guia e nunca recebe análise."},{"title":"Erros recorrentes","body":"Multas, atrasos e retrabalho que viraram rotina."},{"title":"Crescimento da empresa","body":"Operação ficou maior do que o contador suporta."}] },
      { h2: "Riscos da troca mal feita", h3: [{"title":"Perder prazo","body":"Janela entre contadores onde obrigação não é entregue."},{"title":"Documento solto","body":"Base sem entrega completa do anterior."},{"title":"Erro herdado","body":"Adotar problema do contador anterior sem revisar."}] },
      { h2: "Como conduzimos", h3: [{"title":"Plano de transição","body":"Cronograma com responsabilidades claras."},{"title":"Solicitação formal","body":"Pedido técnico ao contador anterior, em nome do cliente."},{"title":"Auditoria de entrada","body":"Conferência da base recebida antes de assumir."}] },
      { h2: "Documentos necessários", h3: [{"title":"Societário","body":"Contrato social atualizado e alterações."},{"title":"Fiscal","body":"Últimas apurações, SPEDs e DCTFs."},{"title":"Trabalhista","body":"Folhas, eSocial e contratos vigentes."}] },
      { h2: "Perguntas frequentes", h3: [{"title":"Demora quanto?","body":"Em geral, 30 dias bem conduzidos."},{"title":"Vou perder histórico?","body":"Não. Trazemos a base e revisamos."},{"title":"Tenho que avisar o atual?","body":"Sim, e te apoiamos nessa comunicação."}] },
      ]}
    />
  );
}
