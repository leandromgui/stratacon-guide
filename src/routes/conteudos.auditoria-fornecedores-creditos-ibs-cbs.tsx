import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";

const SLUG = "/conteudos/auditoria-fornecedores-creditos-ibs-cbs";
const H1 = "Auditoria de Fornecedores para Preservar Créditos de IBS e CBS";
const META_TITLE = "Auditoria de fornecedores para preservar créditos de IBS e CBS";
const META_DESCRIPTION =
  "Na não cumulatividade do IBS/CBS, o crédito da sua empresa depende da regularidade fiscal do fornecedor. Veja como auditar sua cadeia para não perder crédito.";
const PUBLISHED = "14/09/2026";

const faq = [
  {
    q: "Se meu fornecedor não pagar o imposto dele, eu perco o crédito?",
    a: "A regra geral protege o tomador de boa-fé, desde que a operação seja real e a nota esteja formalmente correta. Fraude ou irregularidade formal compromete o crédito.",
  },
  {
    q: "Como saber se um fornecedor do Simples Nacional vai gerar crédito para mim?",
    a: "Depende se ele optou pelo Simples Puro (sem crédito) ou pelo regime híbrido (com crédito integral). Vale confirmar essa informação antes de fechar contratos relevantes.",
  },
  {
    q: "Vale a pena trocar de fornecedor por causa disso?",
    a: "Depende do volume envolvido. Para fornecedores de alto volume de compra, o risco de glosa de crédito pode justificar a troca ou a exigência de regularização.",
  },
];

