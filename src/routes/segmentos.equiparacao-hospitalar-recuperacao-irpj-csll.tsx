import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";

const SLUG = "/segmentos/equiparacao-hospitalar-recuperacao-irpj-csll";
const H1 = "Equiparação hospitalar e recuperação de IRPJ e CSLL com segurança tributária";
const META_TITLE = "Equiparação Hospitalar e Recuperação de IRPJ e CSLL";
const META_DESCRIPTION =
  "Entenda como clínicas e empresas médicas podem reduzir e recuperar IRPJ e CSLL com auditoria, retificações, PER/DCOMP e segurança documental.";

const faq: { q: string; a: string }[] = [];

export const Route = createFileRoute(SLUG)({
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
            { "@type": "ListItem", position: 2, name: "Segmentos", item: "/segmentos" },
            {
              "@type": "ListItem",
              position: 3,
              name: "Equiparação Hospitalar e Recuperação de IRPJ e CSLL",
              item: "/segmentos/equiparacao-hospitalar-recuperacao-irpj-csll",
            },
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
          publisher: {
            "@type": "Organization",
            name: "DCON Serviços Contábeis",
            url: SITE_URL,
          },
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
      eyebrow="Segmento"
      h1={H1}
      intro="Empresas médicas, clínicas, laboratórios e prestadores de serviços de saúde podem ter direito à aplicação de percentuais reduzidos de presunção do IRPJ e da CSLL. Em determinadas situações, também pode existir a possibilidade de recuperar valores pagos indevidamente em períodos anteriores. Mas a segurança da operação não está apenas na transmissão de um PER/DCOMP. Ela começa antes: na comprovação da atividade, no enquadramento societário e sanitário, na segregação das receitas, na revisão dos períodos anteriores, na retificação das obrigações fiscais e na formação documental do crédito."
      intent="equiparação hospitalar, recuperação IRPJ CSLL, PER DCOMP clínica médica"
      observation="IRPJ, CSLL, Lucro Presumido, equiparação hospitalar, PER/DCOMP."
      respostaValidada="Recuperação tributária segura não é apenas encontrar uma tese. É demonstrar, calcular, retificar, compensar e sustentar o crédito perante a Receita Federal. Por isso, a DCON não trabalha com promessa de economia antes de comprovar a elegibilidade da atividade — o diagnóstico vem primeiro, a recuperação depois."
      ctaPrimary={{ label: "Solicitar diagnóstico técnico inicial", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      sections={[
        {
          h2: "O que é equiparação hospitalar?",
          lead: "A chamada equiparação hospitalar permite que determinadas receitas de empresas da saúde sejam submetidas, no Lucro Presumido, a percentuais reduzidos.",
          h3: [
            {
              title: "Percentuais de presunção reduzidos",
              body: (
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-border">
                      <thead className="bg-muted">
                        <tr>
                          <th className="px-4 py-2 text-left font-medium">Tributo</th>
                          <th className="px-4 py-2 text-left font-medium">Serviços em geral</th>
                          <th className="px-4 py-2 text-left font-medium">Receitas elegíveis</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-border">
                          <td className="px-4 py-2">IRPJ</td>
                          <td className="px-4 py-2">32%</td>
                          <td className="px-4 py-2">8%</td>
                        </tr>
                        <tr className="border-t border-border">
                          <td className="px-4 py-2">CSLL</td>
                          <td className="px-4 py-2">32%</td>
                          <td className="px-4 py-2">12%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-muted-foreground text-[14px] leading-relaxed">
                    Não se trata de reduzir diretamente a alíquota do IRPJ para 8% ou a da CSLL para 12%. Esses percentuais são aplicados sobre a receita bruta para determinar a base presumida dos tributos. A previsão está nos artigos 15 e 20 da Lei nº 9.249/1995. Quando o enquadramento é correto, a redução da base presumida pode diminuir significativamente a carga tributária federal incidente sobre a receita elegível. Entretanto, o benefício não alcança automaticamente toda empresa da área da saúde nem necessariamente todo o seu faturamento.
                  </p>
                </div>
              ),
            },
          ],
        },
        {
          h2: "Quais empresas podem avaliar a equiparação hospitalar?",
          h3: [
            {
              title: "Atividades potencialmente elegíveis",
              body: "A análise pode alcançar empresas que realizem, entre outras atividades: serviços hospitalares, auxílio diagnóstico e terapia, fisioterapia e terapia ocupacional, fonoaudiologia, patologia clínica, imagenologia, radiologia, anatomia patológica, citopatologia, medicina nuclear, análises e patologias clínicas, exames por métodos gráficos, procedimentos endoscópicos, radioterapia, quimioterapia, diálise, oxigenoterapia hiperbárica e serviços de anestesiologia.",
            },
            {
              title: "Atualização pela IN RFB nº 2.343/2026",
              body: "A relação acima foi atualizada no artigo 33 da IN RFB nº 1.700/2017 pela Instrução Normativa RFB nº 2.343/2026. A inclusão expressa da anestesiologia é particularmente relevante para empresas médicas que prestam serviços em hospitais e centros cirúrgicos.",
            },
            {
              title: "Revogação de restrições anteriores",
              body: "A IN RFB nº 2.343/2026 também revogou os incisos II e III do parágrafo 4º do artigo 33 da IN RFB nº 1.700/2017, que estabeleciam restrições relacionadas à utilização de ambiente de terceiros e a determinadas atividades ambulatoriais e domiciliares. Isso amplia a necessidade de revisar operações anteriormente tratadas como inelegíveis, especialmente empresas de anestesiologia, equipes médicas que atuam dentro de hospitais, prestadores que utilizam estrutura de terceiros, serviços ambulatoriais com exames complementares, e determinadas operações de assistência domiciliar ou home care.",
            },
            {
              title: "Não é direito automático",
              body: "A revogação dessas restrições, porém, não significa que todas essas empresas passaram a ter direito automático. A natureza do serviço e os demais requisitos continuam precisando ser comprovados.",
            },
          ],
        },
      ]}
      relatedLinks={[
        { eyebrow: "Segmento", label: "Médicos e Clínicas", to: "/segmentos/medicos-clinicas" },
        { eyebrow: "Solução", label: "Recuperação de Créditos Tributários", to: "/solucoes/recuperacao-creditos-tributarios" },
        { eyebrow: "Solução", label: "Planejamento Tributário", to: "/solucoes/planejamento-tributario" },
        { eyebrow: "Leia também", label: "Reforma Tributária para Clínicas Médicas", to: "/conteudos/reforma-tributaria-clinicas-medicas-o-que-muda" },
      ]}
    >
      <section className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Responsabilidade técnica</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">Revisão conduzida por Leandro Matsuoka Guimarães</h2>
        </header>
        <div className="lg:col-span-8 bg-card border border-border p-6 md:p-8">
          <p className="text-[15px] leading-relaxed text-foreground/90">
            As entregas desta página são conduzidas sob supervisão direta de{" "}
            <a href="/sobre/leandro/" className="underline decoration-gold/50 hover:text-foreground">
              Leandro Matsuoka Guimarães
            </a>
            , sócio-fundador e diretor técnico da DCON. Contador com 22 anos de experiência, bacharel em Direito e pós-graduado em Controladoria e Finanças Corporativas. CRC-GO 16.395/O-9.
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            As informações têm caráter técnico e não constituem opinião de perícia contábil ou parecer formal. Cada caso deve ser analisado individualmente.
          </p>
        </div>
      </section>
    </PageScaffold>
  );
}
