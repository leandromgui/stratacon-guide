import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/solucoes")({
  head: () => ({
    meta: [
      { title: "Soluções Contábeis | DCON Serviços Contábeis" },
      { name: "description", content: "Soluções contábeis, fiscais, tributárias e societárias para empresas que precisam de segurança, controle e estratégia." },
      { property: "og:title", content: "Soluções Contábeis | DCON Serviços Contábeis" },
      { property: "og:description", content: "Soluções contábeis, fiscais, tributárias e societárias para empresas que precisam de segurança, controle e estratégia." },
      { property: "og:url", content: "/solucoes" },
    ],
    links: [{ rel: "canonical", href: "/solucoes" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Soluções"
      h1="Soluções contábeis para empresas que precisam de segurança, controle e estratégia"
      
      intent="soluções contábeis empresa, contabilidade consultiva serviços"
      
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      sections={[
      { h2: "Contabilidade Empresarial", h3: ["Escrituração","Balanços","Relatórios gerenciais"] },
      { h2: "Departamento Fiscal", h3: ["Apuração de tributos","Obrigações acessórias","Conformidade"] },
      { h2: "Planejamento Tributário", h3: ["Análise de regime","Reorganização societária","Benefícios fiscais"] },
      { h2: "Recuperação de Créditos Tributários", h3: ["Levantamento","Análise técnica","Restituição"] },
      { h2: "Departamento Pessoal", h3: ["Folha","eSocial","Encargos"] },
      { h2: "Societário e Legalização", h3: ["Constituição","Alterações","Encerramento"] },
      { h2: "Regularização Fiscal", h3: ["Pendências","Parcelamentos","Compliance"] },
      { h2: "Holding e Estrutura Patrimonial", h3: ["Holding familiar","Patrimonial","Sucessão"] },
      { h2: "BPO Financeiro", h3: ["Rotinas financeiras","Fluxo de caixa","Indicadores"] },
      { h2: "Abrir Empresa", h3: ["Enquadramento","CNAE","Documentação"] },
      { h2: "Trocar de Contabilidade", h3: ["Transição segura","Auditoria de entrada","Migração"] },
      ]}
    />
  );
}
