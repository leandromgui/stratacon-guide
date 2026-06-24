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
        { h2: "Estrutura jurídica", lead: "Imposto e regularização na construção civil começam no contrato, na estrutura jurídica, no CNO e na forma de comprovação da obra.", h3: [
          { title: "PF, PJ, SPE e SCP", body: "Construtora, incorporadora, SPE ou SCP — definidas conforme empreendimento, investidores e venda de unidades." },
          { title: "RET e patrimônio de afetação", body: "Regime especial avaliado por viabilidade, restrições e contratos entre investidores." },
        ]},
        { h2: "CNO, Sero e aferição de obra", h3: [
          { title: "CNO e responsável", body: "Abertura de CNO, responsável pela obra, empreitada total, parcial e dono da obra revisados antes da aferição." },
          { title: "Aferição indireta x contabilidade regular", body: "Notas fiscais, folha, recolhimentos e certidão de obra trabalhados para evitar pagamento sobre dados errados." },
          { title: "Pessoa física construtora", body: "PF que constrói deve revisar dados antes da aferição — economia existe quando a aferição considera informações incorretas, mas não é automática." },
        ]},
        { h2: "ISS na construção civil", h3: [
          { title: "Base correta", body: "Mão de obra, materiais, contrato, nota fiscal, legislação municipal, ICMS, jurisprudência do STJ e LC 116 revisados." },
          { title: "Dedução de materiais", body: "Materiais produzidos pelo prestador fora da obra exigem análise técnica e documental — dedução ampla não é regra automática." },
        ]},
        { h2: "Empreitada total e presunção reduzida", h3: [
          { title: "Lucro Presumido", body: "Construtoras que executam obra por empreitada total com fornecimento de materiais incorporados à obra podem ter IRPJ 8% e CSLL 12% em vez de 32%." },
          { title: "Documentação", body: "Contrato, nota, comprovação de fornecimento e segregação de receitas sustentam a presunção reduzida em fiscalização." },
        ]},
      ]}
    >
      <MethodBadge note="Construção civil conduzida pelo protocolo DCON" />
    </PageScaffold>
  );
}
