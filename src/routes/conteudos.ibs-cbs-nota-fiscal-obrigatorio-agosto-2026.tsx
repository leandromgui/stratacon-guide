import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";
import { TechnicalReview } from "../components/TechnicalReview";

const SLUG = "/conteudos/ibs-cbs-nota-fiscal-obrigatorio-agosto-2026";
const H1 = "IBS e CBS na Nota Fiscal: obrigatório desde 3 de agosto de 2026";
const META_TITLE = "IBS e CBS na nota fiscal: campos obrigatórios desde agosto/2026";
const META_DESCRIPTION =
  "Desde 3 de agosto de 2026 o preenchimento de IBS e CBS na nota fiscal eletrônica é obrigatório. Entenda o que muda e como evitar rejeição de documentos.";
const PUBLISHED = "14/09/2026";

const faq = [
  {
    q: "Preciso pagar mais imposto por causa desses campos?",
    a: "Não necessariamente. Em 2026, os valores de IBS/CBS destacados são informativos, sem efeito tributário imediato. O que mudou é a obrigatoriedade do preenchimento, não o recolhimento.",
  },
  {
    q: "Minha nota rejeitada pode ser cancelada?",
    a: "Não existe isso. Documento rejeitado nunca foi autorizado. Corrija o preenchimento e transmita novamente.",
  },
  {
    q: "Isso vale só para produtos ou também para serviços?",
    a: "A NT 2025.002 alcança os documentos fiscais eletrônicos de forma geral, incluindo NF-e e NFS-e. Prestadores de serviço também precisam validar o emissor.",
  },
];

export const Route = createFileRoute("/conteudos/ibs-cbs-nota-fiscal-obrigatorio-agosto-2026")({
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
            { "@type": "ListItem", position: 3, name: "IBS e CBS na Nota Fiscal: obrigatório desde 3 de agosto de 2026", item: "/conteudos/ibs-cbs-nota-fiscal-obrigatorio-agosto-2026" },
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
      intro="Desde 3 de agosto de 2026, o preenchimento dos campos de IBS e CBS na nota fiscal eletrônica deixou de ser opcional. Segundo o Comitê Gestor do IBS (CGIBS), documentos fiscais eletrônicos emitidos sem essas informações deixam de ser autorizados, e o sistema rejeita automaticamente as notas incompletas. Isso já está em vigor agora, não é uma obrigação futura."
      breadcrumbs={[
        { label: "Insights", to: "/conteudos" },
        { label: "IBS e CBS na Nota Fiscal: obrigatório desde 3 de agosto de 2026", to: SLUG },
      ]}
      audience={[
        "Empresas com alto volume de emissão de NF-e e NFS-e",
        "Indústria, distribuição, varejo e prestadores de serviços",
        "Gestores fiscais e coordenadores de emissão",
        "Escritórios de contabilidade com operação fiscal ativa",
      ]}
      ctaPrimary={{ label: "Solicitar diagnóstico de conformidade fiscal para IBS/CBS", to: "/diagnostico" }}
      ctaSecondary={{ label: "Ver departamento fiscal", to: "/solucoes/departamento-fiscal" }}
      respostaValidada="Desde 3 de agosto de 2026, o preenchimento dos campos de IBS e CBS na nota fiscal eletrônica é obrigatório e documentos incompletos são rejeitados. Em 2026, os valores destacados são informativos e sem efeito tributário imediato, mas o correto preenchimento é exigido para autorização do documento."
      faq={faq}
      sections={[
        {
          h2: "O que encerrou o período de flexibilização",
          lead: "A suspensão das regras de validação chegou ao fim em 3 de agosto de 2026.",
          h3: [
            {
              title: "Fim da suspensão",
              body: "Até o encerramento desse prazo, as regras de validação de IBS e CBS estavam suspensas pelo Ato Conjunto RFB/CGIBS nº 1/2025, publicado em 22 de dezembro de 2025. Isso permitia que empresas emitissem notas sem os campos preenchidos, sem risco de rejeição.",
            },
            {
              title: "Obrigatoriedade operacional",
              body: "A partir de 3 de agosto de 2026, essa flexibilização acabou: a obrigatoriedade passou a ser operacional e sistêmica.",
            },
          ],
        },
        {
          h2: "O risco real é a rejeição, não a multa",
          lead: "O problema não é o valor do tributo, mas a impossibilidade de faturar sem documento autorizado.",
          h3: [
            {
              title: "Valores informativos em 2026",
              body: "O ponto central para empresas não é o recolhimento: os valores destacados em 2026 são informativos e sem efeito tributário imediato, desde que as obrigações acessórias sejam cumpridas.",
            },
            {
              title: "Risco operacional",
              body: "O risco real é operacional: documento fiscal sem os campos de IBS e CBS corretamente preenchidos não é autorizado. Sem nota autorizada, não há faturamento. Empresas com alto volume de emissão (indústria, distribuição, varejo) sentem esse risco de forma mais imediata.",
            },
          ],
        },
        {
          h2: "O que fazer se sua nota está sendo rejeitada",
          lead: "Documento rejeitado nunca foi autorizado; basta corrigir e retransmitir.",
          h3: [
            {
              title: "Não há cancelamento de nota rejeitada",
              body: "Não existe nota para cancelar quando o documento é rejeitado, ele nunca chega a ser autorizado. É preciso corrigir o preenchimento e transmitir novamente.",
            },
            {
              title: "Atualização do layout do emissor",
              body: "Confirme com seu fornecedor de ERP ou emissor fiscal se o layout já contempla os campos da Nota Técnica do ENCAT (NT 2025.002). Sem o layout atualizado, a emissão fica travada até a correção.",
            },
          ],
        },
      ]}
      relatedLinks={[
        { eyebrow: "Solução", label: "Departamento Fiscal", to: "/solucoes/departamento-fiscal" },
        { eyebrow: "Solução", label: "Reforma Tributária", to: "/solucoes/reforma-tributaria" },
        { eyebrow: "Leia também", label: "Cronograma da Reforma Tributária", to: "/conteudos/cronograma-reforma-tributaria-2026-2033" },
      ]}
    >
      <section className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Base legal</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">Fonte normativa e técnica</h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            Dispositivos e orientações técnicas que embasam a obrigatoriedade dos campos de IBS e CBS.
          </p>
        </header>
        <div className="lg:col-span-8 bg-card border border-border p-6 md:p-8">
          <ul className="list-disc pl-5 space-y-2 text-[15px] leading-relaxed text-foreground/90">
            <li>Comitê Gestor do IBS (CGIBS).</li>
            <li>Ato Conjunto RFB/CGIBS nº 1/2025, publicado em 22 de dezembro de 2025.</li>
            <li>Nota Técnica 2025.002 (ENCAT).</li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Fontes oficiais: Receita Federal do Brasil / Comitê Gestor do IBS.
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Autor: <a href="/sobre/leandro/" className="underline decoration-gold/50 hover:text-foreground">Leandro Matsuoka Guimarães</a> · Publicado em {PUBLISHED}.
          </p>
        </div>
      </section>
    </PageScaffold>
  );
}
