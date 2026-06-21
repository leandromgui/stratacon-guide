import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { FAQ, faqJsonLd, serviceJsonLd, type FAQItem } from "../components/FAQ";
import { LeadCaptureForm } from "../components/LeadCaptureForm";
import { MethodBadge } from "../components/MethodBadge";
import { dconMethod } from "../lib/dconMethod";

const faqs: FAQItem[] = [
  { q: "O que muda em 2026 com a Reforma Tributária?", a: "2026 é fase de teste de CBS e IBS. As notas fiscais e a apuração informativa já passam a refletir os novos tributos, em regra sem recolhimento quando as obrigações acessórias são cumpridas. É o ano de ajustar ERP, XML, cadastros, NCM, CFOP, CST, cClassTrib, códigos de serviço e rotinas internas." },
  { q: "Minha nota fiscal precisa mudar agora?", a: "Sim. NF-e, NFC-e, NFS-e, CT-e, NFCom, NF3e e BP-e passam a carregar campos de IBS e CBS. A nota pode ser autorizada e ainda assim estar fiscalmente incorreta — por isso a DCON faz auditoria de emissão fiscal." },
  { q: "Devo continuar no Simples Nacional em 2027?", a: "Setembro de 2026 é o mês de decisão. Empresas B2B do Simples precisam simular competitividade, crédito para clientes, margem e preço antes de optar pelo regime regular de IBS/CBS." },
  { q: "Empresa do Lucro Presumido precisa se preocupar com a LC 224/2025?", a: "Sim. Há acréscimo de 10% sobre os percentuais de presunção no excedente de R$ 5 milhões/ano ou R$ 1,25 milhão/trimestre. IRPJ a partir do 1º trimestre de 2026 e CSLL a partir do 2º trimestre." },
  { q: "Locadores pessoa física entram na Reforma?", a: "PF com mais de 3 imóveis locados e receita anual de aluguel acima de R$ 240 mil entra no radar de IBS/CBS. Locação residencial tradicional tem redução de 70%, com alíquota efetiva próxima de 8%, além do IR." },
  { q: "Tenho benefício de ICMS — como fica?", a: "Crédito presumido, crédito outorgado, redução de base, regimes especiais e programas estaduais exigem dossiê. É preciso verificar ato concessivo, prazo, condição onerosa, contrapartidas e possibilidade de compensação futura." },
];

