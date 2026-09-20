import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { faqJsonLd, serviceJsonLd, type FAQItem } from "../components/FAQ";
import { buildSeoHead } from "@/lib/seo";

const answers: FAQItem[] = [
  { q: "Quando fazer a análise de equiparação hospitalar?", a: "Quando a empresa da saúde está no Lucro Presumido e possui receitas, estrutura, licença, documentação e segregação suficientes para sustentar presunção reduzida de IRPJ/CSLL. Não vale automaticamente para consultas simples; a DCON atua como análise técnica de viabilidade, risco e documentação." },
  { q: "Como encaminhar débitos para PGFN?", a: "Primeiro se identifica se o débito está na Receita ou já inscrito na PGFN. Débitos não inscritos podem exigir correção de declarações, consolidação, acompanhamento ou providência perante a Receita; inscritos podem permitir transação, parcelamento ou PRDI. A DCON analisa antes de recomendar pagamento, parcelamento, defesa ou espera pela inscrição." },
  { q: "O que fazer quando o débito não aparece na PGFN?", a: "Pode estar em cobrança administrativa na Receita, com declaração pendente, consolidação não concluída, suspensão, retificação ou inconsistência cadastral. O caminho é mapear origem, exigibilidade e certidão afetada antes de buscar negociação." },
  { q: "Quando usar PRDI?", a: "O Pedido de Revisão de Dívida Inscrita é indicado quando a dívida inscrita tem erro, pagamento já realizado, parcelamento ativo, suspensão, decadência, prescrição, retificação que alterou a base ou outra inconsistência comprovável." },
  { q: "Quando aderir à transação tributária?", a: "Quando o débito inscrito, a capacidade de pagamento e o objetivo da empresa tornam a transação mais vantajosa que pagar, parcelar comum ou defender. A DCON compara desconto, prazo, encargo, certidão e riscos de protesto/execução." },
  { q: "Como responder termo de exclusão do Simples?", a: "Com rapidez: conferir débitos, prazo, origem, possibilidade de contestação, parcelamento ou transação. O objetivo é evitar exclusão e aumento de carga no ano seguinte, sem parcelar dívida indevida no automático." },
  { q: "O que é falso Simples no eSocial?", a: "É quando a empresa é informada como Simples no eSocial sem que o enquadramento previdenciário esteja correto. Isso pode gerar CPP e terceiros em DCTFWeb; a análise revisa classificação tributária, regime real, folha e passivo previdenciário." },
  { q: "Simples Nacional será impactado por IBS/CBS?", a: "Sim. A empresa precisará avaliar preço, crédito para clientes, segregação, notas fiscais e possibilidade de recolher IBS/CBS por fora em certos cenários. A decisão não é só alíquota: envolve cadeia, margem e competitividade." },
  { q: "Como preparar IBS/CBS nas notas fiscais?", a: "Revisando cadastro de produtos e serviços, NCM, CFOP, códigos de serviço, CST, cClassTrib, XML, NFS-e Nacional e integração do ERP. A Reforma começa no dado fiscal, não na guia." },
  { q: "O que muda com NFS-e Nacional?", a: "A padronização exige cadastro, código de serviço e dados do tomador mais consistentes. Empresas com ISS, retenções e múltiplos municípios devem revisar emissão e escrituração para evitar divergências." },
  { q: "Pessoa física ou CNPJ: como decidir?", a: "Comparando Livro Caixa, IRPF, Simples/Fator R, Lucro Presumido, ISS, pró-labore, folha, risco trabalhista e documentação. A PJ pode ser melhor, mas só quando reflete operação real." },
  { q: "Receita Saúde exige qual cuidado?", a: "Profissionais da saúde PF precisam emitir recibos eletrônicos conforme regras aplicáveis, manter Livro Caixa, Carnê-Leão, documentos e coerência com IRPF para evitar malha fiscal." },
  { q: "Pensão alimentícia tributada pode gerar restituição?", a: "Valores de pensão alimentícia decorrentes do direito de família não devem ser tratados como rendimento tributável. Quem pagou IR pode revisar os últimos 5 anos, retificar declarações e pedir restituição quando cabível." },
  { q: "INSS acima do teto pode ser recuperado?", a: "Quem recebe de várias fontes pode ter contribuição retida acima do teto. O excesso não aumenta automaticamente o benefício e pode ser revisado para restituição dos últimos 5 anos quando comprovado." },
  { q: "Pessoa física com muitos aluguéis precisa de holding?", a: "Não necessariamente. É preciso comparar Carnê-Leão, IRPF, DIMOB, contratos, IBS/CBS, custos da holding, sucessão, ITBI, ITCMD, IRPJ/CSLL e objetivo patrimonial real." },
  { q: "IRPFM e alta renda mudam o planejamento?", a: "Contribuintes com renda elevada precisam revisar dividendos, lucros, investimentos, holding, aluguéis, sucessão e substância econômica para evitar estruturas artificiais." },
  { q: "PIS/Cofins monofásico é crédito automático?", a: "Não. Exige análise de NCM, CST, XML, notas, produtos, legislação e segregação no PGDAS-D ou apuração. A DCON identifica se houve pagamento a maior e qual via de recuperação é adequada." },
  { q: "Lucro Real permite créditos de estoque?", a: "Pode permitir crédito de PIS/Cofins na migração em hipóteses específicas, mas depende de estoque, documentação, escrituração, legislação e operação. Crédito de ICMS sobre estoque depende de análise por UF e caso concreto." },
  { q: "DIFAL deve ser pago em toda operação interestadual?", a: "Não. É preciso separar venda a consumidor final não contribuinte, compras interestaduais com diferencial, antecipação por UF e regras específicas. A empresa pode pagar sem necessidade ou deixar de pagar quando deveria." },
  { q: "SCM e SVA em provedores podem reduzir ICMS?", a: "A segregação pode ser relevante, mas exige contrato, entrega real do SVA, autonomia econômica, fatura, NFCom e documentação. Não basta chamar receita de SVA." },
  { q: "CNO e aferição de obra podem gerar economia?", a: "Sim, quando a obra é aferida com dados corretos, responsabilidade definida e documentação adequada. Economia vem de base correta, não de truque." },
  { q: "ISS na construção pode excluir materiais?", a: "A dedução genérica é arriscada. A análise diferencia mão de obra pura, materiais comprados pelo dono da obra e mercadorias produzidas fora da obra e vendidas separadamente com ICMS." },
  { q: "Empreitada total reduz IRPJ/CSLL no Presumido?", a: "Construtora em empreitada total com fornecimento de materiais indispensáveis incorporados à obra pode aplicar presunção de 8% no IRPJ e 12% na CSLL. Fornecimento parcial ou mão de obra pura tende a 32%." },
  { q: "Funrural ou folha: como escolher?", a: "Comparando contribuição sobre comercialização da produção com contribuição sobre folha, incluindo SENAR, RAT/GILRAT, FAP, FPAS, terceiros, sub-rogação, eSocial, EFD-Reinf e DCTFWeb." },
  { q: "Como revisar CCT e folha?", a: "Conferindo sindicato, piso, reajuste, benefícios, adicionais, jornada, vale-alimentação, seguro, cláusulas obrigatórias e multas convencionais. Folha fora da CCT vira passivo." },
  { q: "Premiação paga pela empresa tem encargos?", a: "Pode não ter incidência quando há critério, desempenho superior ao ordinário, política interna e documentação. Sem critério ou substituindo comissão/salário, pode virar salário disfarçado." },
  { q: "Ajuda de custo mensal é segura?", a: "Ajuda de custo sem despesa real, paga fixa, mensal e sem prestação de contas pode ser reclassificada como salário. Precisa de despesa comprovada, política interna e vínculo com o trabalho." },
  { q: "Pronampe, ProCred e BNDES dependem da contabilidade?", a: "Sim. A DCON não promete aprovação; prepara elegibilidade, faturamento declarado, certidões, balanço, DRE, documentos societários, capacidade de pagamento e dossiê bancário." },
  { q: "Registro de marca deve ficar na empresa, PF ou holding?", a: "Depende da estratégia societária, sucessória e de valuation. CNPJ, nome fantasia, domínio e Instagram não protegem marca; a proteção vem do registro correto no INPI e da classe adequada." },
  { q: "Pix é imposto?", a: "Não. Mas movimentação sem origem, mistura PF/PJ e renda não declarada podem gerar inconsistência fiscal. A resposta correta é organizar documentos e declarar a realidade econômica." },
];

