import { createFileRoute, Link } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/segmentos/simples-nacional")({
  head: () => ({
    ...buildSeoHead({
      title: "Simples Nacional em Goiânia | Anexos, Sublimites e NFS-e — DCON",
      description:
        "Contabilidade consultiva para empresas do Simples Nacional em Goiânia: anexos, fator R, sublimites, NFS-e Nacional (01/11/2026), CBS/IBS em 2027 e defesa em exclusão do regime.",
      canonical: "/segmentos/simples-nacional",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: "/" },
            { "@type": "ListItem", position: 2, name: "Segmentos", item: "/segmentos" },
            { "@type": "ListItem", position: 3, name: "Simples Nacional", item: "/segmentos/simples-nacional" },
          ],
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageScaffold
      eyebrow="Segmento · Regime"
      h1="Simples Nacional em Goiânia: anexos, sublimites e obrigações de 2026"
      lead="O Simples é simples na guia, não na apuração."
      intro={
        <>
          Esta página trata da operação de quem já está no Simples Nacional: enquadramento por anexo,
          fator R, sublimite de ICMS/ISS, obrigações acessórias de 2026 e defesa em caso de exclusão.
          Para o comparativo entre os três regimes, veja{" "}
          <Link to="/conteudos/regimes-tributarios" className="underline decoration-gold/60 hover:text-gold">
            regimes tributários
          </Link>
          .
        </>
      }
      breadcrumbs={[{ label: "Segmentos", to: "/segmentos" }]}
      ctaPrimary={{ label: "Solicitar diagnóstico técnico inicial", to: "/diagnostico" }}
      ctaSecondary={{ label: "Falar com a DCON", to: "/contato" }}
      sections={[
        {
          h2: "Enquadramento correto: anexo, CNAE e fator R",
          lead: "A maior parte do imposto pago a mais no Simples nasce em classificação, não em cálculo.",
          h3: [
            { title: "Anexo por atividade", body: "Atividades de serviço podem migrar do Anexo V para o Anexo III conforme a relação folha/receita — a revisão é mensal, não anual." },
            { title: "Fator R", body: "Cálculo de folha sobre receita bruta dos últimos 12 meses acompanhado mês a mês, com memória de cálculo auditável." },
            { title: "Segregação de receitas", body: "Receitas de revenda, indústria, serviço e locação separadas por anexo — mistura indevida distorce a alíquota efetiva." },
          ],
        },
        {
          h2: "Sublimites, limite de receita e desenquadramento",
          h3: [
            { title: "Sublimite de ICMS/ISS", body: "Ultrapassado o sublimite estadual, ICMS e ISS saem do DAS e passam a ser apurados fora do regime — com obrigações acessórias próprias." },
            { title: "Excesso de receita", body: "Monitoramento do teto anual com projeção de faturamento, para que a saída do regime seja planejada e não descoberta em janeiro." },
            { title: "Substituição tributária e monofásicos", body: "Produtos com ST e tributação monofásica precisam ser expurgados da base do DAS — o que não é feito automaticamente pelo PGDAS." },
          ],
        },
        {
          h2: "NFS-e Nacional e calendário do Simples 2026/2027",
          lead: "Datas e efeitos conforme a Resolução CGSN nº 191/2026.",
          h3: [
            { title: "NFS-e Nacional prorrogada para 01/11/2026", body: "A Resolução CGSN nº 191/2026 prorrogou a obrigatoriedade da NFS-e Nacional para ME e EPP do Simples Nacional para 01/11/2026." },
            { title: "CBS/IBS para optantes do Simples", body: "As regras de CBS/IBS para optantes do Simples passam a produzir efeitos a partir de 01/01/2027." },
            { title: "Opção pelo Simples para 2027", body: "A opção pelo Simples Nacional para 2027 deve ser feita entre 01/09/2026 e 30/09/2026." },
          ],
        },
        {
          h2: "Exclusão do Simples Nacional — prazo de 20 dias úteis",
          lead: "Receber Termo de Exclusão do Simples exige ação rápida: pode haver pagamento, parcelamento, contestação, regularização, transação ou defesa.",
          h3: [
            { title: "Prazo de impugnação", body: "O prazo para impugnar é de 20 dias úteis, contado da ciência do termo (Receita Federal)." },
            { title: "Análise técnica antes de decidir", body: "Cada caminho — pagamento, parcelamento, contestação, regularização, transação ou defesa — depende da origem do débito e da situação cadastral da empresa." },
            { title: "Reflexo operacional", body: "A exclusão altera regime de apuração, obrigações acessórias e preço de venda; a decisão precisa considerar o efeito no exercício inteiro." },
          ],
        },
      ]}
      faq={[
        { q: "Empresa do Simples precisa emitir NFS-e Nacional?", a: "Sim. Para ME e EPP do Simples Nacional a obrigatoriedade foi prorrogada para 01/11/2026 pela Resolução CGSN nº 191/2026." },
        { q: "Recebi Termo de Exclusão do Simples. Qual o prazo?", a: "O prazo para impugnar é de 20 dias úteis, contado da ciência do termo (Receita Federal)." },
        { q: "Quando o Simples sente a reforma tributária?", a: "As regras de CBS/IBS para optantes do Simples passam a produzir efeitos a partir de 01/01/2027." },
      ]}
      relatedLinks={[
        { label: "Guia do Simples Nacional", to: "/conteudos/guia-simples-nacional", eyebrow: "Conteúdo" },
        { label: "Comparativo de regimes tributários", to: "/conteudos/regimes-tributarios", eyebrow: "Conteúdo" },
        { label: "Lucro Presumido e a LC 224/2025", to: "/segmentos/lucro-presumido", eyebrow: "Regime" },
        { label: "Defesas fiscais", to: "/solucoes/defesas-fiscais", eyebrow: "Solução" },
      ]}
    />
  );
}
