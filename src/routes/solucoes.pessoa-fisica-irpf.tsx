import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { FAQ, faqJsonLd, serviceJsonLd, type FAQItem } from "../components/FAQ";
import { LeadCaptureForm } from "../components/LeadCaptureForm";

const faqs: FAQItem[] = [
  { q: "Devo abrir CNPJ ou continuar como PF?", a: "Depende da atividade, renda, despesas dedutíveis e contratantes. Comparamos PF (Livro Caixa, Carnê-Leão) com CNPJ (Simples, Fator R, pró-labore) antes de qualquer migração." },
  { q: "Sou médico — o que muda com o Receita Saúde?", a: "Recibo eletrônico, Livro Caixa e Carnê-Leão obrigatórios para PF da saúde. Em muitos casos, comparar com CNPJ no Anexo III via Fator R reduz carga significativamente." },
  { q: "Recebi pensão alimentícia e declarei como tributável. Posso recuperar?", a: "Sim, é possível retificar declarações dos últimos 5 anos e pedir restituição do IRPF pago indevidamente sobre a pensão." },
  { q: "Pago INSS em várias fontes. Posso pedir restituição?", a: "Sim. Contribuintes com CLT + pró-labore + autônomo podem contribuir acima do teto e recuperar nos últimos 5 anos via análise do CNIS e ajuste no Carnê-Leão." },
  { q: "Recebi Pix alto — vou ser tributado?", a: "Pix não é imposto, mas movimentação sem origem, mistura PF/PJ e renda não declarada podem virar problema fiscal na e-Financeira. O importante é ter origem documentada." },
];

export const Route = createFileRoute("/solucoes/pessoa-fisica-irpf")({
  head: () => ({
    meta: [
      { title: "IRPF, PF x PJ e Restituição para Alta Renda | DCON" },
      { name: "description", content: "Você pode estar pagando imposto acima do necessário sem perceber. Planejamento para profissionais liberais, locadores e alta renda." },
      { property: "og:title", content: "IRPF, PF x PJ e Restituição para Alta Renda | DCON" },
      { property: "og:description", content: "PF x CNPJ, Carnê-Leão, Receita Saúde, restituição de pensão, INSS acima do teto e malha fina." },
      { property: "og:url", content: "/solucoes/pessoa-fisica-irpf" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/pessoa-fisica-irpf" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Início","item":"/"},{"@type":"ListItem","position":2,"name":"Soluções","item":"/solucoes"},{"@type":"ListItem","position":3,"name":"Pessoa Física e IRPF","item":"/solucoes/pessoa-fisica-irpf"}]}) },
      { type: "application/ld+json", children: serviceJsonLd({ name: "IRPF e Planejamento PF", description: "Diagnóstico fiscal para pessoa física: PF x CNPJ, IRPF, restituições, malha fina e profissionais liberais.", url: "/solucoes/pessoa-fisica-irpf" }) },
      { type: "application/ld+json", children: faqJsonLd(faqs) },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Solução"
      h1="Pessoa física, IRPF e planejamento para alta renda"
      intro="Pessoa física também precisa de diagnóstico fiscal — principalmente com alta renda, aluguéis, várias fontes pagadoras ou atividade autônoma. A DCON revisa, recupera e organiza."
      intent="planejamento tributário pessoa física, IRPF profissional liberal, restituição INSS"
      ctaPrimary={{ label: "Quero comparar PF x CNPJ", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      pillarKey="pessoa-fisica-irpf"
      sections={[
        { h2: "PF ou CNPJ", h3: [
          { title: "Comparativo técnico", body: "Livro Caixa, Carnê-Leão, Simples Nacional, Fator R, Anexo III, Anexo V, pró-labore e modelo híbrido — a migração depende de simulação, não apenas da alíquota." },
        ]},
        { h2: "Receita Saúde", h3: [
          { title: "Profissionais da saúde", body: "Médicos, dentistas, psicólogos e fisioterapeutas PF: recibo eletrônico, Livro Caixa, Carnê-Leão, malha fina e comparativo com CNPJ no Fator R." },
        ]},
        { h2: "Malha fina e intimação", h3: [
          { title: "Defesa administrativa", body: "Documentos, intimação, Notificação de Lançamento, impugnação, defesa e regularização — preferencialmente antes da autuação." },
        ]},
        { h2: "Aluguéis e holding", h3: [
          { title: "Carnê-Leão e DIMOB", body: "IRRF, contratos, locatário PF/PJ, IBS/CBS e momento de migrar para holding patrimonial." },
        ]},
        { h2: "Restituição INSS acima do teto", h3: [
          { title: "Várias fontes pagadoras", body: "CLT + pró-labore + contribuinte individual: análise de CNIS e restituição dos últimos 5 anos." },
        ]},
        { h2: "e-Financeira, Pix e movimentação", h3: [
          { title: "Origem documentada", body: "Pix não é imposto, mas mistura PF/PJ e renda não declarada podem virar autuação. Organização documental é a melhor defesa." },
        ]},
      ]}
    >
      <FAQ items={faqs} />
      <LeadCaptureForm page="solucoes" />
    </PageScaffold>
  );
}