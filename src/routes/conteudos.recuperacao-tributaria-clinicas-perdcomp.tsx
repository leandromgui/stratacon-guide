import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";

const SLUG = "/conteudos/recuperacao-tributaria-clinicas-perdcomp";
const H1 = "Recuperação Tributária para Clínicas: Como Funciona o PER/DCOMP";
const META_DESCRIPTION =
  "Entenda a sequência técnica de retificação, apuração e transmissão do PER/DCOMP para recuperar tributos pagos a maior por clínicas médicas e odontológicas.";

export const Route = createFileRoute("/conteudos/recuperacao-tributaria-clinicas-perdcomp")({
  head: () => ({
    ...buildSeoHead({
      title: H1,
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
            { "@type": "ListItem", position: 3, name: H1, item: `https://dcon.cnt.br${SLUG}/` },
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
          datePublished: "2026-09-25",
          dateModified: "2026-09-25",
          url: `${SITE_URL}${SLUG}`,
          mainEntityOfPage: `${SITE_URL}${SLUG}`,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(LEANDRO_PERSON_JSONLD),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Tributário · 25/09/2026"
      h1={H1}
      intro='Clínicas médicas e odontológicas frequentemente pagam tributos a maior (PIS/COFINS, IRPJ/CSLL) por erro de enquadramento, falta de aproveitamento de créditos ou equívocos na apuração. Recuperar esses valores exige um processo técnico e sequencial — não é só "pedir a restituição".'
      breadcrumbs={[
        { label: "Insights", to: "/conteudos" },
        { label: "Recuperação Tributária para Clínicas", to: SLUG },
      ]}
      ctaPrimary={{ label: "Solicitar diagnóstico de recuperação tributária", to: "/diagnostico" }}
      ctaSecondary={{ label: "Conhecer a recuperação de créditos tributários", to: "/solucoes/recuperacao-creditos-tributarios" }}
      ctaVariant="opportunity"
      sections={[
        {
          h2: "O erro mais comum: pedir a compensação antes de corrigir a origem",
          lead: "O processo correto começa pela retificação das obrigações acessórias que contêm o erro original — EFD-Contribuições, ECF e DCTF. Sem essa etapa, o crédito apurado fica inconsistente com o que foi declarado ao Fisco, gerando risco de glosa.",
          h3: [
            {
              title: "Coerência entre o crédito e as declarações",
              body: "A Receita Federal frequentemente indefere PER/DCOMP quando há divergência entre o crédito pleiteado e as obrigações acessórias vigentes. A correção da origem deve anteceder o pedido de compensação para que os valores declarados sustentem o crédito apurado.",
            },
          ],
        },
        {
          h2: "A sequência técnica correta: retificação → apuração → PER/DCOMP",
          h3: [
            {
              title: "Retificar antes de compensar",
              body: "As obrigações acessórias do período do crédito devem ser retificadas primeiro.",
            },
            {
              title: "Apuração documentada do crédito",
              body: "A apuração deve ser acompanhada de memória de cálculo com base legal, período de apuração e natureza do tributo.",
            },
            {
              title: "Transmissão do PER/DCOMP",
              body: "A transmissão ocorre somente depois da retificação e da apuração documentada, com os créditos já refletidos nas obrigações acessórias retificadas.",
            },
          ],
        },
        {
          h2: "O que fazer quando o PER/DCOMP é indeferido: manifestação de inconformidade",
          lead: "O contribuinte tem prazo de 30 dias da ciência do despacho decisório para apresentar manifestação de inconformidade, com efeito suspensivo da cobrança, conforme o Decreto nº 70.235/1972. Perder esse prazo torna o débito imediatamente exigível.",
          content: (
            <aside className="border-l-2 border-gold bg-card p-6 text-foreground/90">
              A DCON estrutura a sequência retificação → apuração → compensação para reduzir o risco de glosa e indeferimento.
            </aside>
          ),
        },
      ]}
      relatedLinks={[
        { eyebrow: "Solução", label: "Recuperação de Créditos Tributários", to: "/solucoes/recuperacao-creditos-tributarios" },
        { eyebrow: "Segmento", label: "Médicos e Clínicas", to: "/segmentos/medicos-clinicas" },
        { eyebrow: "Leia também", label: "Reforma Tributária para Clínicas Médicas", to: "/conteudos/reforma-tributaria-clinicas-medicas-o-que-muda" },
      ]}
    >
      <section className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Responsabilidade técnica</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">Revisão do conteúdo</h2>
        </header>
        <div className="lg:col-span-8 bg-card border border-border p-6 md:p-8">
          <p className="text-sm text-muted-foreground leading-relaxed">
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