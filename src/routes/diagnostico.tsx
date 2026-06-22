import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { getDoc } from "../lib/dcon-content";

export const Route = createFileRoute("/diagnostico")({
  head: () => ({
    meta: [
      { title: "Diagnóstico Contábil Gratuito | DCON Goiânia" },
      { name: "description", content: "Solicite um diagnóstico contábil, fiscal e tributário gratuito da DCON em Goiânia. Identifique riscos e oportunidades na sua empresa." },
      { property: "og:title", content: "Diagnóstico Contábil Gratuito | DCON Goiânia" },
      { property: "og:description", content: "Solicite um diagnóstico contábil, fiscal e tributário gratuito da DCON em Goiânia. Identifique riscos e oportunidades na sua empresa." },
      { property: "og:url", content: "/diagnostico" },
    ],
    links: [{ rel: "canonical", href: "/diagnostico" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "/"}, {"@type": "ListItem", "position": 2, "name": "Diagnóstico", "item": "/diagnostico"}]}),
      },
    ],
  }),
  component: Page,
});

const docDcon = getDoc(2);

function Page() {
  return (
    <PageScaffold
      eyebrow="Diagnóstico"
      h1={docDcon.h1}
      intro={docDcon.fraseComercial}
      intent="diagnóstico fiscal empresa, auditoria contábil preventiva"
      observation="Principal entrada de leads — referenciada em todas as páginas."
      audience={docDcon.audience}
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/contato" }}
      ctaSecondary={{ label: "Falar com a equipe", to: "/contato" }}
      ctaTertiary={docDcon.ctas[0]}
      respostaValidada={docDcon.respostaValidada}
      sections={[
      { h2: "O que avaliamos no diagnóstico", h3: [{"title":"Fiscal","body":"Apurações, SPEDs e classificação fiscal das operações."},{"title":"Contábil","body":"Escrituração, fechamentos e demonstrações."},{"title":"Tributário","body":"Regime, anexo, créditos e cargas efetivas."},{"title":"Trabalhista","body":"Folha, encargos, eSocial e contratos."},{"title":"Societário","body":"Contrato social, sócios e estrutura."}] },
      { h2: "Principais riscos encontrados", h3: [{"title":"Imposto pago a maior","body":"Crédito não aproveitado, regime mal escolhido."},{"title":"Obrigações em atraso","body":"Acessórias não entregues que viram multa em silêncio."},{"title":"Classificação fiscal errada","body":"CFOP, CST e NCM mal aplicados na origem."},{"title":"Risco societário","body":"Cláusulas defasadas para a realidade atual."}] },
      { h2: "Quando solicitar", h3: [{"title":"Troca de contador","body":"Antes de assumir ou logo após a transição."},{"title":"Crescimento","body":"Quando a operação ficou maior do que a contabilidade atual."},{"title":"Pendências","body":"Quando há autuação, débito ou bloqueio na conta."}] },
      { h2: "Como funciona o processo", h3: [{"title":"Coleta de dados","body":"Lista objetiva do que precisamos para iniciar."},{"title":"Análise técnica","body":"Revisão por área com equipe DCON."},{"title":"Devolutiva consultiva","body":"Reunião com o parecer e o plano de ação."}] },
      { h2: "O que você recebe", h3: [{"title":"Relatório técnico","body":"Documento auditável com achados e fundamento."},{"title":"Plano de ação","body":"Priorização do que tratar primeiro e como."},{"title":"Reunião de devolutiva","body":"Apresentação executiva, em linguagem do empresário."}] },
      { h2: "Perguntas frequentes", h3: [{"title":"Quanto custa?","body":"Variável conforme porte. Orçamento sob alinhamento."},{"title":"Demora quanto?","body":"Até 7 dias úteis após recebimento dos documentos."},{"title":"Sou obrigado a contratar a DCON depois?","body":"Não. O diagnóstico é entregável independente."}] },
      ]}
    />
  );
}
