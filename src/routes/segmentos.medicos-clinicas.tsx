import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { getDoc } from "../lib/dcon-content";
import { MethodBadge } from "../components/MethodBadge";
import { dconMethod } from "../lib/dconMethod";
import { faqJsonLd, type FAQItem } from "../components/FAQ";
import { buildSeoHead } from "@/lib/seo";

const faqs: FAQItem[] = [
  { q: "Quando fazer análise de equiparação hospitalar?", a: "Quando a clínica está no Lucro Presumido, tem receitas potencialmente qualificadas e consegue comprovar atividade, licença, estrutura, documentação e segregação de receitas. A DCON analisa viabilidade; não aplica tese automática." },
  { q: "Equiparação hospitalar vale para consulta médica simples?", a: "Não como regra. Consultas simples normalmente ficam fora. A análise separa receitas qualificadas e não qualificadas para evitar glosa fiscal." },
  { q: "PJ médica é sempre melhor que pessoa física?", a: "Não. É preciso comparar Livro Caixa, Carnê-Leão, IRPF, CNPJ, Fator R, anexos do Simples, Lucro Presumido, ISS, pró-labore e risco trabalhista." },
  { q: "A DCON recupera valores dos últimos 5 anos?", a: "Quando a documentação sustenta pagamento indevido, pode haver revisão e recuperação. O trabalho exige base legal, memória de cálculo, retificações cabíveis e rastreabilidade." },
];

export const Route = createFileRoute("/segmentos/medicos-clinicas")({
  head: () => ({
    ...buildSeoHead({
      title: "Contabilidade para Médicos e Clínicas em Goiânia | DCON",
      description: "Contabilidade para médicos e clínicas em Goiânia: enquadramento ideal, fator R, equiparação hospitalar e planejamento tributário com a DCON.",
      canonical: "/segmentos/medicos-clinicas",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "https://dcon.cnt.br/"}, {"@type": "ListItem", "position": 2, "name": "Segmentos", "item": "https://dcon.cnt.br/segmentos/"}, {"@type": "ListItem", "position": 3, "name": "Médicos e Clínicas", "item": "https://dcon.cnt.br/segmentos/medicos-clinicas/"}]}),
      },
      { type: "application/ld+json", children: faqJsonLd(faqs) },
    ],
  }),
  component: Page,
});