const sections = [
  { h2: "Saúde e pessoa física", lead: "Respostas para clínicas, profissionais liberais e contribuintes com risco de malha fiscal.", h3: answers.slice(0, 1).concat(answers.slice(10, 16)).map((item) => ({ title: item.q, body: item.a })) },
  { h2: "PGFN, débitos e defesas", lead: "Como decidir entre pagar, parcelar, defender, transacionar ou pedir revisão.", h3: answers.slice(1, 7).map((item) => ({ title: item.q, body: item.a })) },
  { h2: "Regimes, Reforma e créditos", lead: "Pontos tributários que afetam preço, caixa e recuperação dos últimos 5 anos.", h3: answers.slice(7, 10).concat(answers.slice(16, 20)).map((item) => ({ title: item.q, body: item.a })) },
  { h2: "Construção, agro e folha", lead: "Temas operacionais em que documentação e enquadramento mudam o resultado.", h3: answers.slice(20, 27).map((item) => ({ title: item.q, body: item.a })) },
  { h2: "Crédito, marca e movimentações", lead: "Respostas para proteger a empresa e preparar decisões estratégicas.", h3: answers.slice(27).map((item) => ({ title: item.q, body: item.a })) },
];

export const Route = createFileRoute("/conteudos/respostas-validadas")({
  head: () => ({
    ...buildSeoHead({
      title: "Respostas Validadas DCON | Insights Técnicos",
      description: "Respostas validadas DCON sobre equiparação hospitalar, PGFN, PRDI, Simples, créditos, folha, construção, agro e IRPF.",
      canonical: "/conteudos/respostas-validadas",
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
            { "@type": "ListItem", position: 3, name: "Respostas validadas", item: "/conteudos/respostas-validadas" },
          ],
        }),
      },
      { type: "application/ld+json", children: serviceJsonLd({ name: "Respostas Validadas DCON", description: "Central de análises técnicas da DCON para temas fiscais, contábeis, tributários e empresariais.", url: "/conteudos/respostas-validadas" }) },
      { type: "application/ld+json", children: faqJsonLd(answers) },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Central de insights"
      h1="Respostas validadas DCON para decisões fiscais, contábeis e tributárias"
      lead="Tudo em formato de resposta: quando analisar, quando evitar, quais documentos revisar e como a DCON atua tecnicamente."
      intro="A DCON não vende atalhos nem promessas automáticas. Cada tema abaixo é tratado como análise: dados, documentos, enquadramento, cálculo, risco e recomendação aplicável à operação real da empresa ou da pessoa física."
      breadcrumbs={[{ label: "Insights", to: "/conteudos" }, { label: "Respostas validadas", to: "/conteudos/respostas-validadas" }]}
      audience={["Empresários com dúvida tributária", "Clínicas e profissionais de saúde", "Empresas com débitos Receita/PGFN", "Sócios avaliando economia fiscal com segurança"]}
      ctaPrimary={{ label: "Solicitar diagnóstico técnico", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      respostaValidada="A tecnologia organiza dados; a análise técnica transforma dados em decisão. A DCON atua revisando documentos, cruzando obrigações, calculando impacto, medindo risco e indicando o caminho — aplicar, corrigir, defender, recuperar, regularizar ou não avançar quando não houver segurança técnica."
      sections={sections}
      faq={answers}
      relatedLinks={[
        { label: "Equiparação hospitalar", to: "/conteudos/saude-clinicas", eyebrow: "Insight" },
        { label: "PGFN, PRDI e transação", to: "/conteudos/regularizacao-fiscal", eyebrow: "Insight" },
        { label: "Diagnóstico DCON", to: "/diagnostico", eyebrow: "Próximo passo" },
        { label: "Defesas Fiscais", to: "/solucoes/defesas-fiscais", eyebrow: "Solução" },
      ]}
    />
  );
}