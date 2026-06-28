import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { faqJsonLd, serviceJsonLd, type FAQItem } from "../components/FAQ";
import { buildSeoHead } from "@/lib/seo";

const faqs: FAQItem[] = [
  {
    q: "Quando fazer a análise de equiparação hospitalar?",
    a: "Quando a clínica ou empresa da saúde está no Lucro Presumido, possui receitas de serviços potencialmente equiparáveis a hospitalares e tem estrutura, licença, documentação e segregação de receitas suficientes para sustentar a presunção reduzida. A análise não se aplica automaticamente a consultas simples.",
  },
  {
    q: "A equiparação hospitalar reduz imposto automaticamente?",
    a: "Não. Ela pode reduzir a presunção de IRPJ de 32% para 8% e de CSLL de 32% para 12% apenas sobre receitas qualificadas, quando a operação atende aos requisitos. A DCON atua como análise técnica de viabilidade, não como promessa de benefício.",
  },
  {
    q: "Quais documentos a DCON analisa?",
    a: "Contrato social, CNAE, alvarás e licença sanitária, notas fiscais, contratos com pacientes, clínicas ou operadoras, segregação de receitas, apuração de IRPJ/CSLL, ECD/ECF quando aplicável e evidências da estrutura efetivamente usada na prestação do serviço.",
  },
  {
    q: "Posso recuperar valores pagos nos últimos 5 anos?",
    a: "Pode haver recuperação se a empresa recolheu IRPJ/CSLL com presunção maior sobre receitas que, após análise documental, eram qualificáveis. A revisão exige memória de cálculo, base legal, retificações cabíveis e rastreabilidade dos valores.",
  },
  {
    q: "Simples Nacional pode usar equiparação hospitalar?",
    a: "A tese de presunção reduzida é tema de Lucro Presumido. No Simples, o foco costuma ser outro: Fator R, anexo correto, segregação de receitas e comparação entre Simples, Presumido e Real.",
  },
  {
    q: "Como a DCON atua na prática?",
    a: "A DCON levanta dados, separa receitas, confere documentos, simula cenários e entrega uma conclusão técnica: aplicar, não aplicar, aplicar parcialmente ou corrigir a estrutura antes de qualquer medida fiscal.",
  },
];

const faqEquiparacao: FAQItem[] = [
  {
    q: "Qual a base legal da equiparação hospitalar?",
    a: "Lei 9.249/95, art. 15, §1º, III, 'a', com redação da Lei 11.727/08, regulamentada por IN RFB 1.700/2017 e consolidada em decisões do STJ (Tema 217). A norma autoriza presunção reduzida de IRPJ (8%) e CSLL (12%) para serviços hospitalares prestados por sociedade empresária organizada de fato e de direito, observadas normas da Anvisa.",
  },
  {
    q: "Quais serviços são considerados 'hospitalares' para fins fiscais?",
    a: "Procedimentos com estrutura assistencial: internação, UTI, centro cirúrgico, pronto-socorro, partos, transfusão, diálise, radioterapia, quimioterapia, hemoterapia, oncologia, ortopedia com cirurgia, exames complexos de imagem com contraste e laboratoriais especializados. O STJ definiu que o critério é objetivo (natureza do serviço), não a denominação da empresa.",
  },
  {
    q: "Consulta médica simples pode ser equiparada?",
    a: "Não. Consulta em consultório, sem estrutura assistencial, segue presunção de 32% para IRPJ e CSLL. Misturar consultas e procedimentos qualificados na mesma base contamina toda a apuração.",
  },
  {
    q: "Clínica precisa ter leito de internação?",
    a: "Não obrigatoriamente. O STJ afastou a exigência de internação como requisito único. O que importa é a natureza hospitalar do serviço prestado, comprovada por estrutura, licença sanitária e protocolo assistencial compatível.",
  },
  {
    q: "Quais requisitos formais a empresa precisa atender?",
    a: "Ser sociedade empresária (não sociedade simples), estar no Lucro Presumido ou Real, ter licença sanitária ativa, atender normas da Anvisa para a atividade, manter contabilidade regular e segregação de receitas por nota, contrato e centro de custo.",
  },
  {
    q: "Sociedade simples (S/S) pode aplicar?",
    a: "Não, na forma original. É preciso transformar em sociedade empresária (Ltda. empresária ou S.A.) e registrar na Junta Comercial antes de aplicar a presunção reduzida. A DCON conduz a alteração societária quando a tese for viável.",
  },
  {
    q: "Qual a economia tributária real?",
    a: "Sobre receita qualificada, IRPJ cai de 4,8% para 1,2% efetivos (32%→8% de presunção × 15%) e CSLL de 2,88% para 1,08% (32%→12% × 9%). Em uma clínica com R$ 3 mi/ano de receita hospitalar, a economia anual passa de R$ 160 mil. A DCON entrega memória de cálculo antes da decisão.",
  },
  {
    q: "Como segregar receitas qualificadas e não qualificadas?",
    a: "Emitindo notas fiscais separadas por serviço, mantendo contratos individualizados, centros de custo distintos e plano de contas com contas analíticas próprias. Sem segregação, a Receita aplica 32% sobre toda a base.",
  },
  {
    q: "Posso retificar declarações dos últimos 5 anos?",
    a: "Sim, dentro do prazo decadencial. A DCON revisa ECF, DCTF, EFD-Contribuições e DARFs, monta memória de cálculo retroativa e instrui PER/DCOMP de compensação ou pedido de restituição quando há lastro documental.",
  },
  {
    q: "Quais riscos de aplicar sem análise técnica?",
    a: "Glosa em fiscalização, autuação com multa de 75% a 150%, juros Selic, exclusão do regime, responsabilização dos sócios e, em recuperação retroativa malformada, indeferimento e bloqueio de novas compensações.",
  },
  {
    q: "Operadora de plano de saúde, laboratório e clínica de imagem aplicam?",
    a: "Laboratórios de análises clínicas e clínicas de imagem com estrutura técnica e exames complexos costumam se enquadrar. Operadoras de plano de saúde têm regime próprio (Lei 9.656/98 e RN da ANS) e a análise é específica. A DCON avalia caso a caso.",
  },
  {
    q: "Quanto tempo leva a análise da DCON?",
    a: "Diagnóstico técnico em até 7 dias úteis após entrega da documentação. Parecer de viabilidade, mapa de receitas, cálculo de impacto, checklist documental e plano de ação retroativo, se cabível.",
  },
  {
    q: "Há custo inicial para a análise?",
    a: "O diagnóstico inicial não tem custo. Após a apresentação do parecer, a empresa decide se contrata a aplicação prospectiva, a recuperação retroativa, a reorganização societária ou nenhuma das medidas. Sigilo sob responsabilidade do CRC da DCON.",
  },
];

