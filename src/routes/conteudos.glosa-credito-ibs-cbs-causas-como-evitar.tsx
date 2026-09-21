import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";

const SLUG = "/conteudos/glosa-credito-ibs-cbs-causas-como-evitar";
const H1 = "Glosa de Credito de IBS e CBS: Principais Causas e Como Evitar";
const META_TITLE = "Glosa de credito de IBS e CBS: causas e prevencao";
const META_DESCRIPTION =
  "A glosa de credito de IBS/CBS pode gerar cobranca retroativa, juros e multa. Entenda as principais causas e como estruturar controles preventivos.";
const PUBLISHED = "21/09/2026";

const faq = [
  {
    q: "Se o fornecedor cometer um erro na nota, eu perco o credito?",
    a: "Pode perder, mesmo agindo de boa-fe, ja que o credito depende da regularidade formal e material da operacao anterior na cadeia.",
  },
  {
    q: "Glosa de credito de IBS/CBS afeta tambem o IRPJ e a CSLL?",
    a: "Nao automaticamente, mas pode gerar questionamento sobre a despesa correspondente, dependendo da causa da glosa.",
  },
  {
    q: "Como faco para identificar fornecedores de risco antes de um problema acontecer?",
    a: "Auditoria periodica de regularidade cadastral e historico de conformidade fiscal, priorizando fornecedores de maior volume de compra.",
  },
];

export const Route = createFileRoute("/conteudos/glosa-credito-ibs-cbs-causas-como-evitar")({
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
            { "@type": "ListItem", position: 3, name: H1, item: "/conteudos/glosa-credito-ibs-cbs-causas-como-evitar" },
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
          datePublished: "2026-09-21",
          dateModified: "2026-09-21",
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
      intro="Na nao cumulatividade do IBS e da CBS, o credito da sua empresa depende da regularidade de toda a cadeia, nao so do seu proprio controle interno. Isso muda o perfil de risco: um erro do fornecedor, um documento mal preenchido ou uma classificacao incorreta pode custar credito que a empresa já contava para o caixa."
      breadcrumbs={[
        { label: "Insights", to: "/conteudos" },
        { label: H1, to: SLUG },
      ]}
      ctaPrimary={{ label: "Solicitar auditoria preventiva de creditos e fornecedores", to: "/diagnostico" }}
      faq={faq}
      sections={[
        {
          h2: "Principais causas de glosa",
          lead: "O credito de IBS/CBS pode ser glosado por problemas no documento fiscal, na operacao ou na cadeia de fornecedores.",
          h3: [
            {
              title: "Documento fiscal inidoneo ou com dados incorretos",
              body: "nota emitida contra CNPJ errado, ou operacao que nao corresponde ao documento.",
            },
            {
              title: "Falta de destaque correto de IBS/CBS",
              body: "quando o fornecedor nao discrimina os valores corretamente na nota.",
            },
            {
              title: "Credito em duplicidade",
              body: "apropriacao do mesmo documento mais de uma vez, comum em falhas de integracao de sistemas.",
            },
            {
              title: "Operacao cancelada sem estorno",
              body: "credito mantido mesmo apos o cancelamento da nota fiscal original.",
            },
            {
              title: "Compra de fornecedor do Simples Nacional",
              body: "credito calculado pela aliquota cheia quando deveria ser limitado ao valor efetivamente transferido pelo regime simplificado.",
            },
            {
              title: "Uso ou consumo pessoal",
              body: "despesas de socios ou administradores lancadas como despesa da empresa.",
            },
            {
              title: "Ausencia de vinculo entre pagamento e documento fiscal",
              body: "falta de conciliacao entre o que foi pago e a nota correspondente.",
            },
          ],
        },
        {
          h2: "Consequencias reais de uma glosa",
          lead: "Quando um credito e glosado, o impacto vai alem do valor questionado.",
          h3: [
            {
              title: "Recomposicao do debito com juros e multa",
              body: "A empresa pode enfrentar recomposicao do debito de IBS/CBS, juros, multa e reducao do saldo credor acumulado.",
            },
            {
              title: "Indeferimento de ressarcimento ja solicitado",
              body: "A glosa tambem pode levar ao indeferimento de pedidos de ressarcimento ja solicitados.",
            },
            {
              title: "Impacto na dedutibilidade para IRPJ e CSLL",
              body: "Em casos de fiscalizacao, a glosa pode gerar questionamentos sobre a dedutibilidade da despesa para IRPJ e CSLL.",
            },
          ],
        },
        {
          h2: "Como reduzir o risco de glosa",
          lead: "Controles preventivos reduzem a incidencia de glosas e o custo de correcao posterior.",
          h3: [
            {
              title: "Validar a regularidade cadastral dos fornecedores",
              body: "antes de fechar contratos relevantes.",
            },
            {
              title: "Conferir se o documento fiscal reflete a operacao",
              body: "verificar se o documento fiscal corresponde corretamente a operacao realizada.",
            },
            {
              title: "Manter conciliacao entre pagamento e nota fiscal",
              body: "evitando lancamentos sem vinculo claro.",
            },
            {
              title: "Separar despesas pessoais das despesas da empresa",
              body: "com politica clara de reembolso para socios e administradores.",
            },
            {
              title: "Auditar periodicamente os fornecedores de maior volume",
              body: "priorizando aqueles que representam maior parcela das compras.",
            },
          ],
        },
      ]}
      relatedLinks={[
        { eyebrow: "Leia também", label: "Auditoria de Fornecedores para Preservar Créditos de IBS e CBS", to: "/conteudos/auditoria-fornecedores-creditos-ibs-cbs" },
        { eyebrow: "Leia também", label: "Lucro Real na Reforma Tributária: créditos, controles e risco fiscal", to: "/conteudos/lucro-real-reforma-tributaria-creditos-controles" },
      ]}
    >
      <section className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Base legal</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">Fonte normativa</h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            Dispositivos legais citados nesta analise sobre glosa de credito de IBS e CBS.
          </p>
        </header>
        <div className="lg:col-span-8 bg-card border border-border p-6 md:p-8">
          <p className="text-[15px] leading-relaxed text-foreground/90">
            Lei Complementar no 214/2025, arts. 47 a 57; Lei Complementar no 227/2026.
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Fonte oficial: Receita Federal do Brasil / Comitê Gestor do IBS.
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Revisão técnica:{" "}
            <a href="/sobre/leandro/" className="underline decoration-gold/50 hover:text-foreground">
              Leandro Matsuoka Guimarães
            </a>
            , sócio-fundador e diretor técnico da DCON. Contador com 22 anos de experiência, bacharel em Direito e pós-graduado em Controladoria e Finanças Corporativas. CRC-GO 16.395/O-9.
          </p>
        </div>
      </section>
    </PageScaffold>
  );
}
