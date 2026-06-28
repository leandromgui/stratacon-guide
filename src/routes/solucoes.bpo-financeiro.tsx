import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/solucoes/bpo-financeiro")({
  head: () => ({
    ...buildSeoHead({
      title: "BPO Financeiro em Goiânia | DCON Contábil",
      description: "BPO financeiro com contas a pagar, conciliação bancária e fluxo de caixa. Terceirize a rotina financeira com segurança junto à DCON em Goiânia.",
      canonical: "/solucoes/bpo-financeiro",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "/"}, {"@type": "ListItem", "position": 2, "name": "Soluções", "item": "/solucoes"}, {"@type": "ListItem", "position": 3, "name": "BPO Financeiro", "item": "/solucoes/bpo-financeiro"}]}),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Soluções"
      h1="BPO financeiro com controle, governança e visão gerencial"
      intro="Rotina financeira terceirizada com governança, conciliação bancária diária e fluxo de caixa estruturado."
      intent="BPO financeiro empresa, terceirização financeira"
      observation="Cross-sell natural com Contabilidade Empresarial."
      ctaPrimary={{ label: "Solicitar proposta", to: "/contato" }}
      ctaSecondary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      pillarKey="bpo-financeiro"
      sections={[
      { h2: "Rotinas operadas", h3: [{"title":"Contas a pagar","body":"Agendamento, aprovação e baixa controlados."},{"title":"Contas a receber","body":"Cobrança, baixa e conciliação por cliente."},{"title":"Conciliação bancária","body":"Diária ou semanal, conforme volume."},{"title":"Fluxo de caixa","body":"Visão real e projetada para decisão."}] },
      { h2: "Governança", h3: [{"title":"Alçadas de aprovação","body":"Quem aprova o quê — definido e rastreável."},{"title":"Segregação de função","body":"Quem opera não aprova; quem aprova não paga."},{"title":"Trilha auditável","body":"Tudo registrado para auditoria interna ou externa."}] },
      { h2: "Relatórios entregues", h3: [{"title":"DRE gerencial","body":"Resultado com leitura do empresário."},{"title":"Indicadores de caixa","body":"Liquidez, prazo médio e ciclo financeiro."},{"title":"Posição diária","body":"Saldo consolidado quando solicitado."}] },
      { h2: "Para quem é indicado", h3: [{"title":"Empresas em crescimento","body":"Operação que travou na rotina financeira."},{"title":"Sócio sobrecarregado","body":"Quem ainda paga conta no fim do dia."},{"title":"Investidor envolvido","body":"Operações que precisam prestar contas."}] },
      { h2: "Diferenciais", h3: [{"title":"Integração contábil","body":"BPO conversa com a contabilidade — sem retrabalho."},{"title":"Equipe técnica","body":"Não é estagiário operando a sua conta."},{"title":"Sigilo operacional","body":"Acesso controlado e revogável."}] },
      ]}
    />
  );
}
