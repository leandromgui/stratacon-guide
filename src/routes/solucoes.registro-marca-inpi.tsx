import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { getDoc } from "../lib/dcon-content";
import { FAQ, faqJsonLd, serviceJsonLd, type FAQItem } from "../components/FAQ";
import { LeadCaptureForm } from "../components/LeadCaptureForm";
import { MethodBadge } from "../components/MethodBadge";
import { dconMethod } from "../lib/dconMethod";
import { buildSeoHead } from "@/lib/seo";

const faqs: FAQItem[] = [
  { q: "Meu CNPJ já protege minha marca?", a: "Não. CNPJ identifica a pessoa jurídica; nome empresarial identifica a sociedade; domínio protege endereço digital; perfil em rede social protege usuário na plataforma. A proteção nacional da marca no ramo de atividade depende de registro no INPI." },
  { q: "Em qual classe devo registrar?", a: "A Classificação de Nice tem 45 classes. A escolha depende da atividade real, do plano de expansão e do risco de conflito com marcas existentes — exige consulta de viabilidade prévia." },
  { q: "Marca pode ficar na minha holding?", a: "Sim. A titularidade pode ser PF, empresa operacional ou holding, conforme estratégia societária, sucessória e de valuation. Marca registrada em holding é blindagem de ativo intangível." },
  { q: "Marca registrada aumenta o valuation?", a: "Sim. Marca registrada dá segurança em venda de empresa, franquia, licenciamento, expansão, sucessão e entrada de sócios." },
];

export const Route = createFileRoute("/solucoes/registro-marca-inpi")({
  head: () => ({
    ...buildSeoHead({
      title: "Registro de Marca no INPI: Proteção e Valuation | DCON",
      description: "Você pode estar investindo em uma marca que ainda não é juridicamente sua. Registro no INPI com estratégia de classe, titularidade e ativo intangível.",
      canonical: "/solucoes/registro-marca-inpi",
    }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Início","item":"/"},{"@type":"ListItem","position":2,"name":"Soluções","item":"/solucoes"},{"@type":"ListItem","position":3,"name":"Registro de Marca INPI","item":"/solucoes/registro-marca-inpi"}]}) },
      { type: "application/ld+json", children: serviceJsonLd({ name: "Registro de Marca no INPI", description: "Diagnóstico, viabilidade, estratégia de titularidade e classes — proteção de marca como ativo intangível.", url: "/solucoes/registro-marca-inpi" }) },
      { type: "application/ld+json", children: faqJsonLd(faqs) },
    ],
  }),
  component: Page,
});

const docDcon = getDoc(17);

function Page() {
  return (
    <PageScaffold
      eyebrow="Solução"
      h1={docDcon.h1}
      intro={docDcon.fraseComercial}
      intent="registro de marca INPI, proteção de marca empresa"
      audience={docDcon.audience}
      ctaPrimary={docDcon.ctas[0]}
      ctaSecondary={docDcon.ctas[1]}
      ctaTertiary={docDcon.ctas[2]}
      respostaValidada={docDcon.respostaValidada}
      pillarKey="registro-marca-inpi"
      method={dconMethod}
      ctaVariant="opportunity"
      sections={[
        { h2: "CNPJ, domínio e Instagram não substituem INPI", h3: [
          { title: "Camadas distintas", body: "CNPJ identifica a PJ; nome empresarial identifica a sociedade; domínio protege endereço digital; perfil protege usuário na plataforma — só o INPI protege a marca." },
        ]},
        { h2: "Classe correta e titularidade estratégica", h3: [
          { title: "Classificação de Nice", body: "A marca precisa ser protegida nas classes corretas. Erro de classe pode invalidar a proteção." },
          { title: "Titularidade PF, PJ ou holding", body: "Estratégia societária, sucessória e patrimonial determina onde a marca deve ficar." },
        ]},
        { h2: "Marca e valuation", h3: [
          { title: "Ativo intangível", body: "Marca registrada aumenta segurança em venda, franquia, licenciamento, expansão, sucessão e entrada de sócios." },
        ]},
      ]}
    >
      <MethodBadge note="Registro de marca conduzido pelo protocolo DCON" />
      <FAQ items={faqs} />
      <LeadCaptureForm page="solucoes" />
    </PageScaffold>
  );
}