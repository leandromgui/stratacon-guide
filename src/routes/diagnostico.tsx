import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/diagnostico")({
  head: () => ({
    meta: [
      { title: "Diagnóstico Fiscal e Contábil | DCON Serviços Contábeis" },
      { name: "description", content: "Descubra em até 7 dias úteis os riscos fiscais, tributários e contábeis da sua empresa. Diagnóstico técnico DCON." },
      { property: "og:title", content: "Diagnóstico Fiscal e Contábil | DCON Serviços Contábeis" },
      { property: "og:description", content: "Descubra em até 7 dias úteis os riscos fiscais, tributários e contábeis da sua empresa. Diagnóstico técnico DCON." },
      { property: "og:url", content: "/diagnostico" },
    ],
    links: [{ rel: "canonical", href: "/diagnostico" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Landing — conversão"
      h1="Sua empresa está pagando, declarando e registrando corretamente?"
      intro="Diagnóstico fiscal, tributário, contábil e trabalhista com entrega técnica em até 7 dias úteis."
      intent="diagnóstico fiscal empresa, auditoria contábil preventiva"
      observation="Principal entrada de leads — referenciada em todas as páginas."
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/contato" }}
      ctaSecondary={{ label: "Conhecer a metodologia", to: "/sobre/metodologia" }}
      sections={[
      { h2: "O que avaliamos no diagnóstico", h3: ["Fiscal","Contábil","Trabalhista","Societário","Tributário"] },
      { h2: "Principais riscos encontrados", h3: ["Imposto pago a maior","Obrigações em atraso","Erros societários"] },
      { h2: "Quando solicitar uma análise", h3: ["Troca de contador","Reestruturação","Pendências"] },
      { h2: "Como funciona o processo", h3: ["Coleta","Análise","Entrega do parecer"] },
      { h2: "O que você recebe", h3: ["Relatório técnico","Plano de ação","Reunião de devolutiva"] },
      { h2: "Perguntas frequentes", h3: ["[preencher]"] },
      ]}
    />
  );
}