export const Route = createFileRoute("/solucoes/reforma-tributaria")({
  head: () => ({
    meta: [
      { title: "Reforma Tributária: IBS, CBS e Transição | DCON" },
      { name: "description", content: "Sua empresa pode não pagar IBS/CBS ainda, mas já pode emitir notas erradas. A DCON prepara ERP, XML, cadastros e simulações para 2026/2027." },
      { property: "og:title", content: "Reforma Tributária: IBS, CBS e Transição | DCON" },
      { property: "og:description", content: "Diagnóstico de IBS/CBS, revisão de XML, parametrização de ERP, Simples 2027, NFS-e Nacional e LC 224/2025." },
      { property: "og:url", content: "/solucoes/reforma-tributaria" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/reforma-tributaria" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Início","item":"/"},{"@type":"ListItem","position":2,"name":"Soluções","item":"/solucoes"},{"@type":"ListItem","position":3,"name":"Reforma Tributária","item":"/solucoes/reforma-tributaria"}]}) },
      { type: "application/ld+json", children: serviceJsonLd({ name: "Reforma Tributária — IBS e CBS", description: "Diagnóstico, revisão de notas, parametrização de ERP e simulações de IBS/CBS para empresas em todos os regimes.", url: "/solucoes/reforma-tributaria" }) },
      { type: "application/ld+json", children: faqJsonLd(faqs) },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Solução"
      h1="Reforma Tributária: prepare a operação para IBS e CBS"
      lead="Antes do recolhimento, a Reforma já muda o cadastro fiscal, o XML, o contrato e o ERP."
      intro="Sua empresa pode ainda não pagar IBS e CBS, mas já pode estar emitindo notas erradas e mantendo cadastros fiscais desatualizados. A DCON conduz a preparação com método técnico, parecer fundamentado e auditoria de emissão."
      audience={["Simples, Presumido e Real", "Comércio, serviços e indústria", "E-commerce e prestadores", "Locadores PF/PJ e holdings", "Empresas com benefícios de ICMS"]}
      breadcrumbs={[{ label: "Soluções", to: "/solucoes" }, { label: "Reforma Tributária", to: "/solucoes/reforma-tributaria" }]}
      intent="reforma tributária IBS CBS, preparação Reforma Tributária empresas"
      ctaPrimary={{ label: "Diagnosticar minha empresa para a Reforma", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      ctaVariant="opportunity"
      method={dconMethod}
      pillarKey="reforma-tributaria"
      sections={[
        { h2: "O que já está em vigor em 2026", lead: "2026 é o ano para ajustar ERP, XML, cadastros, NCM, CFOP, CST, cClassTrib, códigos de serviço e rotinas internas.", h3: [
          { title: "Fase de teste CBS/IBS", body: "Documentos fiscais e apuração informativa passam a refletir os novos tributos, em regra sem recolhimento quando as obrigações acessórias são cumpridas." },
          { title: "Auditoria de emissão fiscal", body: "A nota pode ser autorizada e ainda assim estar fiscalmente incorreta. A DCON revisa NF-e, NFC-e, NFS-e, CT-e, NFCom, NF3e e BP-e." },
        ]},
        { h2: "Simples Nacional, NFS-e Nacional e decisão de 2027", h3: [
          { title: "Setembro/2026 é mês de decisão", body: "Empresas B2B do Simples precisam simular competitividade, crédito para clientes, margem e preço antes de optar pelo regime regular de IBS/CBS." },
          { title: "NFS-e Nacional", body: "ME e EPP do Simples prestadoras de serviço devem se preparar para padrão nacional, emissor web ou API, códigos de serviço, retenções e IBS/CBS." },
        ]},
        { h2: "Lucro Presumido e LC 224/2025", h3: [
          { title: "Acréscimo de 10% na presunção", body: "Aplica-se ao excedente de R$ 5 milhões/ano ou R$ 1,25 milhão/trimestre. Comércio 8% → 8,8%; serviços 32% → 35,2% sobre a parcela excedente." },
          { title: "Calendário", body: "IRPJ desde o 1º trimestre de 2026; CSLL a partir do 2º trimestre de 2026. Empresas com atividades mistas precisam ratear corretamente." },
        ]},
        { h2: "Locadores PF/PJ e holdings", h3: [
          { title: "Limite de PF", body: "Mais de 3 imóveis e receita anual > R$ 240 mil entram no radar de IBS/CBS." },
          { title: "Locação residencial", body: "Redução de 70%, com alíquota efetiva próxima de 8%, além do IR." },
          { title: "Conexão com holding", body: "Tema conversa com holding patrimonial, CIB, contratos antigos e planejamento de aluguéis." },
        ]},
        { h2: "Redução linear e benefícios onerosos", h3: [
          { title: "Redução linear federal", body: "Afeta PIS, Cofins, IRPJ, CSLL, IPI, II e CPP em hipóteses específicas. CST 06 e 07 precisam ser revisados por NCM e fundamento legal." },
          { title: "Benefícios de ICMS", body: "Crédito presumido, crédito outorgado, redução de base e regimes especiais exigem dossiê com ato concessivo, prazo, contrapartidas e documentação." },
        ]},
        { h2: "Plataforma CBS e apuração assistida", h3: [
          { title: "Apuração assistida", body: "Documentos fiscais tendem a alimentar a apuração; o desafio é garantir que o dado esteja correto desde a emissão da nota." },
          { title: "ERP e integração", body: "Revisamos parametrização, integrações e códigos para que o ERP esteja preparado quando a Plataforma CBS sair do ambiente de teste." },
        ]},
      ]}
    >
      <MethodBadge note="Preparação para a Reforma conduzida pelo protocolo DCON" />
      <FAQ items={faqs} />
      <LeadCaptureForm page="solucoes" />
    </PageScaffold>
  );
}