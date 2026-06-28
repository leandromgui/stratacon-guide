import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/segmentos/franquias-redes")({
  head: () => ({
    ...buildSeoHead({
      title: "Contabilidade para Franquias e Redes | DCON Goiânia",
      description: "Contabilidade para franquias e redes em Goiânia: royalties, consolidação, multi-CNPJ e padronização fiscal com a DCON.",
      canonical: "/segmentos/franquias-redes",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "/"}, {"@type": "ListItem", "position": 2, "name": "Segmentos", "item": "/segmentos"}, {"@type": "ListItem", "position": 3, "name": "Franquias e Redes", "item": "/segmentos/franquias-redes"}]}),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para franquias e redes de unidades"
      intro="Contabilidade técnica desenhada para a realidade tributária e operacional de franquias e redes."
      intent="contabilidade franquia, contabilidade rede de lojas"
      observation="Operações multi-CNPJ."
      ctaPrimary={{ label: "Solicitar diagnóstico técnico inicial", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      sections={[
        { h2: "Royalties, fundo de marketing e taxa de franquia", lead: "Contrato de franquia define como cada repasse é tributado — erro de classificação gera incidência indevida e disputa com o franqueador.", h3: [
          { title: "Royalties e taxa inicial", body: "Tratamento contábil e fiscal correto — diferenciação entre receita do franqueador e despesa dedutível do franqueado." },
          { title: "Fundo de marketing", body: "Repasse a fundo coletivo escriturado de forma rastreável — não é receita do franqueador nem despesa simples do franqueado." },
          { title: "Retenções", body: "IRRF, PIS/Cofins/CSLL e ISS revisados em cada repasse contratual." },
        ]},
        { h2: "Operação multiunidade", h3: [
          { title: "Múltiplos CNPJs", body: "Cada loja com CNPJ próprio exige operação real — sem isso, a Receita desconsidera por simulação." },
          { title: "Sublimite e Simples", body: "Faturamento agregado e sublimite estadual monitorados para evitar mudança automática de regime no meio do ano." },
          { title: "Padronização contábil", body: "Plano de contas e fechamento mensal idênticos entre unidades para sustentar consolidação e comparação." },
        ]},
        { h2: "Folha em rede de unidades", h3: [
          { title: "CCT por unidade", body: "Convenção coletiva da categoria aplicada a cada localidade — piso, adicionais e benefícios variam por estado." },
          { title: "Folha cruzada", body: "Folha em uma empresa para outra do mesmo grupo é risco — desconsideração e cobrança previdenciária retroativa." },
        ]},
        { h2: "Reforma Tributária em redes", h3: [
          { title: "IBS/CBS em repasses", body: "Royalties, fundo e taxa de franquia passam a refletir IBS/CBS na nota — revisão de contrato e parametrização do ERP antes de 2027." },
          { title: "B2B no Simples", body: "Franqueado B2B do Simples precisa simular competitividade e crédito para clientes antes da decisão de regime em setembro/2026." },
        ]},
      ]}
    />
  );
}
