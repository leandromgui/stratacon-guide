import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";

const SLUG = "/conteudos/beneficio-fiscal-ecommerce-goias";
const H1 = "Benefício fiscal para e-commerce em Goiás: crédito outorgado, TARE e requisitos";
const META_TITLE = "Benefício Fiscal para E-commerce em Goiás: TARE e ICMS | DCON";
const META_DESCRIPTION =
  "Entenda o crédito outorgado para e-commerce em Goiás, a carga própria de ICMS, os requisitos do TARE, investimentos, DIFAL e riscos fiscais.";

const faq: { q: string; a: string }[] = [
  {
    q: "Todo e-commerce em Goiás tem direito ao crédito outorgado?",
    a: "Não automaticamente. A elegibilidade depende do perfil das vendas, dos produtos, do TARE e do cumprimento das condições legais.",
  },
  {
    q: "Marketplaces podem usar o benefício?",
    a: "Depende da estrutura operacional e de como as vendas são realizadas - é necessário analisar caso a caso conforme os requisitos da lei.",
  },
  {
    q: "O benefício elimina o DIFAL?",
    a: "Não. O DIFAL e o FCP devidos ao Estado de destino continuam sendo calculados separadamente.",
  },
  {
    q: "Preciso investir para manter o benefício?",
    a: "Sim. A lei exige investimento mínimo de 15% do crédito outorgado estimado para os primeiros 36 meses de fruição.",
  },
  {
    q: "E-commerce híbrido (loja física e virtual) pode usar o benefício?",
    a: "Pode ser avaliado, mas a exigência de exclusividade só pode ser afastada mediante previsão expressa no TARE.",
  },
  {
    q: "Qual a diferença entre o benefício de e-commerce e o de atacadista em Goiás?",
    a: "O benefício de e-commerce é para vendas B2C não presenciais a consumidor final. Atacadistas seguem outras regras do Anexo IX voltadas a operações B2B.",
  },
];

