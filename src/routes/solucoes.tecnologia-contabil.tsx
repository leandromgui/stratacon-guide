import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { FAQ, faqJsonLd, serviceJsonLd, type FAQItem } from "../components/FAQ";
import { LeadCaptureForm } from "../components/LeadCaptureForm";

const faqs: FAQItem[] = [
  { q: "A DCON substitui meu ERP?", a: "Não. A tecnologia da DCON cruza dados que já existem no seu ERP, nas notas e nas obrigações acessórias para gerar controle, alerta, conferência e decisão." },
  { q: "Como funciona o cruzamento fiscal automatizado?", a: "Coletamos XML, NF-e, NFS-e, CT-e, NFCom, SPED, EFD-Contribuições, DCTF, DCTFWeb, MIT, ECF, ECD, PGDAS-D, PER/DCOMP e DARFs, e cruzamos os dados para identificar inconsistências, créditos e riscos." },
  { q: "Tecnologia ajuda a recuperar crédito?", a: "Sim. Monofásico, alíquota zero, CST 06 e 07, redução linear, equiparação hospitalar, exportação, DIFAL e ICMS/ST exigem análise volumosa de XML — automação acelera e dá rastreabilidade." },
  { q: "Dashboards estão incluídos?", a: "Sim, para clientes com plano de gestão: DRE gerencial, margem, EBITDA, fluxo de caixa, Curva ABC, inadimplência, LTV, CAC, rentabilidade por cliente/produto, folha, impostos e valuation." },
];

export const Route = createFileRoute("/solucoes/tecnologia-contabil")({
  head: () => ({
    meta: [
      { title: "Tecnologia Contábil, Automação e BI Fiscal | DCON" },
      { name: "description", content: "Sua empresa já tem dados. Falta transformá-los em controle, alerta e decisão. A DCON cruza fiscal, contábil, folha e financeiro com tecnologia." },
      { property: "og:title", content: "Tecnologia Contábil, Automação e BI Fiscal | DCON" },
      { property: "og:description", content: "Cruzamento fiscal, monitoramento de certidões, dashboards, revisão de XML/SPED e tecnologia para a Reforma Tributária." },
      { property: "og:url", content: "/solucoes/tecnologia-contabil" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/tecnologia-contabil" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Início","item":"/"},{"@type":"ListItem","position":2,"name":"Soluções","item":"/solucoes"},{"@type":"ListItem","position":3,"name":"Tecnologia Contábil","item":"/solucoes/tecnologia-contabil"}]}) },
      { type: "application/ld+json", children: serviceJsonLd({ name: "Tecnologia Contábil", description: "Automação, BI fiscal, cruzamentos, dashboards e monitoramento para empresas em todos os regimes.", url: "/solucoes/tecnologia-contabil" }) },
      { type: "application/ld+json", children: faqJsonLd(faqs) },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Solução"
      h1="Tecnologia contábil e inteligência fiscal para decidir com segurança"
      intro="A tecnologia da DCON não substitui o contador. Ela organiza dados para que a análise técnica seja mais precisa, rápida e rastreável."
      intent="tecnologia contábil, automação fiscal, BI contábil"
      ctaPrimary={{ label: "Quero cruzar meus dados fiscais e contábeis", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      sections={[
        { h2: "Cruzamento fiscal automatizado", h3: [
          { title: "Fontes integradas", body: "XML, NF-e, NFS-e, NFC-e, CT-e, NFCom, SPED, EFD-Contribuições, DCTF, DCTFWeb, MIT, ECF, ECD, PGDAS-D, PER/DCOMP, DARFs, retenções e pagamentos." },
        ]},
        { h2: "Tecnologia para recuperação de créditos", h3: [
          { title: "Hipóteses analisadas", body: "Monofásico, alíquota zero, CST 06, CST 07, redução linear, equiparação hospitalar, exportação, DIFAL e ICMS/ST nos últimos 5 anos." },
        ]},
        { h2: "Tecnologia para Reforma Tributária", h3: [
          { title: "Camadas revisadas", body: "IBS, CBS, XML, cClassTrib, NCM, CFOP, CST, código de serviço, NFS-e Nacional, Plataforma CBS, ERP e apuração assistida." },
        ]},
        { h2: "Tecnologia para certidões e folha", h3: [
          { title: "Certidões", body: "CND, PGFN, FGTS, CNDT, Estado, Município, licitações, crédito bancário, vencimentos e pendências." },
          { title: "Folha e eSocial", body: "DCTFWeb, rubricas, CCT, INSS, FGTS, IRRF, RAT, FAP, terceiros, premiações, ajuda de custo, SST, PGR e NR-1." },
        ]},
        { h2: "Dashboards e KPIs", h3: [
          { title: "Indicadores", body: "DRE gerencial, margem, EBITDA, fluxo de caixa, Curva ABC, inadimplência, ticket médio, LTV, CAC, rentabilidade por cliente e por produto, folha, impostos e valuation." },
        ]},
      ]}
    >
      <FAQ items={faqs} />
      <LeadCaptureForm page="solucoes" />
    </PageScaffold>
  );
}