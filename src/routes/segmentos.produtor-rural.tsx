import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { getDoc } from "../lib/dcon-content";
import { MethodBadge } from "../components/MethodBadge";
import { dconMethod } from "../lib/dconMethod";

export const Route = createFileRoute("/segmentos/produtor-rural")({
  head: () => ({
    meta: [
      { title: "Contabilidade para Produtor Rural | DCON Goiânia" },
      { name: "description", content: "Contabilidade para produtor rural em Goiás: Funrural, ITR, livro caixa do produtor e planejamento sucessório com a DCON." },
      { property: "og:title", content: "Contabilidade para Produtor Rural | DCON Goiânia" },
      { property: "og:description", content: "Contabilidade para produtor rural em Goiás: Funrural, ITR, livro caixa do produtor e planejamento sucessório com a DCON." },
      { property: "og:url", content: "/segmentos/produtor-rural" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/produtor-rural" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "/"}, {"@type": "ListItem", "position": 2, "name": "Segmentos", "item": "/segmentos"}, {"@type": "ListItem", "position": 3, "name": "Produtor Rural", "item": "/segmentos/produtor-rural"}]}),
      },
    ],
  }),
  component: Page,
});

const docDcon = getDoc(13);

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1={docDcon.h1}
      intro={docDcon.fraseComercial}
      intent="contabilidade produtor rural, contador agronegócio"
      observation="ITR, Funrural, LCDPR."
      audience={docDcon.audience}
      ctaPrimary={docDcon.ctas[0]}
      ctaSecondary={docDcon.ctas[1]}
      ctaTertiary={docDcon.ctas[2]}
      respostaValidada={docDcon.respostaValidada}
      pillarKey="produtor-rural"
      method={dconMethod}
      ctaVariant="opportunity"
      sections={[
      { h2: "Particularidades tributárias e contábeis", h3: [{"title":"Tributação específica","body":"Regras fiscais que afetam diretamente operações de produtor rural."},{"title":"Obrigações próprias","body":"Acessórias e declarações típicas deste segmento."},{"title":"Risco mais comum","body":"O erro que mais vemos neste tipo de operação."}] },
      { h2: "Riscos comuns no segmento", h3: [{"title":"Enquadramento errado","body":"Regime que parece econômico mas custa mais no fim."},{"title":"Falha de classificação fiscal","body":"CFOP, CST e NCM mal aplicados."},{"title":"Passivo trabalhista","body":"Vínculos mal estruturados que viram dor mais tarde."}] },
      { h2: "Como a DCON atua neste segmento", h3: [{"title":"Diagnóstico específico","body":"Revisamos a operação real do segmento antes de qualquer mudança."},{"title":"Rotina técnica","body":"Calendário, conferência e relatórios desenhados para o setor."},{"title":"Apoio consultivo","body":"Reuniões com leitura do que o número está dizendo."}] },
      { h2: "Casos e exemplos", h3: [{"title":"Caso típico 1","body":"[preencher com situação real anonimizada]"},{"title":"Caso típico 2","body":"[preencher com situação real anonimizada]"}] },
      { h2: "Perguntas frequentes", h3: [{"title":"Atendem só em Goiânia?","body":"Atendemos presencialmente em Goiânia e online em todo o Brasil."},{"title":"Trocar de contador agora vale a pena?","body":"Sim, se a contabilidade atual não dá visão técnica do segmento."},{"title":"Já posso pedir diagnóstico?","body":"Sim, em qualquer fase da operação."}] },
      ]}
    >
      <MethodBadge note="Produtor rural conduzido pelo protocolo DCON" />
    </PageScaffold>
  );
}
