import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead, SITE_URL } from "@/lib/seo";
import { LEANDRO_PERSON_JSONLD } from "@/lib/person";

export const Route = createFileRoute("/conteudos/lc-236-2026-processo-administrativo-fiscal")({
  head: () => ({
    ...buildSeoHead({
      title: "LC 236/2026: as novas regras nacionais do processo administrativo fiscal",
      description: "Entenda a Lei Complementar 236/2026, que unificou regras de multas, prazos e processo administrativo fiscal para União, Estados e Municípios. Análise técnica da DCON.",
      canonical: "/conteudos/lc-236-2026-processo-administrativo-fiscal",
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
            { "@type": "ListItem", position: 3, name: "LC 236/2026", item: "/conteudos/lc-236-2026-processo-administrativo-fiscal" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "LC 236/2026: as novas regras nacionais do processo administrativo fiscal",
          description: "Entenda a Lei Complementar 236/2026, que unificou regras de multas, prazos e processo administrativo fiscal para União, Estados e Municípios.",
          author: { "@id": `${SITE_URL}/sobre/leandro#leandro` },
          publisher: { "@type": "Organization", name: "DCON Serviços Contábeis", url: SITE_URL },
          datePublished: "2026-09-09",
          dateModified: "2026-09-09",
          url: `${SITE_URL}/conteudos/lc-236-2026-processo-administrativo-fiscal`,
          mainEntityOfPage: `${SITE_URL}/conteudos/lc-236-2026-processo-administrativo-fiscal`,
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

const PUBLISHED = "09/09/2026";

function Page() {
  return (
    <PageScaffold
      eyebrow={`Análise tributária · ${PUBLISHED}`}
      h1="LC 236/2026: as novas regras nacionais do processo administrativo fiscal"
      lead="Publicada em 4 de setembro de 2026, a LC 236 alterou o CTN para criar regras gerais nacionais de processo administrativo fiscal, válidas para União, Estados e Municípios."
      intro="A Lei Complementar 236, de 4 de setembro de 2026, entrou em vigor na data da publicação e modificou a Lei 5.172/1966 (Código Tributário Nacional) para estabelecer regras gerais nacionais de processo administrativo fiscal. A mudança vale para os três entes federativos e altera diretamente o cálculo de multas, os prazos processuais, o momento da inscrição em dívida ativa e a observância de súmulas vinculantes. Empresas com autos de infração, impugnações, PGFN ou dívida ativa em andamento devem revisar seus casos à luz dessas novas regras."
      breadcrumbs={[
        { label: "Insights", to: "/conteudos" },
        { label: "LC 236/2026", to: "/conteudos/lc-236-2026-processo-administrativo-fiscal" },
      ]}
      audience={[
        "Empresas com autos de infração em discussão",
        "Sócios com processos administrativos fiscais pendentes",
        "Negócios inscritos na PGFN ou com dívida ativa",
        "Contadores e advogados acompanhando defesas fiscais",
      ]}
      ctaPrimary={{ label: "Solicitar revisão de processos fiscais", to: "/diagnostico" }}
      ctaSecondary={{ label: "Ver solução de defesas fiscais", to: "/solucoes/defesas-fiscais" }}
      ctaVariant="risk"
      respostaValidada="A LC 236/2026 unificou regras nacionais de processo administrativo fiscal, alterando teto de multa, reduções por pagamento antecipado, prazos processuais, prazo de inscrição em dívida ativa, duplo grau de jurisdição municipal e efeito de súmulas vinculantes. A análise de cada caso deve considerar a data de publicação, o regime de trânsito dos processos e as regras de adaptação dos Estados e Municípios."
      sections={[
        {
          h2: "Teto de multa: art. 113-A do CTN",
          lead: "A LC 236 estabeleceu percentuais máximos de multa com escalonamento conforme a gravidade da conduta.",
          h3: [
            { title: "Regra geral: até 75%", body: "Para infrações tributárias sem indícios de fraude, sonegação ou conluio doloso, a multa fica limitada a 75% sobre o valor do tributo devido." },
            { title: "Fraudes, sonegação ou conluio doloso: até 100%", body: "Quando há indícios de conduta dolosa, o teto sobe para 100%, refletindo a maior reprovabilidade da conduta." },
            { title: "Reincidência: até 150%", body: "Em caso de reincidência, a multa pode atingir 150%, fortalecendo o caráter pedagógico e repressivo da sanção." },
            { title: "Impacto prático", body: "Defesas e impugnações devem reclassificar a conduta sempre que possível, pois a gradação da multa altera significativamente o montante discutido e a estratégia de parcelamento ou transação." },
          ],
        },
        {
          h2: "Reduções de multa por antecipação de pagamento",
          lead: "O art. 142, §5º, criou percentuais de redução da multa para quem paga ou parcela o débito dentro de prazos específicos.",
          h3: [
            { title: "50% — pagamento integral no prazo de impugnação", body: "Quando o contribuinte paga o débito integralmente dentro do prazo para impugnar, a multa pode ser reduzida em 50%." },
            { title: "40% — parcelamento no prazo de impugnação", body: "A opção por parcelamento dentro do prazo de impugnação permite redução de 40% sobre a multa." },
            { title: "30% — pagamento integral após o prazo, antes da dívida ativa", body: "Se o pagamento ocorre após o prazo de impugnação, mas antes da inscrição em dívida ativa, a redução é de 30%." },
            { title: "20% — parcelamento após o prazo, antes da dívida ativa", body: "Parcelar após o prazo de impugnação, mas antes da inscrição em dívida ativa, autoriza redução de 20%." },
            { title: "Programas de conformidade", body: "Percentuais maiores podem ser aplicados aos participantes de programas de conformidade, conforme regras específicas da administração tributária." },
          ],
        },
        {
          h2: "Prazos processuais unificados: art. 208-D do CTN",
          lead: "A LC 236 padronizou prazos para as principais fases do contencioso administrativo fiscal.",
          h3: [
            { title: "Impugnação: 20 dias úteis", body: "O contribuinte tem 20 dias úteis para apresentar impugnação contra auto de infração ou lançamento." },
            { title: "Recurso voluntário: 20 dias úteis", body: "Também 20 dias úteis para recurso voluntário contra decisão de primeira instância." },
            { title: "Recurso especial: 20 dias úteis", body: "Prazo idêntico para recurso especial em instâncias superiores." },
            { title: "Embargos de declaração: 5 dias úteis", body: "Para embargos de declaração, o prazo é de 5 dias úteis." },
            { title: "Suspensão de prazos", body: "Os prazos ficam suspensos entre 20 de dezembro e 20 de janeiro de cada ano, independentemente de feriados locais." },
          ],
        },
        {
          h2: "Prazo para inscrição em dívida ativa: art. 201, §3º",
          lead: "O prazo para inscrição em dívida ativa agora varia conforme o perfil do contribuinte e o comportamento fiscal.",
          h3: [
            { title: "Regra geral: 90 dias úteis", body: "Em regra, o lançamento tributário deve ser inscrito em dívida ativa em até 90 dias úteis." },
            { title: "Bom histórico: até 120 dias úteis", body: "Contribuintes com bom histórico fiscal podem ter o prazo ampliado para até 120 dias úteis." },
            { title: "Baixo recolhimento: 60 dias úteis", body: "Para contribuintes com histórico de baixo recolhimento ou outras indicações de risco, o prazo pode ser reduzido a 60 dias úteis." },
            { title: "Consequência para a defesa", body: "A variação do prazo afeta o momento da inscrição, a disponibilidade de parcelamento, transação e medidas cautelares." },
          ],
        },
        {
          h2: "Duplo grau de jurisdição obrigatório",
          lead: "Municípios maiores agora são obrigados a oferecer 2ª instância no contencioso administrativo fiscal.",
          h3: [
            { title: "Obrigatoriedade para municípios com mais de 100 mil habitantes", body: "Municípios com população superior a 100 mil habitantes devem garantir segunda instância administrativa no contencioso tributário." },
            { title: "Validade das decisões de primeira instância", body: "Enquanto não implementarem o duplo grau, decisões de primeira instância podem ter efeitos limitados, abrindo espaço para discussão sobre a observância do devido processo legal." },
            { title: "Impacto em defesas municipais", body: "ISS, IPTU e outras taxas municipais podem ser questionadas com maior segurança processual quando o município ainda não estruturou o segundo grau." },
          ],
        },
        {
          h2: "Súmulas vinculantes no processo administrativo: art. 208-G",
          lead: "Decisões vinculantes do STF e STJ passam a vincular também o processo administrativo fiscal.",
          h3: [
            { title: "Efeito vinculante para a administração", body: "Súmulas vinculantes e teses fixadas em recursos repetitivos devem ser observadas pela fiscalização e pelos órgãos julgadores no âmbito administrativo." },
            { title: "Impedimento à autuação sobre tema pacificado", body: "Não pode haver autuação sobre questão já pacificada a favor do contribuinte pelo STF ou STJ." },
            { title: "Revisão de processos em andamento", body: "Autos de infração, lançamentos e execuções fiscais pendentes sobre temas já pacificados podem ser objeto de impugnação com base nesse dispositivo." },
          ],
        },
        {
          h2: "Prazo de adaptação para Estados e Municípios",
          lead: "A LC 236 reconheceu um prazo de transição para que entes subnacionais adequem sua legislação própria.",
          h3: [
            { title: "2 anos para adaptação", body: "Estados e Municípios têm até 2 anos para adaptar suas normas processuais às regras da LC 236/2026." },
            { title: "Aplicação direta em caso de omissão", body: "Se não adaptarem a legislação no prazo, as regras da LC 236 passam a valer diretamente para o ente federativo." },
            { title: "Recomendação prática", body: "Empresas com processos em várias localidades devem mapear quais jurisdições já adaptaram a legislação e quais estão sujeitas à aplicação direta da LC 236." },
          ],
        },
      ]}
      relatedLinks={[
        { eyebrow: "Solução", label: "Defesas Fiscais", to: "/solucoes/defesas-fiscais" },
        { eyebrow: "Solução", label: "Regularização Fiscal", to: "/solucoes/regularizacao-fiscal" },
        { eyebrow: "Conteúdo", label: "Como conduzir tecnicamente uma autuação", to: "/solucoes/defesas-fiscais" },
        { eyebrow: "Próximo passo", label: "Solicitar diagnóstico", to: "/diagnostico" },
      ]}
    >
      <section className="grid lg:grid-cols-12 gap-10">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Base legal</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">Fonte normativa</h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            O texto legal central desta análise é a LC 236/2026, que alterou a Lei 5.172/1966 (CTN).
          </p>
        </header>
        <div className="lg:col-span-8 bg-card border border-border p-6 md:p-8">
          <p className="text-[15px] leading-relaxed text-foreground/90">
            Lei Complementar 236, de 4 de setembro de 2026: altera a Lei 5.172/1966, que dispõe sobre o Sistema
            Tributário Nacional, para estabelecer regras gerais nacionais de processo administrativo fiscal.
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            As disposições abrangem multas administrativas (art. 113-A), reduções por antecipação de pagamento
            (art. 142, §5º), prazos processuais unificados (art. 208-D), inscrição em dívida ativa (art. 201, §3º),
            duplo grau de jurisdição, efeito de súmulas vinculantes (art. 208-G) e prazo de adaptação dos entes
            federativos.
          </p>
        </div>
      </section>

      <section className="grid lg:grid-cols-12 gap-10 border-t border-border pt-16">
        <header className="lg:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.24em] text-gold mb-3">Ação recomendada</div>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight">Revisar processos em andamento</h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            Empresas com impugnações, autos de infração, PGFN, execução fiscal ou dívida ativa devem reapreciar seus
            casos à luz das novas regras.
          </p>
        </header>
        <ul className="lg:col-span-8 space-y-px bg-border border border-border">
          {[
            { title: "Autos de infração em curso", body: "Verificar se o teto de multa aplicado obedece ao novo art. 113-A e se há espaço para reclassificação da conduta." },
            { title: "Impugnações e recursos", body: "Confirmar se os prazos de 20 dias úteis estão sendo observados e se há direito à suspensão entre 20/dez e 20/jan." },
            { title: "Inscrição em dívida ativa", body: "Conferir se a inscrição ocorreu dentro dos prazos de 60, 90 ou 120 dias úteis conforme o perfil do contribuinte." },
            { title: "Súmulas vinculantes", body: "Mapear se o tema discutido já foi pacificado pelo STF ou STJ e se a autuação/resolução administrativa desrespeitou a tese vinculante." },
            { title: "Municípios acima de 100 mil habitantes", body: "Verificar se há duplo grau de jurisdição implementado e as consequências processuais da omissão." },
          ].map((item, i) => (
            <li key={item.title} className="bg-card p-5 flex items-start gap-4">
              <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-sm border border-gold/50 text-gold text-[10px] font-bold shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-[16px] text-card-foreground">{item.title}</h3>
                <p className="mt-1 text-muted-foreground text-[14px] leading-relaxed">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </PageScaffold>
  );
}
