import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";
import { TechnicalReview } from "../components/TechnicalReview";

const SLUG = "/conteudos/revisao-contratos-ibs-cbs-clausulas-essenciais";
const H1 = "Revisão de Contratos para IBS e CBS: cláusulas essenciais";
const META_TITLE = "Revisão de contratos para IBS e CBS: cláusulas essenciais";
const META_DESCRIPTION =
  "Contratos de longo prazo sem cláusula de revisão tributária podem obrigar sua empresa a absorver o aumento de carga da Reforma. Veja o que revisar.";
const PUBLISHED = "14/09/2026";

const faq = [
  {
    q: "Preciso renegociar todos os meus contratos agora?",
    a: "Não necessariamente todos de uma vez. Priorize os de maior valor e prazo mais longo, que têm maior exposição ao problema.",
  },
  {
    q: "Um contrato sem cláusula de revisão tributária é nulo?",
    a: "Não. O contrato continua válido, mas fica mais frágil para negociar ajuste de preço se a carga tributária mudar de forma relevante.",
  },
  {
    q: "Isso vale só para contratos novos?",
    a: "Não, contratos já vigentes também podem ser aditados para incluir essas previsões antes da virada de 2027.",
  },
];

export const Route = createFileRoute("/conteudos/revisao-contratos-ibs-cbs-clausulas-essenciais")({
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
            { "@type": "ListItem", position: 3, name: "Revisão de Contratos para IBS e CBS: cláusulas essenciais", item: "/conteudos/revisao-contratos-ibs-cbs-clausulas-essenciais" },
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
      intro="Contratos de longo prazo assinados antes da Reforma Tributária, sem cláusula de revisão tributária, podem obrigar sua empresa a absorver o aumento de carga até o vencimento, sem mecanismo contratual para reequilibrar o preço."
      breadcrumbs={[
        { label: "Insights", to: "/conteudos" },
        { label: "Revisão de Contratos para IBS e CBS: cláusulas essenciais", to: SLUG },
      ]}
      audience={[
        "Empresas com contratos de fornecimento ou prestação de longo prazo",
        "Sócios e gestores que assinam contratos sem revisão por cláusula tributária",
        "Departamentos jurídico e fiscal que precisam adaptar contratos à Reforma",
        "Escritórios de contabilidade e advocacia tributária",
      ]}
      ctaPrimary={{ label: "Solicitar revisão jurídico-tributária dos meus contratos principais", to: "/diagnostico" }}
      ctaSecondary={{ label: "Ver Reforma Tributária", to: "/solucoes/reforma-tributaria" }}
      respostaValidada="Contratos vigentes sem cláusula de revisão tributária ficam mais expostos à Reforma Tributária, porque o aumento de carga pode precisar ser absorvido até o vencimento. A revisão prioriza contratos de maior valor e prazo, insere previsões sobre IBS/CBS e split payment e reduz a insegurança jurídica antes de 2027."
      faq={faq}
      sections={[
        {
          h2: "O que revisar nos seus contratos",
          lead: "Três pontos básicos devem constar ou ser aditados nos contratos que ultrapassem a virada de 2027.",
          h3: [
            {
              title: "Cláusula de repasse ou revisão tributária",
              body: "Cláusula de repasse ou revisão tributária, que permite ajustar o preço se a carga tributária mudar.",
            },
            {
              title: "Previsão sobre quem recolhe o tributo",
              body: "Previsão sobre quem recolhe o tributo em cada operação, especialmente relevante com a chegada futura do split payment.",
            },
            {
              title: "Referência clara a IBS e CBS",
              body: "Referência clara a IBS e CBS nos contratos que hoje só mencionam ICMS, ISS, PIS e Cofins.",
            },
          ],
        },
        {
          h2: "Silêncio contratual não é neutro",
          lead: "A ausência de cláusula não invalida o contrato, mas cria risco de disputa e pressão comercial.",
          h3: [
            {
              title: "Insegurança jurídica",
              body: "Contrato silente sobre revisão tributária não impede automaticamente o repasse do aumento de carga, mas cria insegurança jurídica e abre espaço para disputa comercial entre as partes.",
            },
            {
              title: "Prevenir é mais barato que negociar sob pressão",
              body: "É mais barato prevenir com uma cláusula clara do que negociar sob pressão em 2027, quando a mudança já estiver em vigor.",
            },
          ],
        },
        {
          h2: "Por onde começar",
          lead: "A revisão não precisa ser exaustiva: comece pelos contratos com maior impacto financeiro.",
          h3: [
            {
              title: "Contratos de maior valor e prazo",
              body: "Priorize contratos de maior valor e prazo mais longo primeiro, contratos de curto prazo têm menos exposição ao problema.",
            },
            {
              title: "Contratos com fornecedores críticos",
              body: "Revise também contratos com fornecedores críticos, já que a regularidade deles impacta diretamente seus créditos de IBS/CBS.",
            },
          ],
        },
      ]}
      relatedLinks={[
        { eyebrow: "Solução", label: "Reforma Tributária", to: "/solucoes/reforma-tributaria" },
        { eyebrow: "Solução", label: "Societário e Legalização", to: "/solucoes/societario-legalizacao" },
        { eyebrow: "Leia também", label: "Auditoria de Fornecedores para Preservar Créditos de IBS e CBS", to: "/conteudos/auditoria-fornecedores-creditos-ibs-cbs" },
      ]}
    >
      <section className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Base legal</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">Fonte normativa</h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            Dispositivo legal citado nesta análise sobre revisão contratual e Reforma Tributária.
          </p>
        </header>
        <div className="lg:col-span-8 bg-card border border-border p-6 md:p-8">
          <p className="text-[15px] leading-relaxed text-foreground/90">
            Lei Complementar nº 214/2025 (contexto geral da transição).
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Fonte oficial: Receita Federal do Brasil / Comitê Gestor do IBS.
          </p>
          <TechnicalReview />
        </div>
      </section>
    </PageScaffold>
  );
}
