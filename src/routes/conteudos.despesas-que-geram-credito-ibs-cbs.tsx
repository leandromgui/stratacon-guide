import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";

const SLUG = "/conteudos/despesas-que-geram-credito-ibs-cbs";
const H1 = "Quais Despesas Geram Crédito de IBS e CBS";
const META_TITLE = "Quais despesas geram crédito de IBS e CBS";
const META_DESCRIPTION =
  "Entenda a regra geral de crédito de IBS/CBS vinculado à atividade econômica, o que a lei exclui expressamente e por que folha de pagamento não gera crédito.";
const PUBLISHED = "14/09/2026";

const faq = [
  {
    q: "Todo insumo gera crédito automaticamente?",
    a: "Não. A regra geral é ampla, mas depende do vínculo com a atividade econômica e da inexistência de vedação expressa como a do art. 57.",
  },
  {
    q: "Bens de uso pessoal de sócios geram crédito?",
    a: "Não, em regra. O art. 57 da LC 214/2025 exclui expressamente bens e serviços de uso ou consumo pessoal, mesmo quando há destaque de IBS/CBS na nota.",
  },
  {
    q: "Por que a folha de pagamento não gera crédito?",
    a: "Porque a lei não inclui despesas com empregados na base de creditamento, diferente de insumos vinculados diretamente à atividade econômica da empresa.",
  },
];

export const Route = createFileRoute("/conteudos/despesas-que-geram-credito-ibs-cbs")({
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
            { "@type": "ListItem", position: 3, name: "Quais Despesas Geram Crédito de IBS e CBS", item: "/conteudos/despesas-que-geram-credito-ibs-cbs" },
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
      intro="A não cumulatividade plena do IBS e da CBS permite crédito amplo sobre despesas vinculadas à atividade econômica da empresa, mas isso não significa crédito irrestrito. A lei estabelece exclusões expressas, e empresas que não entenderem a regra podem tanto deixar crédito legítimo na mesa quanto tomar crédito indevido e se expor à autuação."
      breadcrumbs={[
        { label: "Insights", to: "/conteudos" },
        { label: "Quais Despesas Geram Crédito de IBS e CBS", to: SLUG },
      ]}
      audience={[
        "Empresas enquadradas no Lucro Real ou Lucro Presumido",
        "Empresas optantes do Simples Nacional que optarem pelo regime híbrido",
        "Sócios e diretores financeiros",
        "Escritórios de contabilidade que assessoram clientes sob a nova reforma",
      ]}
      ctaPrimary={{ label: "Solicitar auditoria de créditos de IBS/CBS da minha operação", to: "/diagnostico" }}
      ctaSecondary={{ label: "Ver regimes tributários", to: "/conteudos/regimes-tributarios" }}
      respostaValidada="A regra geral do crédito de IBS/CBS exige vínculo da despesa com a atividade econômica da empresa, mas a LC nº 214/2025 exclui expressamente bens e serviços de uso ou consumo pessoal (art. 57) e não reconhece folha de pagamento como geradora de crédito. Além disso, o art. 27 condiciona o crédito ao efetivo recolhimento do tributo na etapa anterior da cadeia."
      faq={faq}
      sections={[
        {
          h2: "A regra geral: vínculo com a atividade econômica",
          lead: "O novo modelo adota o crédito financeiro, com critério distinto do PIS/Cofins atual.",
          h3: [
            {
              title: "Crédito financeiro",
              body: "A LC nº 214/2025 adota o modelo de crédito financeiro: se a empresa adquire bem, serviço ou direito onerado por IBS/CBS para uso na sua atividade econômica, a tendência é haver crédito, salvo vedação expressa em lei.",
            },
            {
              title: "Mudança de critério",
              body: "Isso é diferente da lógica de essencialidade usada no PIS/Cofins atual. O critério passa a ser a vinculação da aquisição a uma operação da atividade do contribuinte.",
            },
          ],
        },
        {
          h2: "O que a lei exclui expressamente",
          lead: "O art. 57 da LC nº 214/2025 lista bens e serviços que não geram crédito, mesmo com destaque de IBS/CBS.",
          h3: [
            {
              title: "Uso ou consumo pessoal",
              body: "O art. 57 da LC nº 214/2025 lista bens e serviços de uso ou consumo pessoal que não geram crédito, entre eles: bebidas alcoólicas, veículos concedidos para uso pessoal, imóveis residenciais, e bens ou serviços fornecidos gratuitamente ou abaixo do valor de mercado a sócios, administradores ou empregados.",
            },
            {
              title: "Inversão da presunção",
              body: "O parágrafo 3º desse mesmo artigo inverte a presunção para bens e serviços utilizados principalmente na atividade econômica do contribuinte, afastando-os dessa vedação.",
            },
          ],
        },
        {
          h2: "Folha de pagamento não gera crédito",
          lead: "A exclusão concentra a discussão em setores intensivos em mão de obra.",
          h3: [
            {
              title: "Salários e encargos",
              body: "Salários, encargos e benefícios pagos a empregados não geram crédito de IBS/CBS.",
            },
            {
              title: "Impacto setorial",
              body: "Essa exclusão concentra a discussão em setores intensivos em mão de obra, como prestadores de serviços, que têm poucas despesas alternativas para compensar essa ausência de crédito.",
            },
          ],
        },
        {
          h2: "Crédito depende de pagamento efetivo na etapa anterior",
          lead: "A cadeia de crédito só é legítima se o tributo foi recolhido antes.",
          h3: [
            {
              title: "Regularidade do fornecedor",
              body: "O art. 27 da LC nº 214/2025 condiciona a extinção do débito, e portanto a legitimidade do crédito do adquirente, ao efetivo recolhimento do tributo na etapa anterior da cadeia. Isso reforça a importância de verificar a regularidade fiscal dos fornecedores antes de tomar crédito.",
            },
          ],
        },
      ]}
      relatedLinks={[
        { eyebrow: "Solução", label: "Recuperação de Créditos Tributários", to: "/solucoes/recuperacao-creditos-tributarios" },
        { eyebrow: "Solução", label: "Reforma Tributária", to: "/solucoes/reforma-tributaria" },
        { eyebrow: "Leia também", label: "Simples Puro ou Híbrido em 2027", to: "/conteudos/simples-puro-ou-hibrido-2027-como-decidir" },
      ]}
    >
      <section className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Base legal</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">Fonte normativa</h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            Os dispositivos citados nesta análise estão na Lei Complementar nº 214/2025.
          </p>
        </header>
        <div className="lg:col-span-8 bg-card border border-border p-6 md:p-8">
          <p className="text-[15px] leading-relaxed text-foreground/90">
            Lei Complementar nº 214/2025, art. 27 (condicionamento da extinção do débito e legitimidade do crédito ao recolhimento efetivo na etapa anterior da cadeia) e art. 57 (bens e serviços de uso ou consumo pessoal excluídos do crédito de IBS/CBS, com exceção do parágrafo 3º para bens e serviços usados principalmente na atividade econômica).
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Fonte oficial: Receita Federal do Brasil — Lei Complementar nº 214/2025.
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Autor: <a href="/sobre/leandro" className="underline decoration-gold/50 hover:text-foreground">Leandro Matsuoka Guimarães</a> · Publicado em {PUBLISHED}.
          </p>
        </div>
      </section>
    </PageScaffold>
  );
}
