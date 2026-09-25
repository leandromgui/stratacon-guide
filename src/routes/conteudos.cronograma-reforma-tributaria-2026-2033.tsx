import { createFileRoute, Link } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";

const SLUG = "/conteudos/cronograma-reforma-tributaria-2026-2033";
const H1 = "Cronograma da Reforma Tributária: o que muda a cada ano, de 2026 a 2033";
const META_TITLE = "Cronograma da Reforma Tributária 2026-2033";
const META_DESCRIPTION =
  "Entenda ano a ano o cronograma da Reforma Tributária, de 2026 a 2033: teste, CBS plena, split payment, transição de ICMS/ISS e sistema pleno.";
const PUBLISHED = "14/09/2026";

const faq = [
  {
    q: "A cobrança da reforma já começou?",
    a: "Sim, mas em fase de teste desde 2026, com alíquotas simbólicas. A cobrança real começa em 2027 (CBS) e escala gradualmente até 2033 (IBS pleno).",
  },
  {
    q: "ICMS e ISS acabam de uma vez?",
    a: "Não. Eles são reduzidos progressivamente entre 2029 e 2032, convivendo com o IBS nesse período, até serem extintos em 2033.",
  },
  {
    q: "A alíquota de 26,5% já está definida?",
    a: "Não. É uma estimativa do Ministério da Fazenda, sujeita a confirmação por resolução do Senado.",
  },
];

export const Route = createFileRoute("/conteudos/cronograma-reforma-tributaria-2026-2033")({
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
            { "@type": "ListItem", position: 3, name: "Cronograma da Reforma Tributária 2026 a 2033", item: "https://dcon.cnt.br/conteudos/cronograma-reforma-tributaria-2026-2033/" },
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
      intro="A Reforma Tributária não é um evento único em 2027, é uma transição de 8 anos, com regras diferentes em cada fase. Tratar 'a reforma' como um bloco único é o erro mais comum: o que importa em 2026 (adaptar sistemas e documentos fiscais) é diferente do que importa em 2027 (precificar sem PIS/Cofins) e do que importa em 2029 (benefícios de ICMS reduzindo ano a ano)."
      breadcrumbs={[
        { label: "Insights", to: "/conteudos" },
        { label: "Cronograma da Reforma Tributária 2026 a 2033", to: SLUG },
      ]}
      audience={[
        "Sócios e diretores planejando a transição tributária",
        "Empresas B2B com operações sujeitas a CBS e IBS",
        "Equipes fiscais e financeiras em adequação de ERP",
        "Empresas dos regimes Simples Nacional, Presumido e Real",
      ]}
      ctaPrimary={{ label: "Agendar diagnóstico de prontidão para a Reforma Tributária", to: "/diagnostico" }}
      ctaSecondary={{ label: "Ver solução de reforma tributária", to: "/solucoes/reforma-tributaria" }}
      respostaValidada="A Reforma Tributária é uma transição de 2026 a 2033: 2026 é de testes com alíquotas simbólicas; 2027 marca a CBS plena e o fim de PIS/Cofins; 2028 inicia o split payment obrigatório para B2B; 2029 a 2032 são anos de convivência entre ICMS/ISS e IBS; e 2033 é o sistema pleno, com extinção de ICMS e ISS."
      faq={faq}
      sections={[
        {
          h2: "Linha do tempo ano a ano",
          h3: [
            {
              title: "2026 — Ano de testes",
              body: "CBS e IBS entram em vigor com alíquotas simbólicas (CBS 0,9% + IBS 0,1%), destacadas nos documentos fiscais. O valor é compensável, e quem cumprir as obrigações acessórias corretamente pode ser dispensado do recolhimento efetivo. PIS, Cofins, ICMS e ISS continuam sendo cobrados normalmente. O foco do ano é adaptação de sistemas e documentos fiscais, não carga tributária.",
            },
            {
              title: "2027 — CBS plena, fim de PIS/Cofins",
              body: "A CBS passa a ser cobrada de fato, com alíquota de referência estimada. PIS e Cofins são extintos. O Imposto Seletivo também entra em vigor. O IBS segue com alíquota de referência baixa (0,1% para os fatos geradores de 2027-2028). ICMS e ISS continuam sem alteração na forma tradicional.",
            },
            {
              title: "2028 — Split payment",
              body: (
                <>
                  Início gradual e obrigatório do{" "}
                  <Link
                    to="/conteudos/split-payment-adiado-2028-o-que-muda"
                    className="underline decoration-gold/50 hover:text-foreground"
                  >
                    split payment
                  </Link>{" "}
                  para operações B2B, a retenção automática do tributo no momento da liquidação financeira. ICMS e ISS seguem vigentes.
                </>
              ),
            },
            {
              title: "2029 a 2032 — A transição mais longa",
              body: "Começa a redução progressiva e anual de ICMS e ISS, com aumento proporcional do IBS na mesma medida. É o período de convivência simultânea entre os dois sistemas, a fase operacionalmente mais complexa, com dupla apuração e benefícios fiscais estaduais em extinção programada.",
            },
            {
              title: "2033 — Sistema pleno",
              body: "ICMS e ISS são formalmente extintos. O IBS opera em regime pleno, junto com a CBS já consolidada desde 2027.",
            },
          ],
        },
        {
          h2: "A alíquota de referência estimada",
          lead: "O Ministério da Fazenda estima uma alíquota de referência somada de cerca de 26,5% (17,7% IBS + 8,8% CBS), mas é uma estimativa, não um valor definitivo em lei. O número final depende de resolução do Senado e será reavaliado periodicamente.",
        },
        {
          h2: "Por que tratar cada ano como um projeto distinto",
          lead: "Empresas que só vão se adaptar quando a regra entrar em vigor enfrentam três riscos concretos: custo de TI emergencial mais caro que um projeto planejado, notas fiscais rejeitadas por sistemas desatualizados, e multas por obrigações acessórias entregues fora do prazo.",
        },
      ]}
      relatedLinks={[
        { eyebrow: "Solução", label: "Reforma Tributária", to: "/solucoes/reforma-tributaria" },
        { eyebrow: "Leia também", label: "Split Payment adiado para 2028", to: "/conteudos/split-payment-adiado-2028-o-que-muda" },
        { eyebrow: "Próximo passo", label: "Solicitar diagnóstico", to: "/diagnostico" },
      ]}
    >
      <section className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Base legal</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">Fonte normativa</h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            Os dispositivos citados nesta análise estão na Emenda Constitucional nº 132/2023 e na Lei Complementar nº 214/2025.
          </p>
        </header>
        <div className="lg:col-span-8 bg-card border border-border p-6 md:p-8">
          <p className="text-[15px] leading-relaxed text-foreground/90">
            Emenda Constitucional nº 132/2023. Lei Complementar nº 214/2025, arts. 344, 347, 348 e parágrafo 1º.
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