export const Route = createFileRoute("/conteudos/auditoria-fornecedores-creditos-ibs-cbs")({
  head: () => ({
    ...buildSeoHead({
      title: META_TITLE,
      description: META_DESCRIPTION,
      canonical: SLUG,
      ogType: "article",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: "/" },
            { "@type": "ListItem", position: 2, name: "Insights", item: "/conteudos" },
            { "@type": "ListItem", position: 3, name: "Auditoria de Fornecedores para Preservar Créditos de IBS e CBS", item: "/conteudos/auditoria-fornecedores-creditos-ibs-cbs" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: H1,
          description: META_DESCRIPTION,
          author: { "@id": `${SITE_URL}/sobre/leandro#leandro` },
          publisher: { "@type": "Organization", name: "DCON Serviços Contábeis", url: SITE_URL },
          datePublished: "2026-09-14",
          dateModified: "2026-09-14",
          url: `${SITE_URL}${SLUG}`,
          mainEntityOfPage: `${SITE_URL}${SLUG}`,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(LEANDRO_PERSON_JSONLD),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow={`Reforma tributária · ${PUBLISHED}`}
      h1={H1}
      intro="Na não cumulatividade plena do IBS e da CBS, o crédito da sua empresa depende diretamente da regularidade fiscal de quem está do outro lado da nota. Fornecedor irregular ou nota mal preenchida não é só problema dele, é crédito que a sua empresa perde."
      breadcrumbs={[
        { label: "Insights", to: "/conteudos" },
        { label: "Auditoria de Fornecedores para Preservar Créditos de IBS e CBS", to: SLUG },
      ]}
      audience={[
        "Empresas no Lucro Real ou em regimes com apuração de créditos",
        "Compradores e gestores de cadeia de suprimentos",
        "Sócios e gestores financeiros que monitoram margem tributária",
        "Escritórios de contabilidade que assessoram empresas sob a nova reforma",
      ]}
      ctaPrimary={{ label: "Solicitar auditoria de fornecedores críticos da minha operação", to: "/diagnostico" }}
      ctaSecondary={{ label: "Ver departamento fiscal", to: "/solucoes/departamento-fiscal" }}
      respostaValidada="Na não cumulatividade plena do IBS/CBS, o crédito do adquirente depende da regularidade fiscal do fornecedor e da correta emissão da nota fiscal. Nota mal preenchida ou fornecedor irregular pode gerar glosa de crédito na ponta do comprador, mesmo quando a operação é legítima e feita de boa-fé."
      faq={faq}
      sections={[
        {
          h2: "Como o risco muda de fornecedor para adquirente",
          lead: "O risco fiscal deixa de estar só no lado de quem vende e passa a afetar diretamente quem compra.",
          h3: [
            {
              title: "Glosa de crédito no adquirente",
              body: "Fornecedor que não destaca corretamente IBS/CBS na nota, ou que está com cadastro irregular, gera glosa de crédito no adquirente, mesmo quando a compra é legítima e feita de boa-fé.",
            },
            {
              title: "Novo critério de escolha de fornecedores",
              body: "Isso muda a lógica de escolha de fornecedores: preço baixo com risco fiscal alto pode custar mais caro do que preço um pouco maior com fornecedor regular.",
            },
          ],
        },
        {
          h2: "O que auditar na prática",
          lead: "Auditoria de fornecedores no IBS/CBS exige mapeamento por volume, regularidade cadastral e capacidade de emissão de nota fiscal correta.",
          h3: [
            {
              title: "Mapear por volume de gasto",
              body: "Mapear fornecedores por volume de gasto, priorizando os que representam maior parcela das compras. O impacto de uma glosa é proporcional à relevância do fornecedor na operação.",
            },
            {
              title: "Verificar regularidade cadastral",
              body: "Verificar regularidade cadastral de cada um. Situações inativas, pendências fiscais ou divergências de CNAE podem comprometer o direito ao crédito.",
            },
            {
              title: "Confirmar emissão de nota fiscal com IBS/CBS",
              body: "Confirmar que o layout de emissão de nota fiscal do fornecedor já contempla os campos de IBS/CBS. Nota sem o destaque correto pode inviabilizar o crédito.",
            },
            {
              title: "Priorizar conformidade, não só preço",
              body: "Priorizar fornecedores com histórico de conformidade fiscal, não apenas o menor preço nominal. O custo real inclui o risco de perda de crédito tributário.",
            },
          ],
        },
        {
          h2: "A boa-fé protege, mas tem limite",
          lead: "O tomador de boa-fé está protegido, mas a proteção depende da regularidade formal da nota e do emitente.",
          h3: [
            {
              title: "Condição da boa-fé",
              body: "A não cumulatividade protege o tomador de boa-fé, desde que a nota fiscal esteja correta e o cadastro do fornecedor seja regular.",
            },
            {
              title: "Irregularidade formal e fraude",
              body: "Quando há fraude ou irregularidade formal, como nota inidônea, o crédito é glosado na ponta do adquirente, independentemente da intenção.",
            },
          ],
        },
      ]}
      relatedLinks={[
        { eyebrow: "Solução", label: "Departamento Fiscal", to: "/solucoes/departamento-fiscal" },
        { eyebrow: "Solução", label: "Recuperação de Créditos Tributários", to: "/solucoes/recuperacao-creditos-tributarios" },
        { eyebrow: "Leia também", label: "Quais Despesas Geram Crédito de IBS e CBS", to: "/conteudos/despesas-que-geram-credito-ibs-cbs" },
      ]}
    >
      <section className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Base legal</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">Fonte normativa</h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            Dispositivo legal citado nesta análise sobre auditoria de fornecedores e créditos de IBS/CBS.
          </p>
        </header>
        <div className="lg:col-span-8 bg-card border border-border p-6 md:p-8">
          <p className="text-[15px] leading-relaxed text-foreground/90">
            Lei Complementar nº 214/2025 (Reforma Tributária do Consumo: não cumulatividade e regras de crédito).
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Fonte oficial: Receita Federal do Brasil / Comitê Gestor do IBS.
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          Revisao tecnica:{" "}
          <a href="/sobre/leandro/" className="underline decoration-gold/50 hover:text-foreground">
            Leandro Matsuoka Guimaraes
          </a>
          , socio-fundador e diretor tecnico da DCON. Contador com 22 anos de experiencia, bacharel em Direito e pos-graduado em Controladoria e Financas Corporativas. CRC-GO 16.395/O-9.
        </p>
        </div>
      </section>
    </PageScaffold>
  );
}
