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
        children: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Início", "item": "/"}, {"@type": "ListItem", "position": 2, "name": "Soluções", "item": "/solucoes"}, {"@type": "ListItem", "position": 3, "name": "Abrir Empresa", "item": "/solucoes/abrir-empresa"}]}),
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
      intro="Uma empresa bem estruturada comeca pelo contrato social. Abrir uma empresa vai muito alem de obter um CNPJ e preencher um contrato social padrao. As decisoes tomadas na constituicao definem como a sociedade funcionara e podem evitar conflitos, prejuizos e paralisacoes no futuro. Na DCON, a abertura e analisada considerando nao apenas as exigencias cadastrais e tributarias, mas tambem os principais riscos societarios do negocio."
      intent="abrir empresa Goiânia, como abrir CNPJ"
      observation="Alto volume de busca local."
      ctaPrimary={{ label: "Solicitar diagnostico para abertura da empresa", to: "/diagnostico" }}
      pillarKey="abrir-empresa"
      sections={[
      { h2: "Pontos que precisam ser definidos desde o inicio", h3: [
        { title: "Falecimento de um dos socios", body: "O contrato deve estabelecer o que acontecera com as quotas: se serao liquidadas, adquiridas pelos socios remanescentes ou se podera ocorrer o ingresso dos herdeiros. Tambem e importante definir como sera calculado e pago o valor devido." },
        { title: "Retirada de um socio", body: "E necessario prever o procedimento de saida, o prazo de comunicacao e a forma de apuracao dos haveres. Sem criterios claros, podem surgir divergencias sobre o valor da participacao e as condicoes de pagamento." },
        { title: "Venda ou transferencia de quotas", body: "Os demais socios terao preferencia na aquisicao? Um terceiro podera entrar na sociedade sem a concordancia de todos? Essas regras ajudam a preservar o controle e a identidade do negocio." },
        { title: "Impasse entre os socios", body: "Sociedades com participacoes iguais podem enfrentar bloqueios em decisoes importantes. Por isso, e recomendavel prever criterios de desempate e mecanismos para solucionar impasses sem comprometer a operacao." },
        { title: "Poderes dos administradores", body: "Quem podera movimentar contas bancarias, contratar emprestimos, prestar garantias, vender bens ou assumir obrigacoes em nome da empresa? A definicao adequada dos poderes protege tanto a sociedade quanto os proprios socios." },
        { title: "Distribuicao de lucros e responsabilidades", body: "Tambem devem ser avaliadas as regras para distribuicao de resultados, realizacao de aportes, aprovacao de contas e responsabilidades de cada socio na administracao." },
      ] },
      { h2: "Contrato padrao nem sempre protege o negocio", lead: "Muitos conflitos societarios comecam em situacoes que poderiam ter sido previstas na abertura. Quando o contrato e generico ou omisso, o problema costuma aparecer no pior momento: na saida de um socio, em uma divergencia entre administradores ou durante uma sucessao familiar. A DCON identifica os riscos, orienta a estrutura contabil, tributaria e societaria adequada e coordena, quando necessaria, a formalizacao juridica com profissional habilitado." },
      { h2: "Abra sua empresa com uma estrutura pensada para o presente e para o futuro." },
      ]}
    />
  );
}
