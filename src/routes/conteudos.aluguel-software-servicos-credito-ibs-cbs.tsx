import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";

const SLUG = "/conteudos/aluguel-software-servicos-credito-ibs-cbs";
const H1 = "Aluguel, Software e Serviços: Quando Há Crédito de IBS e CBS";
const META_TITLE = "Aluguel, software e serviços: quando há crédito de IBS/CBS";
const META_DESCRIPTION =
  "Aluguel comercial tem regra própria de crédito, e a documentação do locador pode definir se você recupera esse crédito ou não. Entenda também software e serviços contratados.";
const PUBLISHED = "17/09/2026";

const faq = [
  {
    q: "Aluguel residencial da empresa gera crédito?",
    a: "Não, segue a mesma vedação de bens de uso pessoal.",
  },
  {
    q: "Preciso exigir NFS-e do meu locador?",
    a: "Sim, é a única forma de garantir o crédito de IBS/CBS sobre o aluguel.",
  },
  {
    q: "Software por assinatura (SaaS) gera crédito?",
    a: "Segue a regra geral, se vinculado à atividade econômica da empresa e com documentação fiscal correta do fornecedor.",
  },
];

export const Route = createFileRoute("/conteudos/aluguel-software-servicos-credito-ibs-cbs")({
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
            { "@type": "ListItem", position: 3, name: H1, item: "/conteudos/aluguel-software-servicos-credito-ibs-cbs" },
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
          datePublished: "2026-09-17",
          dateModified: "2026-09-17",
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
      intro="Nem toda despesa recorrente da empresa gera crédito automaticamente. Aluguel comercial tem regra própria, e a documentação do locador pode literalmente definir se você recupera esse crédito ou não."
      breadcrumbs={[
        { label: "Insights", to: "/conteudos" },
        { label: H1, to: SLUG },
      ]}
      audience={[
        "Empresas que pagam aluguel comercial",
        "Empresas que contratam software e serviços",
        "Sócios e gestores que querem preservar créditos de IBS/CBS",
        "Contadores e consultores tributários",
      ]}
      ctaPrimary={{ label: "Solicitar auditoria de fornecedores e contratos de locação para preservar créditos", to: "/diagnostico" }}
      ctaSecondary={{ label: "Auditoria de fornecedores para preservar créditos de IBS e CBS", to: "/conteudos/auditoria-fornecedores-creditos-ibs-cbs" }}
      respostaValidada="Aluguel comercial tem crédito de IBS/CBS reduzido em 70% sobre o valor (art. 261 da LC 214/2025), mas o locatário PJ só pode aproveitá-lo se o locador emitir NFS-e. Software e serviços contratados seguem a regra geral de não cumulatividade e geram crédito quando vinculados à atividade econômica da empresa, desde que haja documentação fiscal correta do fornecedor."
      faq={faq}
      sections={[
        {
          h2: "Aluguel comercial",
          lead: "A LC 214/2025 prevê redução de 70% na alíquota de IBS/CBS sobre locação de imóveis.",
          h3: [
            {
              title: "Regra do crédito",
              body: "A Lei Complementar nº 214/2025 (art. 261) prevê redução de 70% na alíquota de IBS/CBS sobre locação de imóveis, ou seja, o imposto incide sobre só 30% do valor do aluguel. Mas o crédito para o locatário PJ depende da emissão de NFS-e pelo locador; sem essa nota, não há crédito a aproveitar, mesmo que o aluguel esteja sendo pago normalmente.",
            },
          ],
        },
        {
          h2: "O risco prático",
          lead: "Locador fora da regra pode encarecer o aluguel para o locatário.",
          h3: [
            {
              title: "Custo real do imóvel",
              body: "Locador que não se adequar, não emitir NFS-e ou não estar no regime regular se torna, na prática, mais caro para o locatário: o valor do aluguel sem crédito equivale a pagar o valor cheio, sem o desconto fiscal que o crédito representaria.",
            },
          ],
        },
        {
          h2: "Software e serviços contratados",
          lead: "Seguem a regra geral de não cumulatividade.",
          h3: [
            {
              title: "Regra geral de crédito",
              body: "Seguem a regra geral de não cumulatividade, geram crédito quando vinculados à atividade econômica da empresa, mas estão sempre condicionados à documentação fiscal correta do fornecedor.",
            },
          ],
        },
      ]}
      relatedLinks={[
        { eyebrow: "Leia também", label: "Auditoria de Fornecedores para Preservar Créditos de IBS e CBS", to: "/conteudos/auditoria-fornecedores-creditos-ibs-cbs" },
        { eyebrow: "Leia também", label: "Quais despesas geram crédito de IBS e CBS", to: "/conteudos/despesas-que-geram-credito-ibs-cbs" },
        { eyebrow: "Solução", label: "Reforma Tributária", to: "/solucoes/reforma-tributaria" },
      ]}
    >
      <section className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Base legal</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">Fonte normativa</h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            Os dispositivos citados nesta análise estão na Lei Complementar nº 214/2025, arts. 27, 57 e 261.
          </p>
        </header>
        <div className="lg:col-span-8 bg-card border border-border p-6 md:p-8">
          <p className="text-[15px] leading-relaxed text-foreground/90">
            Lei Complementar nº 214/2025, arts. 27, 57 e 261.
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Fontes oficiais: Receita Federal do Brasil — Portal da Reforma Tributária ({" "}
            <a
              href="https://www.gov.br/receitafederal/pt-br/assuntos/reforma-tributaria"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gold/50 hover:text-foreground"
            >
              https://www.gov.br/receitafederal/pt-br/assuntos/reforma-tributaria
            </a>
            ); Lei Complementar nº 214/2025.
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