export const Route = createFileRoute("/conteudos/beneficio-fiscal-ecommerce-goias")({
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
          datePublished: "2026-09-23",
          dateModified: "2026-09-23",
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
      eyebrow="Tributário · 23/09/2026"
      h1={H1}
      intro="A Lei estadual nº 21.555/2022 criou benefício direcionado ao estabelecimento comercial que realize exclusivamente operações interestaduais, não presenciais, pela internet, destinadas a consumidor final, não contribuinte do ICMS. A lei autoriza crédito outorgado de até 80,5% do ICMS próprio da operação e liquidação escritural do ICMS devido na importação de mercadorias destinadas às operações incentivadas."
      breadcrumbs={[
        { label: "Insights", to: "/conteudos" },
        { label: "Benefício fiscal para e-commerce em Goiás", to: SLUG },
      ]}
      ctaPrimary={{ label: "Solicitar diagnóstico de elegibilidade para benefícios fiscais no e-commerce", to: "/diagnostico" }}
      faq={faq}
      ctaVariant="opportunity"
      sections={[
        {
          h2: "Como funcionam os percentuais de 41,5% e 80,5%?",
          content: (
            <div className="space-y-5">
              <h3 className="font-display text-xl text-foreground">Crédito outorgado e ICMS próprio remanescente</h3>
              <p>O Decreto nº 10.201/2023 regulamentou o benefício no inciso LXXVI do art. 11 do Anexo IX do RCTE-GO.</p>
              <div className="overflow-x-auto border border-border">
                <table className="w-full text-left text-[15px]">
                  <thead>
                    <tr className="border-b border-border bg-card">
                      <th className="p-4 font-semibold whitespace-nowrap">Alíquota interestadual</th>
                      <th className="p-4 font-semibold whitespace-nowrap">Crédito outorgado</th>
                      <th className="p-4 font-semibold whitespace-nowrap">ICMS próprio remanescente</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="p-4">4%</td>
                      <td className="p-4">41,5% do imposto</td>
                      <td className="p-4">aproximadamente 2,34%</td>
                    </tr>
                    <tr>
                      <td className="p-4">12%</td>
                      <td className="p-4">80,5% do imposto</td>
                      <td className="p-4">aproximadamente 2,34%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>Portanto, a parcela própria do ICMS resulta, matematicamente, em aproximadamente 2,34% do valor da operação. Isso não significa carga total de 2,34%, porque o DIFAL e eventual Fundo de Combate à Pobreza devido ao Estado de destino precisam ser calculados separadamente. O crédito outorgado substitui os créditos efetivos relativos às entradas, mercadorias, bens e serviços utilizados, com exceção do tratamento previsto para a importação.</p>
            </div>
          ),
        },
        {
          h2: "Quais são as condições para utilizar o benefício?",
          content: (
            <div className="space-y-5">
              <h3 className="font-display text-xl text-foreground">Condições para fruição e escrituração</h3>
              <p>A fruição depende de celebração de TARE com a Secretaria da Economia, projeto simplificado de investimentos, investimentos mínimos equivalentes a 15% do crédito outorgado estimado para os primeiros 36 meses, realização e comprovação dos investimentos, escrituração específica na EFD, adimplência do ICMS, inexistência de dívida ativa estadual impeditiva, cumprimento de metas de arrecadação para empresas que já operavam em Goiás, e manutenção da estrutura operacional que justifique o estabelecimento em Goiás. A Instrução Normativa nº 1.554/2023-GSE disciplina a escrituração do crédito outorgado e a comprovação dos investimentos na EFD.</p>
            </div>
          ),
        },
        {
          h2: "DIFAL e FCP continuam devidos?",
          content: (
            <div className="space-y-5">
              <h3 className="font-display text-xl text-foreground">Cálculo separado</h3>
              <p>Sim. O crédito outorgado reduz a parcela própria do ICMS, mas o Diferencial de Alíquotas e o Fundo de Combate à Pobreza devido ao Estado de destino precisam ser calculados separadamente, conforme a legislação de cada Estado destinatário.</p>
            </div>
          ),
        },
        {
          h2: "A elegibilidade depende apenas do CNAE?",
          content: (
            <div className="space-y-5">
              <h3 className="font-display text-xl text-foreground">Perfil das operações e previsão no TARE</h3>
              <p>Não. A elegibilidade não é definida apenas pelo CNAE ou pela existência de uma loja virtual. Ela depende da composição das vendas, do perfil dos clientes, do destino das mercadorias, da estrutura física, dos produtos comercializados e das condições pactuadas no TARE. O decreto permite que a exigência de exclusividade do e-commerce seja afastada pelo Secretário da Economia, desde que isso conste expressamente no TARE, mas isso não autoriza presumir que toda empresa com loja física e vendas digitais seja elegível.</p>
            </div>
          ),
        },
        {
          h2: "E-commerce B2C e atacado B2B são a mesma coisa?",
          content: (
            <div className="space-y-5">
              <h3 className="font-display text-xl text-foreground">Regras distintas</h3>
              <p>Não devem ser confundidos. O benefício de e-commerce da Lei nº 21.555/2022 é indicado para vendas interestaduais não presenciais a consumidor final não contribuinte. Já os benefícios para atacadistas e distribuidores, indicados para operações B2B destinadas à comercialização, produção ou industrialização, seguem outras regras do Anexo IX do RCTE (redução de base de cálculo nas operações internas e crédito outorgado nas operações interestaduais, art. 8º VIII e art. 11 III). Venda pela internet não transforma automaticamente uma operação varejista em atacadista. O enquadramento depende do destinatário, da finalidade da aquisição, da mercadoria, da operação e das condições legais do benefício.</p>
            </div>
          ),
        },
        {
          h2: "Comparação com outros Estados",
          content: (
            <div className="space-y-5">
              <h3 className="font-display text-xl text-foreground">COMPETE-ES, TTD 478 e TTS/E-commerce</h3>
              <p>Goiás não é o único Estado com regime específico para e-commerce. Espírito Santo possui o COMPETE-ES, que pode resultar em carga efetiva próxima de 1,1% para vendas não presenciais interestaduais. Santa Catarina possui o TTD 478, com crédito presumido que pode resultar em carga efetiva de aproximadamente 1% a 2%, dependendo da alíquota interestadual aplicável. Minas Gerais possui o TTS/E-commerce, regulamentado pela Resolução SEF nº 5.793/2024, com exigências como percentual mínimo de vendas interestaduais e vedação ao Simples Nacional. O melhor Estado depende da origem dos produtos, dos créditos de entrada, do perfil B2B ou B2C, do destino das vendas, do custo logístico, do DIFAL, do FCP, da substituição tributária, dos investimentos exigidos e da estrutura operacional real.</p>
            </div>
          ),
        },
        {
          h2: "Quais são os riscos de glosa?",
          content: (
            <div className="space-y-5">
              <h3 className="font-display text-xl text-foreground">Principais riscos</h3>
              <p>Entre os principais riscos estão: ausência de TARE formalizado, descumprimento do investimento mínimo de 15%, não atingimento das metas de arrecadação, inclusão indevida de operações que não atendem aos requisitos de exclusividade não presencial, falta de escrituração adequada na EFD, e operações que descaracterizam o perfil de e-commerce B2C exigido pela norma.</p>
            </div>
          ),
        },
        {
          h2: "Conclusão",
          lead: "O benefício fiscal para e-commerce em Goiás pode representar redução significativa da carga tributária, mas depende de análise detalhada do perfil operacional, investimentos e requisitos do TARE.",
          h3: [
            {
              title: "Diagnóstico de elegibilidade",
              body: "Análise do perfil operacional, investimentos e requisitos do TARE.",
              cta: { label: "Solicitar diagnóstico de elegibilidade para benefícios fiscais no e-commerce", to: "/diagnostico" },
            },
          ],
        },
      ]}
    >
      <section className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Base legal</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">Fontes</h2>
        </header>
        <div className="lg:col-span-8 bg-card border border-border p-6 md:p-8">
          <p className="text-[15px] leading-relaxed text-foreground/90">
            Lei nº 21.555/2022; Decreto nº 10.201/2023; RCTE-GO (Decreto nº 4.852/1997), Anexo IX, art. 11, inciso LXXVI; Instrução Normativa nº 1.554/2023-GSE.
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