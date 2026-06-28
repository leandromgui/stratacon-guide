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
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "/"}, {"@type": "ListItem", "position": 2, "name": "Segmentos", "item": "/segmentos"}, {"@type": "ListItem", "position": 3, "name": "Médicos e Clínicas", "item": "/segmentos/medicos-clinicas"}]}),
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
      { h2: "PF x PJ na saúde", h3: [{"title":"Comparativo técnico","body":"Médicos, dentistas, psicólogos, fisioterapeutas e terapeutas comparam tributação como PF e PJ, considerando Fator R, Simples, Lucro Presumido, ISS e pró-labore."},{"title":"Receita Saúde", body:"Recibo eletrônico, Livro Caixa, Carnê-Leão, despesas dedutíveis e risco de malha revisados antes da decisão."}] },
      { h2: "Como a DCON analisa equiparação hospitalar", h3: [{"title":"Base documental","body":"Contrato social, CNAE, licenças, notas, contratos, apurações, ECD/ECF, DRE e histórico dos últimos 5 anos."},{"title":"Receita segregada","body":"Separação entre consultas simples, procedimentos qualificados, receitas administrativas e atividades acessórias."},{"title":"Cálculo de impacto","body":"Comparação da presunção atual com IRPJ 8% e CSLL 12% apenas sobre a base elegível."},{"title":"Conclusão técnica","body":"Aplicar, não aplicar, aplicar parcialmente ou corrigir estrutura antes de qualquer medida fiscal."}] },
      { h2: "Riscos comuns", h3: [{"title":"Pejotização mal feita","body":"Risco trabalhista alto quando o vínculo não está estruturado."},{"title":"Aplicar tese sem lastro","body":"Equiparação sem atividade, licença, estrutura e segregação pode gerar glosa, diferença de IRPJ/CSLL, multa e juros."},{"title":"ISS mal apurado","body":"Município, código de serviço, retenção e local da prestação errados custam caro."},{"title":"Regime inadequado","body":"Simples sem Fator R, Presumido mal aplicado ou PF com Livro Caixa fraco podem elevar carga tributária."}] },
      { h2: "Como a DCON atua", h3: [{"title":"Diagnóstico tributário do médico","body":"Revisão de regime, sociedade, receita de plano de saúde, Livro Caixa, Fator R e equiparação."},{"title":"Rotina técnica","body":"DP, fiscal e contábil integrados, com documentação auditável para decisões tributárias."},{"title":"Revisão periódica","body":"Acompanhamento anual ou por mudança de receita, sócios, regime, folha e estrutura operacional."}] },
      ]}
      faq={faqs}
    >
      <MethodBadge note="Saúde conduzida pelo protocolo DCON" />
    </PageScaffold>
  );
}
