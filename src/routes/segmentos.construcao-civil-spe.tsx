import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { getDoc } from "../lib/dcon-content";
import { MethodBadge } from "../components/MethodBadge";
import { dconMethod } from "../lib/dconMethod";

export const Route = createFileRoute("/segmentos/construcao-civil-spe")({
  head: () => ({
    meta: [
      { title: "Contabilidade para Construção Civil e SPE | DCON Goiânia" },
      { name: "description", content: "Contabilidade para construção civil e SPE em Goiânia: RET, patrimônio de afetação, INSS obra e gestão fiscal por incorporação." },
      { property: "og:title", content: "Contabilidade para Construção Civil e SPE | DCON Goiânia" },
      { property: "og:description", content: "Contabilidade para construção civil e SPE em Goiânia: RET, patrimônio de afetação, INSS obra e gestão fiscal por incorporação." },
      { property: "og:url", content: "/segmentos/construcao-civil-spe" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/construcao-civil-spe" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "/"}, {"@type": "ListItem", "position": 2, "name": "Segmentos", "item": "/segmentos"}, {"@type": "ListItem", "position": 3, "name": "Construção Civil e SPE", "item": "/segmentos/construcao-civil-spe"}]}),
      },
    ],
  }),
  component: Page,
});

const docDcon = getDoc(12);

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1={docDcon.h1}
      intro={docDcon.fraseComercial}
      intent="contabilidade construção civil, SPE incorporação, RET 4%"
      observation="Alto valor por clique; cluster denso."
      audience={docDcon.audience}
      ctaPrimary={docDcon.ctas[0]}
      ctaSecondary={docDcon.ctas[1]}
      ctaTertiary={docDcon.ctas[2]}
      respostaValidada={docDcon.respostaValidada}
      pillarKey="construcao-civil-spe"
      method={dconMethod}
      ctaVariant="opportunity"
      sections={[
      { h2: "Particularidades do setor", h3: [{"title":"RET e patrimônio de afetação","body":"Regime especial para incorporações imobiliárias."},{"title":"SPE por obra","body":"Estrutura societária dedicada por empreendimento."},{"title":"INSS na construção","body":"Retenção previdenciária com regras próprias."}] },
      { h2: "Decisões estratégicas", h3: [{"title":"Quando vale RET","body":"Cenário em que a alíquota reduzida compensa as restrições."},{"title":"Habitacional × comercial","body":"Tratamento diferente por tipo de empreendimento."},{"title":"Custos por obra","body":"Apropriação contábil correta para análise por empreendimento."}] },
      { h2: "Riscos comuns", h3: [{"title":"Mistura de obras","body":"Não segregar custos e receitas por SPE."},{"title":"Patrimônio de afetação mal formalizado","body":"Comprometer o benefício do RET."},{"title":"Retenção previdenciária errada","body":"Autuação no INSS."}] },
      { h2: "Como a DCON atua", h3: [{"title":"Estruturação societária","body":"Constituição de SPE e enquadramento no RET."},{"title":"Rotina técnica","body":"Apropriação por obra e fechamento auditável."},{"title":"Acompanhamento estratégico","body":"Revisão por empreendimento e por regime."}] },
      { h2: "Perguntas frequentes", h3: [{"title":"Vale abrir SPE para 1 obra?","body":"Depende do porte e do financiamento."},{"title":"RET serve para reforma?","body":"Não. RET é para incorporação."},{"title":"Atendem obras fora de GO?","body":"Sim, em todo o Brasil."}] },
      ]}
    >
      <MethodBadge note="Construção civil conduzida pelo protocolo DCON" />
    </PageScaffold>
  );
}
