import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/segmentos/terceiro-setor")({
  head: () => ({
    ...buildSeoHead({
      title: "Contabilidade para Terceiro Setor | DCON Goiânia",
      description: "Contabilidade para ONGs, OSCIPs e associações em Goiânia: imunidades, prestação de contas e gestão fiscal com a DCON.",
      canonical: "/segmentos/terceiro-setor",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "/"}, {"@type": "ListItem", "position": 2, "name": "Segmentos", "item": "/segmentos"}, {"@type": "ListItem", "position": 3, "name": "Terceiro Setor", "item": "/segmentos/terceiro-setor"}]}),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para OSCs, associações e fundações"
      intro="Contabilidade técnica desenhada para a realidade tributária e operacional de terceiro setor."
      intent="contabilidade terceiro setor, OSC, OSCIP"
      observation="Imunidade e prestação de contas."
      ctaPrimary={{ label: "Solicitar diagnóstico técnico inicial", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      sections={[
        { h2: "Imunidade e isenção — não são automáticas", lead: "OSC, associação e fundação precisam comprovar requisitos a cada ano — falha de documentação faz a Receita reclassificar como entidade tributada.", h3: [
          { title: "Requisitos do art. 14 do CTN", body: "Não distribuição de superávit, aplicação integral no objeto social e escrituração regular conferidos e documentados." },
          { title: "Certificação CEBAS, OS, OSCIP, UPF/Utilidade Pública", body: "Validade, renovação e relatórios anuais acompanhados para manter o benefício." },
        ]},
        { h2: "Folha, eSocial e SST", h3: [
          { title: "Cota patronal", body: "Imunidade da cota patronal previdenciária depende de CEBAS válido e escrituração regular — sem isso, INSS é devido normalmente." },
          { title: "Eventos eSocial e DCTFWeb", body: "Folha, retenções e contribuições enviadas no prazo, com tratamento técnico de inconsistências antes da multa." },
          { title: "SST e NR-1", body: "PGR, PCMSO, ASO e eventos S-2210/S-2220/S-2240 organizados também para entidades sem fins lucrativos." },
        ]},
        { h2: "Prestação de contas a financiadores", h3: [
          { title: "Convênios e termos de fomento", body: "Plano de trabalho, prestação de contas e rastreabilidade de recursos públicos e privados conduzidos com rigor técnico." },
          { title: "Demonstrações contábeis ITG 2002", body: "Balanço, DRE, DMPL, DFC e notas explicativas no padrão das entidades sem finalidade de lucro." },
          { title: "Doações dedutíveis", body: "Comprovação técnica que sustenta dedução do doador e benefício do projeto incentivado (Rouanet, Esporte, FIA, PRONAS, PRONON)." },
        ]},
        { h2: "Riscos comuns", h3: [
          { title: "Distribuição indireta de superávit", body: "Remuneração desproporcional, contratos com partes relacionadas e despesas sem propósito quebram a imunidade retroativamente." },
          { title: "Atividade econômica não escriturada", body: "Bazar, evento, venda de material e curso pago precisam ser escriturados — a depender do volume, exigem regime tributário próprio." },
          { title: "Falha em prestação de contas", body: "Reprovação em convênio gera devolução de recurso, inscrição em Cadin e impedimento de novos contratos públicos." },
        ]},
      ]}
    />
  );
}