export const Route = createFileRoute("/conteudos/saude-clinicas")({
  head: () => ({
    ...buildSeoHead({
      title: "Equiparação Hospitalar para Clínicas | Insights DCON",
      description: "Quando analisar equiparação hospitalar, PJ médica, Fator R e regime tributário para clínicas, com respostas técnicas da DCON.",
      canonical: "/conteudos/saude-clinicas",
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
            { "@type": "ListItem", position: 3, name: "Saúde e clínicas", item: "/conteudos/saude-clinicas" },
          ],
        }),
      },
      { type: "application/ld+json", children: serviceJsonLd({ name: "Análise de Equiparação Hospitalar", description: "Análise técnica de viabilidade para clínicas e empresas da saúde no Lucro Presumido.", url: "/conteudos/saude-clinicas" }) },
      { type: "application/ld+json", children: faqJsonLd([...faqs, ...faqEquiparacao]) },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Insight · Saúde"
      h1="Equiparação hospitalar para clínicas: quando analisar e quando não aplicar"
      lead="A equiparação hospitalar não é benefício automático. É uma análise técnica sobre atividade, documentação, receita, estrutura e regime tributário."
      intro="Empresas da saúde precisam comparar PJ médica, Livro Caixa, Fator R, Simples, Lucro Presumido, Receita Saúde e equiparação hospitalar antes de decidir como tributar. A DCON atua como análise técnica: identifica viabilidade, riscos, documentos faltantes e caminho fiscal seguro."
      breadcrumbs={[{ label: "Insights", to: "/conteudos" }, { label: "Saúde e clínicas", to: "/conteudos/saude-clinicas" }]}
      audience={[
        "Clínicas no Lucro Presumido",
        "Médicos avaliando migração para CNPJ",
        "Empresas de saúde com receitas mistas",
        "Operações que querem revisar IRPJ/CSLL dos últimos 5 anos",
      ]}
      ctaPrimary={{ label: "Solicitar análise da clínica", to: "/diagnostico" }}
      ctaSecondary={{ label: "Ver contabilidade para médicos", to: "/segmentos/medicos-clinicas" }}
      ctaTertiary={{ label: "Falar com a DCON", to: "/contato" }}
      respostaValidada="Equiparação hospitalar não é promessa de redução automática. Empresas da saúde no Lucro Presumido podem ter presunção reduzida de IRPJ e CSLL sobre receitas qualificadas, mas isso depende de atividade, estrutura, documentação, licença, segregação de receitas e enquadramento fiscal. A DCON atua como forma de análise técnica para concluir se há viabilidade, risco ou necessidade de correção antes de aplicar qualquer medida."
      ctaVariant="opportunity"
      pillarKey="medicos-clinicas"
      sections={[
        {
          h2: "Quando a análise faz sentido",
          lead: "O ponto de partida é verificar se a operação está no regime certo e se a receita analisada é compatível com a tese.",
          h3: [
            { title: "Lucro Presumido", body: "A equiparação hospitalar é analisada sobre IRPJ e CSLL no Lucro Presumido. Se a empresa está no Simples, a análise principal costuma ser Fator R, anexos e comparação de regimes." },
            { title: "Receitas qualificadas", body: "A redução só pode ser discutida para receitas de serviços de saúde que se aproximam de atividade hospitalar. Consultas simples e receitas sem suporte documental devem ficar fora." },
            { title: "Estrutura e licença", body: "A clínica precisa demonstrar estrutura, alvarás, licença sanitária e capacidade operacional compatíveis com o serviço prestado." },
            { title: "Segregação de receitas", body: "Receitas qualificadas e não qualificadas devem ser separadas por nota, contrato, centro de custo e apuração. Aplicar tudo em bloco aumenta risco fiscal." },
          ],
        },
        {
          h2: "Como a DCON conduz a análise",
          lead: "A atuação é analítica: não vendemos atalho, entregamos conclusão técnica e documentação de suporte.",
          h3: [
            { title: "Levantamento documental", body: "Contrato social, CNAE, licenças, notas fiscais, contratos, apurações, ECD/ECF, DRE e histórico dos últimos 5 anos." },
            { title: "Classificação das receitas", body: "Separação entre receitas possivelmente equiparáveis, consultas simples, procedimentos acessórios e receitas sem documentação suficiente." },
            { title: "Memória de cálculo", body: "Simulação da presunção atual versus presunção reduzida apenas sobre a base elegível, com estimativa de economia ou recuperação possível." },
            { title: "Conclusão técnica", body: "Aplicar, não aplicar, aplicar parcialmente ou corrigir estrutura/documentação antes de qualquer alteração fiscal." },
          ],
        },
        {
          h2: "Riscos de aplicar sem análise",
          lead: "O maior erro é tratar equiparação hospitalar como tese genérica para toda clínica.",
          h3: [
            { title: "Glosa em fiscalização", body: "Sem prova de atividade, estrutura e segregação, o Fisco pode exigir diferença de IRPJ/CSLL, juros, multa e retificações." },
            { title: "Receita errada na base reduzida", body: "Consultas simples ou receitas administrativas incluídas indevidamente podem contaminar toda a apuração." },
            { title: "Recuperação sem lastro", body: "Pedido retroativo sem documentação, base legal e memória de cálculo aumenta risco de indeferimento ou questionamento." },
            { title: "Regime inadequado", body: "Às vezes a oportunidade real não é equiparação, mas Fator R, mudança de regime, segregação ou reorganização societária." },
          ],
        },
      ]}
      deliverables={[
        { title: "Parecer de viabilidade", body: "Conclusão clara sobre aplicar, não aplicar ou aplicar parcialmente a equiparação hospitalar." },
        { title: "Mapa de receitas", body: "Separação das receitas qualificadas e não qualificadas para evitar aplicação indevida." },
        { title: "Checklist documental", body: "Relação dos documentos que sustentam ou impedem a tese na operação real." },
        { title: "Cálculo de impacto", body: "Simulação de IRPJ/CSLL e eventual recuperação dos últimos 5 anos quando houver base." },
      ]}
      faq={faqs}
      relatedLinks={[
        { label: "Médicos e Clínicas", to: "/segmentos/medicos-clinicas", eyebrow: "Segmento" },
        { label: "Planejamento Tributário", to: "/solucoes/planejamento-tributario", eyebrow: "Solução" },
        { label: "Recuperação de Créditos", to: "/solucoes/recuperacao-creditos-tributarios", eyebrow: "Solução" },
        { label: "Regimes Tributários", to: "/conteudos/regimes-tributarios", eyebrow: "Conteúdo" },
      ]}
    >
      <section id="faq-equiparacao-hospitalar" className="border-l-2 border-primary/60 pl-6">
        <p className="text-xs uppercase tracking-[0.18em] text-primary/80">FAQ técnico</p>
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">Equiparação hospitalar: perguntas e respostas objetivas</h2>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-3xl">
          Treze perguntas frequentes que recebemos de clínicas, laboratórios e empresas da saúde. Respostas técnicas, com base legal, requisitos formais, cálculo de impacto e riscos — para que a decisão seja informada antes de qualquer movimento fiscal.
        </p>
        <div className="mt-5 divide-y divide-border rounded-md border border-border bg-card">
          {faqEquiparacao.map((it) => (
            <details key={it.q} className="group p-4">
              <summary className="cursor-pointer list-none font-medium text-card-foreground flex justify-between items-center gap-3">
                <span>{it.q}</span>
                <span className="text-primary text-xs ml-3 group-open:rotate-45 transition-transform shrink-0">+</span>
              </summary>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-6 rounded-lg border border-primary/30 bg-primary/5 p-5 md:p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-primary/80">Próximo passo</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight">Solicite a análise de equiparação hospitalar da DCON</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Diagnóstico em até 7 dias úteis, sem custo inicial. Parecer técnico de viabilidade, segregação de receitas, cálculo de impacto e plano de recuperação retroativa quando há lastro documental. Sigilo sob CRC.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="/diagnostico" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
              Solicitar análise da clínica →
            </a>
            <a href="/contato" className="inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors">
              Falar com a equipe técnica
            </a>
            <a href="/segmentos/medicos-clinicas" className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-primary hover:underline">
              Ver contabilidade para médicos
            </a>
          </div>
        </div>
      </section>
    </PageScaffold>
  );
}
