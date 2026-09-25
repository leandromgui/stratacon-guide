import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/solucoes/abrir-empresa")({
  head: () => ({
    ...buildSeoHead({
      title: "Abrir Empresa em Goiânia | DCON Contabilidade",
      description: "Abertura de empresa em Goiânia com a DCON: definição de CNAE, regime tributário, contrato social e legalização completa em todos os órgãos.",
      canonical: "/solucoes/abrir-empresa",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "https://dcon.cnt.br/"}, {"@type": "ListItem", "position": 2, "name": "Soluções", "item": "https://dcon.cnt.br/solucoes/"}, {"@type": "ListItem", "position": 3, "name": "Abrir Empresa", "item": "https://dcon.cnt.br/solucoes/abrir-empresa/"}]}),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Soluções"
      h1="Abrir empresa com enquadramento e estrutura corretos desde o início"
      intro="Uma empresa bem estruturada começa pelo contrato social. Abrir uma empresa vai muito além de obter um CNPJ e preencher um contrato social padrão. As decisões tomadas na constituição definem como a sociedade funcionará e podem evitar conflitos, prejuízos e paralisações no futuro. Na DCON, a abertura é analisada considerando não apenas as exigências cadastrais e tributárias, mas também os principais riscos societários do negócio."
      intent="abrir empresa Goiânia, como abrir CNPJ"
      observation="Alto volume de busca local."
      ctaPrimary={{ label: "Solicitar diagnóstico para abertura da empresa", to: "/diagnostico" }}
      pillarKey="abrir-empresa"
      sections={[
      { h2: "Pontos que precisam ser definidos desde o início", h3: [
        { title: "Falecimento de um dos sócios", body: "O contrato deve estabelecer o que acontecerá com as quotas: se serão liquidadas, adquiridas pelos sócios remanescentes ou se poderá ocorrer o ingresso dos herdeiros. Também é importante definir como será calculado e pago o valor devido." },
        { title: "Retirada de um sócio", body: "É necessário prever o procedimento de saída, o prazo de comunicação e a forma de apuração dos haveres. Sem critérios claros, podem surgir divergências sobre o valor da participação e as condições de pagamento." },
        { title: "Venda ou transferência de quotas", body: "Os demais sócios terão preferência na aquisição? Um terceiro poderá entrar na sociedade sem a concordância de todos? Essas regras ajudam a preservar o controle e a identidade do negócio." },
        { title: "Impasse entre os sócios", body: "Sociedades com participações iguais podem enfrentar bloqueios em decisões importantes. Por isso, é recomendável prever critérios de desempate e mecanismos para solucionar impasses sem comprometer a operação." },
        { title: "Poderes dos administradores", body: "Quem poderá movimentar contas bancárias, contratar empréstimos, prestar garantias, vender bens ou assumir obrigações em nome da empresa? A definição adequada dos poderes protege tanto a sociedade quanto os próprios sócios." },
        { title: "Distribuição de lucros e responsabilidades", body: "Também devem ser avaliadas as regras para distribuição de resultados, realização de aportes, aprovação de contas e responsabilidades de cada sócio na administração." },
      ] },
      { h2: "Contrato padrão nem sempre protege o negócio", lead: "Muitos conflitos societários começam em situações que poderiam ter sido previstas na abertura. Quando o contrato é genérico ou omisso, o problema costuma aparecer no pior momento: na saída de um sócio, em uma divergência entre administradores ou durante uma sucessão familiar. A DCON identifica os riscos, orienta a estrutura contábil, tributária e societária adequada e coordena, quando necessária, a formalização jurídica com profissional habilitado." },
      { h2: "Abra sua empresa com uma estrutura pensada para o presente e para o futuro." },
      ]}
    />
  );
}
