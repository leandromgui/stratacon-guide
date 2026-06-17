import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/sobre/metodologia")({
  head: () => ({
    meta: [
      { title: "Metodologia DCON | Como Conduzimos a Contabilidade da Sua Empresa" },
      { name: "description", content: "Conheça as etapas da metodologia DCON: diagnóstico, estruturação, rotina técnica e acompanhamento estratégico." },
      { property: "og:title", content: "Metodologia DCON | Como Conduzimos a Contabilidade da Sua Empresa" },
      { property: "og:description", content: "Conheça as etapas da metodologia DCON: diagnóstico, estruturação, rotina técnica e acompanhamento estratégico." },
      { property: "og:url", content: "/sobre/metodologia" },
    ],
    links: [{ rel: "canonical", href: "/sobre/metodologia" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Metodologia"
      h1="Como a DCON conduz a contabilidade da sua empresa"
      intro="Quatro etapas que transformam contabilidade em informação útil para o empresário decidir."
      intent="metodologia contábil, contabilidade consultiva como funciona"
      observation="Reforça diferenciação versus 'contabilidade barata'."
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      ctaSecondary={{ label: "Conhecer as soluções", to: "/solucoes" }}
      sections={[
      { h2: "1. Diagnóstico inicial", h3: [{"title":"Levantamento técnico","body":"Análise da situação fiscal, contábil, trabalhista e societária antes de qualquer entrega."},{"title":"Mapa de risco","body":"Identificação clara do que está exposto e do que precisa ser corrigido primeiro."},{"title":"Devolutiva consultiva","body":"Reunião para apresentar achados em linguagem de decisão, não de jargão."}] },
      { h2: "2. Estruturação", h3: [{"title":"Enquadramento correto","body":"Revisão de regime tributário, CNAEs e estrutura societária para a operação real da empresa."},{"title":"Plano de ação","body":"Cronograma técnico do que será regularizado, ajustado ou implementado."},{"title":"Integração de sistemas","body":"Conexão com ERPs, bancos e emissores de nota para reduzir retrabalho."}] },
      { h2: "3. Rotina técnica", h3: [{"title":"Calendário fiscal","body":"Controle ativo de prazos federais, estaduais e municipais — sem depender do cliente lembrar."},{"title":"Fechamento mensal","body":"Encerramento contábil revisado, com indicadores prontos para análise."},{"title":"Comunicação direta","body":"Canal técnico aberto com responsável definido, sem repassar de mesa em mesa."}] },
      { h2: "4. Acompanhamento estratégico", h3: [{"title":"Reuniões periódicas","body":"Revisão de regime, distribuição de lucros e decisões societárias com base em dado, não em achismo."},{"title":"Relatórios gerenciais","body":"DRE gerencial e indicadores fiscais para suportar decisão do empresário."},{"title":"Visão de risco contínua","body":"Atualização constante sobre mudanças legais que afetam a operação."}] },
      { h2: "Ferramentas e segurança da informação", h3: [{"title":"Ambiente protegido","body":"Documentos e dados em ambiente com controle de acesso e backup."},{"title":"Trilha auditável","body":"Tudo o que entra e sai da contabilidade fica rastreável."},{"title":"Conformidade com LGPD","body":"Tratamento de dados conforme legislação vigente."}] },
      ]}
    />
  );
}
