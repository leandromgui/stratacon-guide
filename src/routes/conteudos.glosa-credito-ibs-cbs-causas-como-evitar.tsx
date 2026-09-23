import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";

const SLUG = "/conteudos/glosa-credito-ibs-cbs-causas-como-evitar";
const H1 = "Glosa de Crédito de IBS e CBS: Principais Causas e Como Evitar";
const META_TITLE = "Glosa de crédito de IBS e CBS: causas e prevenção";
const META_DESCRIPTION =
  "A glosa de crédito de IBS/CBS pode gerar cobrança retroativa, juros e multa. Entenda as principais causas e como estruturar controles preventivos.";
const PUBLISHED = "21/09/2026";

const faq = [
  {
    q: "Se o fornecedor cometer um erro na nota, eu perco o crédito?",
    a: "Pode perder, mesmo agindo de boa-fé, já que o crédito depende da regularidade formal e material da operação anterior na cadeia.",
  },
  {
    q: "Glosa de crédito de IBS/CBS afeta também o IRPJ e a CSLL?",
    a: "Não automaticamente, mas pode gerar questionamento sobre a despesa correspondente, dependendo da causa da glosa.",
  },
  {
    q: "Como faço para identificar fornecedores de risco antes de um problema acontecer?",
    a: "Auditoria periódica de regularidade cadastral e histórico de conformidade fiscal, priorizando fornecedores de maior volume de compra.",
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
            { "@type": "ListItem", position: 1, name: "Início", item: "https://dcon.cnt.br/" },
            { "@type": "ListItem", position: 2, name: "Insights", item: "https://dcon.cnt.br/conteudos/" },
            { "@type": "ListItem", position: 3, name: H1, item: "https://dcon.cnt.br/conteudos/glosa-credito-ibs-cbs-causas-como-evitar/" },
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
      intro="Na não cumulatividade do IBS e da CBS, o crédito da sua empresa depende da regularidade de toda a cadeia, não só do seu próprio controle interno. Isso muda o perfil de risco: um erro do fornecedor, um documento mal preenchido ou uma classificação incorreta pode custar crédito que a empresa já contava para o caixa."
      breadcrumbs={[
        { label: "Insights", to: "/conteudos" },
        { label: H1, to: SLUG },
      ]}
      ctaPrimary={{ label: "Solicitar auditoria preventiva de créditos e fornecedores", to: "/diagnostico" }}
      faq={faq}
      sections={[
        {
          h2: "Principais causas de glosa",
          lead: "O crédito de IBS/CBS pode ser glosado por problemas no documento fiscal, na operação ou na cadeia de fornecedores.",
          h3: [
            {
              title: "Documento fiscal inidôneo ou com dados incorretos",
              body: "nota emitida contra CNPJ errado, ou operação que não corresponde ao documento.",
            },
            {
              title: "Falta de destaque correto de IBS/CBS",
              body: "quando o fornecedor não discrimina os valores corretamente na nota.",
            },
            {
              title: "Crédito em duplicidade",
              body: "apropriação do mesmo documento mais de uma vez, comum em falhas de integração de sistemas.",
            },
            {
              title: "Operação cancelada sem estorno",
              body: "crédito mantido mesmo após o cancelamento da nota fiscal original.",
            },
            {
              title: "Compra de fornecedor do Simples Nacional",
              body: "crédito calculado pela alíquota cheia quando deveria ser limitado ao valor efetivamente transferido pelo regime simplificado.",
            },
            {
              title: "Uso ou consumo pessoal",
              body: "despesas de sócios ou administradores lançadas como despesa da empresa.",
            },
            {
              title: "Ausência de vínculo entre pagamento e documento fiscal",
              body: "falta de conciliação entre o que foi pago e a nota correspondente.",
            },
          ],
        },
        {
          h2: "Consequências reais de uma glosa",
          lead: "Quando um crédito é glosado, o impacto vai além do valor questionado.",
          h3: [
            {
              title: "Recomposição do débito com juros e multa",
              body: "A empresa pode enfrentar recomposição do débito de IBS/CBS, juros, multa e redução do saldo credor acumulado.",
            },
            {
              title: "Indeferimento de ressarcimento já solicitado",
              body: "A glosa também pode levar ao indeferimento de pedidos de ressarcimento já solicitados.",
            },
            {
              title: "Impacto na dedutibilidade para IRPJ e CSLL",
              body: "Em casos de fiscalização, a glosa pode gerar questionamentos sobre a dedutibilidade da despesa para IRPJ e CSLL.",
            },
          ],
        },
        {
          h2: "Como reduzir o risco de glosa",
          lead: "Controles preventivos reduzem a incidência de glosas e o custo de correção posterior.",
          h3: [
            {
              title: "Validar a regularidade cadastral dos fornecedores",
              body: "antes de fechar contratos relevantes.",
            },
            {
              title: "Conferir se o documento fiscal reflete a operação",
              body: "verificar se o documento fiscal corresponde corretamente à operação realizada.",
            },
            {
              title: "Manter conciliação entre pagamento e nota fiscal",
              body: "evitando lançamentos sem vínculo claro.",
            },
            {
              title: "Separar despesas pessoais das despesas da empresa",
              body: "com política clara de reembolso para sócios e administradores.",
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
            Dispositivos legais citados nesta análise sobre glosa de crédito de IBS e CBS.
          </p>
        </header>
        <div className="lg:col-span-8 bg-card border border-border p-6 md:p-8">
          <p className="text-[15px] leading-relaxed text-foreground/90">
            Lei Complementar nº 214/2025, arts. 47 a 57; Lei Complementar nº 227/2026.
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
