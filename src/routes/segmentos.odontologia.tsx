import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";

export const Route = createFileRoute("/segmentos/odontologia")({
  head: () => ({
    meta: [
      { title: "Contabilidade para Dentistas em Goiânia | DCON" },
      { name: "description", content: "Contabilidade para odontologia em Goiânia: regime tributário ideal, fator R e gestão fiscal para consultórios e clínicas odontológicas." },
      { property: "og:title", content: "Contabilidade para Dentistas em Goiânia | DCON" },
      { property: "og:description", content: "Contabilidade para odontologia em Goiânia: regime tributário ideal, fator R e gestão fiscal para consultórios e clínicas odontológicas." },
      { property: "og:url", content: "/segmentos/odontologia" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/odontologia" }],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para dentistas e clínicas odontológicas"
      intro="Contabilidade técnica desenhada para a realidade tributária e operacional de odontologia."
      intent="contabilidade para dentistas, clínica odontológica"
      observation="Sub-cluster de Saúde."
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      sections={[
      { h2: "Particularidades tributárias e contábeis", h3: [{"title":"Tributação específica","body":"Regras fiscais que afetam diretamente operações de odontologia."},{"title":"Obrigações próprias","body":"Acessórias e declarações típicas deste segmento."},{"title":"Risco mais comum","body":"O erro que mais vemos neste tipo de operação."}] },
      { h2: "Riscos comuns no segmento", h3: [{"title":"Enquadramento errado","body":"Regime que parece econômico mas custa mais no fim."},{"title":"Falha de classificação fiscal","body":"CFOP, CST e NCM mal aplicados."},{"title":"Passivo trabalhista","body":"Vínculos mal estruturados que viram dor mais tarde."}] },
      { h2: "Como a DCON atua neste segmento", h3: [{"title":"Diagnóstico específico","body":"Revisamos a operação real do segmento antes de qualquer mudança."},{"title":"Rotina técnica","body":"Calendário, conferência e relatórios desenhados para o setor."},{"title":"Apoio consultivo","body":"Reuniões com leitura do que o número está dizendo."}] },
      { h2: "Casos e exemplos", h3: [{"title":"Caso típico 1","body":"[preencher com situação real anonimizada]"},{"title":"Caso típico 2","body":"[preencher com situação real anonimizada]"}] },
      { h2: "Perguntas frequentes", h3: [{"title":"Atendem só em Goiânia?","body":"Atendemos presencialmente em Goiânia e online em todo o Brasil."},{"title":"Trocar de contador agora vale a pena?","body":"Sim, se a contabilidade atual não dá visão técnica do segmento."},{"title":"Já posso pedir diagnóstico?","body":"Sim, em qualquer fase da operação."}] },
      ]}
    />
  );
}