const docDcon = getDoc(15);

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1={docDcon.h1}
      lead="A DCON atua como análise técnica da tributação na saúde: PF x PJ, Fator R, Simples, Lucro Presumido, Receita Saúde e equiparação hospitalar."
      intro={docDcon.fraseComercial}
      intent="contabilidade para médicos Goiânia, contador para clínica médica"
      observation="Schema MedicalBusiness-friendly + FAQPage."
      audience={docDcon.audience}
      ctaPrimary={docDcon.ctas[0]}
      ctaSecondary={docDcon.ctas[1]}
      ctaTertiary={docDcon.ctas[2]}
      respostaValidada={docDcon.respostaValidada}
      pillarKey="medicos-clinicas"
      method={dconMethod}
      ctaVariant="opportunity"
      sections={[
      { h2: "Particularidades do segmento médico", h3: [{"title":"PJ médica","body":"Quando vale, quando não vale e como estruturar com segurança tributária e trabalhista."},{"title":"Equiparação hospitalar","body":"Análise de Lucro Presumido, receitas qualificadas, licença, estrutura, documentação e segregação. Não é promessa automática."},{"title":"Receita Saúde e PF","body":"Livro Caixa, Carnê-Leão, recibos eletrônicos e malha fiscal para profissionais que ainda atuam como pessoa física."},{"title":"Sociedade médica","body":"Distribuição entre sócios, pró-labore, contratos de cooperação, repasses de convênios e responsabilidade técnica."}] },
      { h2: "Fator R e Simples Nacional", h3: [{"title":"Anexo III x Anexo V","body":"Empresas médicas devem revisar se a folha permite enquadramento no Anexo III ou se caem no Anexo V — decisão envolve pró-labore, folha, receita bruta, ISS, margem e distribuição de lucros."},{"title":"Cálculo mensal","body":"Fator R apurado mês a mês para evitar mudança automática de anexo sem que a empresa perceba."}] },
      { h2: "Fator R: o que realmente decide seu enquadramento tributário", lead: "Se sua clínica ou consultório está no Simples Nacional, o Fator R é provavelmente a variável mais importante — e menos compreendida — do seu regime tributário. Ele decide se você paga impostos pelo Anexo III (alíquotas mais baixas) ou pelo Anexo V (alíquotas mais altas), e a diferença no bolso costuma ser significativa. A fórmula é simples na forma, mas exige atenção na prática: Fator R = FS12 / RBT12. RBT12: receita bruta total dos últimos 12 meses. Regra de corte: se o resultado for igual ou superior a 28%, Anexo III; abaixo de 28%, Anexo V (art. 18, §5º-J e §5º-M da LC nº 123/2006).", h3: [{ title: "Onde a maioria das clínicas erra", body: "1) Pró-labore insuficiente: fixar pró-labore simbólico reduz o FS12 e derruba o Fator R abaixo de 28%, aumentando a carga tributária total além da economia de INSS pretendida. 2) Confundir CPP com valor bruto da folha: o FS12 soma remuneração + encargos (inclui INSS patronal). 3) Não projetar anualmente: o cálculo é sobre os últimos 12 meses móveis (Resolução CGSN 140/2018, art. 25-A)." }, { title: "Por que isso importa na prática", body: "Uma diferença de poucos pontos percentuais no Fator R pode representar milhares de reais por ano em ISS e PIS/COFINS/CSLL/IRPJ dentro do DAS. Antes de decidir pró-labore, contratações ou distribuição de lucros, o cálculo do Fator R projetado deveria ser parte do planejamento tributário anual da clínica — não um ajuste reativo feito em dezembro." }], content: <aside className="border-l-2 border-gold bg-card p-6 text-foreground/90">A DCON simula o Fator R projetado considerando folha atual, pró-labore dos sócios e cenários de contratação, para que a decisão sobre remuneração dos sócios seja tomada com o impacto tributário completo em vista — não isoladamente.</aside> },
      {
        h2: "ISS fixo ou equiparação hospitalar?",
        lead: "Em outubro de 2025, o STJ julgou em caráter repetitivo o Tema 1.323, definindo que sociedades uniprofissionais podem ter direito ao ISS fixo mesmo quando constituídas sob a forma de sociedade limitada — ou seja, o tipo societário (Ltda.) por si só não exclui automaticamente o regime de tributação diferenciada previsto no art. 9º, §§1º e 3º, do Decreto-Lei nº 406/1968. Isso é relevante porque muitos municípios (inclusive historicamente Goiânia) negavam o ISS fixo a clínicas organizadas como Ltda., presumindo caráter empresarial só pela forma societária. O STJ afastou esse critério isolado. Mas atenção: o STJ não deu \"cheque em branco\". A tese fixada exige, cumulativamente: 1) Prestação pessoal do serviço pelos sócios profissionais (o médico atende, não apenas administra); 2) Responsabilidade técnica individual de cada profissional habilitado pelos atos praticados; 3) Ausência de estrutura empresarial predominante — a sociedade não pode funcionar como empresa que apenas coordena terceiros, com estrutura de captação de clientela, marketing agressivo e gestão empresarial se sobrepondo ao caráter técnico-profissional. Em Goiânia, a Lei Complementar Municipal nº 344/2021, art. 223, já trazia previsão de ISS fixo para sociedades uniprofissionais — o julgado do STJ reforça essa aplicação e reduz a margem de glosa municipal baseada unicamente no tipo societário.",
        h3: [
          {
            title: "ISS fixo × equiparação hospitalar: não são a mesma discussão",
            body: (
              <div className="space-y-4">
                <p>É comum confundir os dois temas porque ambos tratam de tributação favorecida para clínicas — mas são completamente distintos.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-border">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-2 text-left font-medium">Critério</th>
                        <th className="px-4 py-2 text-left font-medium">ISS fixo</th>
                        <th className="px-4 py-2 text-left font-medium">Equiparação hospitalar</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-border">
                        <td className="px-4 py-2 font-medium">Tributo afetado</td>
                        <td className="px-4 py-2">ISS municipal</td>
                        <td className="px-4 py-2">IRPJ/CSLL federal, presunção de lucro</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="px-4 py-2 font-medium">Base legal</td>
                        <td className="px-4 py-2">DL 406/1968 + STJ Tema 1.323</td>
                        <td className="px-4 py-2">Lei nº 9.249/1995 art. 15 §1º III a</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="px-4 py-2 font-medium">O que resolve</td>
                        <td className="px-4 py-2">Valor fixo mensal em vez de percentual sobre faturamento</td>
                        <td className="px-4 py-2">Redução da base presumida de 32% para 8%/12%</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="px-4 py-2 font-medium">Requisito central</td>
                        <td className="px-4 py-2">Atuação pessoal sem estrutura empresarial</td>
                        <td className="px-4 py-2">Estrutura assistencial equiparável a hospital, RDC Anvisa</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>Uma clínica pode fazer jus a um, ao outro, aos dois, ou a nenhum — a análise é sempre caso a caso, examinando a estrutura societária e assistencial concreta.</p>
              </div>
            ),
          },
        ],
        content: <aside className="border-l-2 border-gold bg-card p-6 text-foreground/90">A DCON avalia se sua clínica atende aos requisitos do Tema 1.323 e, separadamente, se há espaço para equiparação hospitalar — são duas frentes de economia tributária que exigem laudos e enquadramentos diferentes.</aside>,
      },
      { h2: "PF x PJ na saúde", h3: [{"title":"Comparativo técnico","body":"Médicos, dentistas, psicólogos, fisioterapeutas e terapeutas comparam tributação como PF e PJ, considerando Fator R, Simples, Lucro Presumido, ISS e pró-labore."},{"title":"Receita Saúde", body:"Recibo eletrônico, Livro Caixa, Carnê-Leão, despesas dedutíveis e risco de malha revisados antes da decisão."}] },
      { h2: "Equiparação hospitalar: quando se aplica", lead: "Empresas da saúde no Lucro Presumido podem aplicar presunção reduzida quando prestam serviços hospitalares ou de auxílio diagnóstico e terapia: IRPJ de 32% para 8% e CSLL de 32% para 12%, com base no art. 15, §1º, III, \"a\" da Lei 9.249/1995. Base legal: Lei 9.249/1995; IN RFB 1.234/2012; RDC Anvisa 50/2002; Súmula CARF 142.", h3: [
        { title: "Requisitos cumulativos", body: "Sociedade empresária (não sociedade simples, embora o CARF já tenha decidido que não exige registro formal na Junta Comercial), regime de Lucro Presumido (não se aplica ao Simples Nacional), atividades vinculadas às atribuições 1 a 4 da Resolução RDC 50/2002 da Anvisa e comprovação por alvará da vigilância sanitária." },
        { title: "Solução de Consulta Disit/SRRF03 nº 3.005, de 21/01/2025", body: "Baseada no art. 30 c/c art. 38, II da IN RFB 1.234/2012, reforçou esses critérios." },
        { title: "Não é direito automático", body: "Consulta médica isolada NÃO se equipara a serviço hospitalar (Súmula CARF 142). É tese que depende de qualificação técnica, documentação e coerência entre contrato, nota fiscal e prontuário, sujeita a questionamento em fiscalização — não é blindagem nem garantia de resultado." },
      ]},
      { h2: "Como a DCON analisa equiparação hospitalar", h3: [{"title":"Base documental","body":"Contrato social, CNAE, licenças, notas, contratos, apurações, ECD/ECF, DRE e histórico dos últimos 5 anos."},{"title":"Receita segregada","body":"Separação entre consultas simples, procedimentos qualificados, receitas administrativas e atividades acessórias."},{"title":"Cálculo de impacto","body":"Comparação da presunção atual com IRPJ 8% e CSLL 12% apenas sobre a base elegível."},{"title":"Conclusão técnica","body":"Aplicar, não aplicar, aplicar parcialmente ou corrigir estrutura antes de qualquer medida fiscal."}] },
      { h2: "Riscos comuns", h3: [{"title":"Pejotização mal feita","body":"Risco trabalhista alto quando o vínculo não está estruturado."},{"title":"Aplicar tese sem lastro","body":"Equiparação sem atividade, licença, estrutura e segregação pode gerar glosa, diferença de IRPJ/CSLL, multa e juros."},{"title":"ISS mal apurado","body":"Município, código de serviço, retenção e local da prestação errados custam caro."},{"title":"Regime inadequado","body":"Simples sem Fator R, Presumido mal aplicado ou PF com Livro Caixa fraco podem elevar carga tributária."}] },
      { h2: "Como a DCON atua", h3: [{"title":"Diagnóstico tributário do médico","body":"Revisão de regime, sociedade, receita de plano de saúde, Livro Caixa, Fator R e equiparação."},{"title":"Rotina técnica","body":"DP, fiscal e contábil integrados, com documentação auditável para decisões tributárias."},{"title":"Revisão periódica","body":"Acompanhamento anual ou por mudança de receita, sócios, regime, folha e estrutura operacional."}] },
      ]}
      faq={faqs}
    >
      <MethodBadge note="Saúde conduzida pelo protocolo DCON" />
      <div className="bg-card border border-border p-6 md:p-8">
        <p className="text-[15px] leading-relaxed text-foreground/90">
          Sua clínica pode ter direito a redução e recuperação de IRPJ e CSLL —{" "}
          <a
            href="/segmentos/equiparacao-hospitalar-recuperacao-irpj-csll/"
            className="underline decoration-gold/50 hover:text-foreground"
          >
            veja nossa análise aprofundada sobre equiparação hospitalar
          </a>
          .
        </p>
      </div>
    </PageScaffold>
  );
}
