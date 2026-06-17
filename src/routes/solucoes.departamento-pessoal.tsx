import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/solucoes/departamento-pessoal")({
  head: () => ({
    meta: [
      { title: "Departamento Pessoal e eSocial em Goiânia | DCON" },
      { name: "description", content: "Folha, eSocial, admissões, férias e rescisões com revisão técnica. Departamento pessoal DCON em Goiânia para empresas que não aceitam passivo." },
      { property: "og:title", content: "Departamento Pessoal e eSocial em Goiânia | DCON" },
      { property: "og:description", content: "Folha, eSocial, admissões, férias e rescisões com revisão técnica. Departamento pessoal DCON em Goiânia para empresas que não aceitam passivo." },
      { property: "og:url", content: "/solucoes/departamento-pessoal" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/departamento-pessoal" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Soluções"
      h1="Departamento pessoal completo e em conformidade com eSocial"
      intro="Admissão, folha, encargos, eSocial e rescisões com revisão técnica para evitar passivo trabalhista."
      intent="departamento pessoal terceirizado, folha de pagamento Goiânia"
      observation="Cluster forte de conteúdo eSocial."
      ctaPrimary={{ label: "Solicitar proposta", to: "/contato" }}
      ctaSecondary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      sections={[
      { h2: "O que está incluso", h3: [{"title":"Admissão e contratos","body":"Documentação, exames e registros em conformidade com a CLT."},{"title":"Folha de pagamento","body":"Cálculo, holerites e encargos no prazo, com revisão antes do envio."},{"title":"Encargos e tributos","body":"INSS, FGTS, IRRF e contribuições calculados e conferidos."},{"title":"eSocial","body":"Eventos enviados no prazo com tratamento de inconsistências."}] },
      { h2: "Rescisões e desligamentos", h3: [{"title":"Cálculo técnico","body":"Verbas conferidas conforme tipo de desligamento."},{"title":"Homologação","body":"Acompanhamento técnico do processo de saída."},{"title":"Risco trabalhista","body":"Avaliação preventiva de exposição."}] },
      { h2: "Sócios, pró-labore e PJ", h3: [{"title":"Pró-labore técnico","body":"Definição com base na realidade societária e tributária."},{"title":"Contratação PJ","body":"Análise de viabilidade e risco de vínculo."},{"title":"Distribuição de lucros","body":"Conformidade com escrituração e regime tributário."}] },
      { h2: "Diferenciais técnicos", h3: [{"title":"Olho no eSocial","body":"Inconsistência hoje é multa amanhã — tratamos antes."},{"title":"Calendário ativo","body":"Não dependemos do cliente lembrar do prazo."},{"title":"Comunicação direta","body":"Responsável definido por conta."}] },
      { h2: "Perguntas frequentes", h3: [{"title":"Atendem sem funcionários CLT?","body":"Sim, para sócios e PJ contratados."},{"title":"Fazem ponto eletrônico?","body":"Integramos com sistemas; não operamos relógio."},{"title":"Tratam passivo antigo?","body":"Sim, mediante diagnóstico trabalhista."}] },
      ]}
    />
  );
}
