import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/segmentos/e-commerce")({
  head: () => ({
    ...buildSeoHead({
      title: "Contabilidade para E-commerce em Goiânia | DCON",
      description: "Contabilidade para e-commerce em Goiânia: ICMS-ST, DIFAL, marketplaces e conciliação de gateways. Especialistas DCON em lojas virtuais.",
      canonical: "/segmentos/e-commerce",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "https://dcon.cnt.br/"}, {"@type": "ListItem", "position": 2, "name": "Segmentos", "item": "https://dcon.cnt.br/segmentos/"}, {"@type": "ListItem", "position": 3, "name": "E-commerce", "item": "https://dcon.cnt.br/segmentos/e-commerce/"}]}),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento"
      h1="Contabilidade para e-commerce, marketplaces e operações digitais"
      intro="Contabilidade técnica desenhada para a realidade tributária e operacional de e-commerce e marketplaces."
      intent="contabilidade para e-commerce, ICMS marketplace, DIFAL"
      observation="FAQ + comparativos por estado."
      ctaPrimary={{ label: "Solicitar diagnóstico", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      pillarKey="e-commerce"
      sections={[
        { h2: "ICMS-ST, DIFAL e cadastro fiscal", lead: "No e-commerce o tributo nasce no cadastro de produto e na regra do destino — sem disciplina cadastral, cada venda vira passivo silencioso.", h3: [
          { title: "ICMS-ST", body: "ST por produto, MVA, convênio estadual e base efetiva — recuperação de ST paga a maior em até 5 anos quando há lastro." },
          { title: "DIFAL", body: "Partilha entre estados, GNRE, Simples Nacional, consumidor final e autorregularização tratados antes da autuação." },
          { title: "Marketplace x loja própria", body: "Mercado Livre, Shopee, Amazon, Shopify e Nuvemshop — quem é o vendedor jurídico, quem retém, quem repassa e como a nota é emitida." },
        ]},
        { h2: "Logística, estoque e SPED", h3: [
          { title: "CD em outro estado", body: "Transferência entre estabelecimentos, ICMS de origem e cálculo correto da base impactam preço final e crédito do cliente PJ." },
          { title: "Estoque conciliado", body: "Estoque físico x escritural conferido — diferença gera presunção de venda sem nota e tributação retroativa." },
          { title: "Perdas e quebras", body: "Documentação técnica para reconhecer perda dentro da legislação e não pagar imposto sobre mercadoria que não foi vendida." },
        ]},
        { h2: "Regime tributário e margem", h3: [
          { title: "Simples x Presumido x Real", body: "Margem, frete, marketing, taxa de marketplace e crédito de PIS/Cofins simulados antes da escolha — Simples nem sempre é o mais econômico." },
          { title: "Sublimite estadual", body: "Faturamento monitorado para evitar mudança automática de regime no meio do ano e perda de benefício estadual." },
        ]},
        { h2: "Reforma Tributária no e-commerce", h3: [
          { title: "IBS/CBS na NF-e e NFC-e", body: "Documentos fiscais passam a carregar os novos tributos — a nota pode ser autorizada e ainda assim estar fiscalmente incorreta." },
          { title: "Decisão de 2027", body: "Setembro/2026 é mês de decisão para B2B do Simples: competitividade, crédito para clientes e preço simulados antes do regime regular de IBS/CBS." },
        ]},
        { h2: "Benefícios fiscais para e-commerce em Goiás e outros Estados", content: (
          <div className="space-y-5">
            <p>Uma operação de e-commerce pode estar sujeita ao ICMS normal, ao DIFAL e ao FCP e, ao mesmo tempo, apresentar elegibilidade para crédito outorgado, redução de base de cálculo, diferimento ou tratamento tributário especial. A oportunidade não decorre apenas do CNAE ou da plataforma utilizada. Ela depende da mercadoria, do destinatário, do Estado de origem, do destino da venda e da estrutura efetivamente mantida pela empresa.</p>
            <p>Em Goiás, operações interestaduais não presenciais destinadas a consumidor final não contribuinte podem, mediante TARE, utilizar crédito outorgado previsto na Lei nº 21.555/2022 e no inciso LXXVI do art. 11 do Anexo IX do RCTE. O benefício possui condições de investimento, regularidade fiscal, escrituração e, para empresas já estabelecidas, metas de arrecadação.</p>
            <p>A DCON realiza a análise comparativa entre Goiás e regimes existentes em outros Estados, incluindo COMPETE-ES, TTD 478 de Santa Catarina e TTS/E-commerce de Minas Gerais. O estudo considera não apenas a carga nominal, mas também créditos estornados, DIFAL, FCP, ICMS-ST, frete, estoque, custo logístico e obrigações de manutenção do benefício.</p>
            <a className="inline-flex font-medium text-secondary underline decoration-gold underline-offset-4 hover:text-gold" href="/conteudos/beneficio-fiscal-ecommerce-goias/">
              Veja a análise completa sobre o benefício fiscal para e-commerce em Goiás
            </a>
          </div>
        )},
      ]}
    />
  );
}
