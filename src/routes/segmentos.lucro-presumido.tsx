import { createFileRoute, Link } from "@tanstack/react-router";
import { PageScaffold } from "../components/PageScaffold";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/segmentos/lucro-presumido")({
  head: () => ({
    ...buildSeoHead({
      title: "Lucro Presumido em Goiânia | LC 224/2025 e Presunção — DCON",
      description:
        "Lucro Presumido em Goiânia: percentuais de presunção por atividade, PIS/Cofins cumulativo e o acréscimo de 10% da LC 224/2025 para receita acima de R$ 5 milhões.",
      canonical: "/segmentos/lucro-presumido",
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
            { "@type": "ListItem", position: 3, name: "Lucro Presumido", item: "/segmentos/lucro-presumido" },
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
      h1="Lucro Presumido em Goiânia"
      lead="A presunção deixou de ser fixa — e isso muda a conta de 2026."
      intro={
        <>
          Esta página trata da apuração de quem está no Lucro Presumido: percentuais de presunção por
          atividade, PIS/Cofins cumulativo, trimestralidade do IRPJ/CSLL e o impacto direto da
          LC 224/2025. Para o comparativo entre regimes, veja{" "}
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
          h2: "Atenção: LC 224/2025 e o acréscimo na presunção",
          lead: "A LC 224/2025 impacta empresas no Lucro Presumido com receita acima de R$ 5 milhões ao ano ou R$ 1,25 milhão por trimestre.",
          h3: [
            { title: "Acréscimo de 10% sobre a presunção", body: "Acréscimo de 10% sobre os percentuais de presunção, aplicado sobre a parcela excedente." },
            { title: "Exemplos de percentuais", body: "Comércio/indústria: 8% vira 8,8% no excedente. Serviços em geral: 32% vira 35,2% no excedente." },
            { title: "Vigência", body: "Aplicação desde 01/01/2026 (IRPJ) e 01/04/2026 (demais tributos). Base legal: LC 224/2025." },
          ],
        },
        {
          h2: "Presunção por atividade e receitas mistas",
          h3: [
            { title: "Percentual por natureza da receita", body: "Cada atividade tem percentual próprio de presunção; empresas com receitas mistas apuram por segregação, não por média." },
            { title: "Receitas financeiras e outras receitas", body: "Ganhos de capital, receitas financeiras e recuperações entram integralmente na base, fora da presunção." },
            { title: "Documentação da atividade", body: "Contratos, notas e objeto social precisam sustentar o percentual adotado — a fiscalização revisa o enquadramento, não só o cálculo." },
          ],
        },
        {
          h2: "PIS/Cofins cumulativo e trimestralidade",
          h3: [
            { title: "Regime cumulativo", body: "Sem crédito sobre insumos, o custo tributário depende da estrutura de compras — o que muda a decisão de regime em operações com margem apertada." },
            { title: "IRPJ e CSLL trimestrais", body: "Apuração fechada por trimestre limita compensação de prejuízo; o planejamento do resultado precisa ser trimestral." },
            { title: "Adicional de IRPJ", body: "Controle do limite trimestral para o adicional de 10%, com projeção de receita ao longo do ano." },
          ],
        },
        {
          h2: "Quando o Presumido deixa de compensar",
          h3: [
            { title: "Margem real abaixo da presumida", body: "Se a margem efetiva é menor que a presunção, o Lucro Real tende a ser mais econômico — a comparação precisa ser numérica." },
            { title: "Efeito combinado com a LC 224/2025", body: "Empresas próximas de R$ 5 milhões devem simular o excedente antes de decidir a permanência no regime." },
            { title: "Transição para CBS/IBS", body: "A mudança de PIS/Cofins para CBS altera a lógica de crédito e precisa entrar na simulação de regime." },
          ],
        },
      ]}
      faq={[
        { q: "A LC 224/2025 vale para qualquer empresa do Presumido?", a: "Ela impacta empresas no Lucro Presumido com receita acima de R$ 5 milhões ao ano ou R$ 1,25 milhão por trimestre, com acréscimo de 10% sobre os percentuais de presunção aplicado à parcela excedente." },
        { q: "Desde quando o acréscimo se aplica?", a: "Desde 01/01/2026 para o IRPJ e 01/04/2026 para os demais tributos, conforme a LC 224/2025." },
        { q: "Serviços passam de 32% para quanto?", a: "Serviços em geral: 32% vira 35,2% sobre a parcela excedente." },
      ]}
      relatedLinks={[
        { label: "Comparativo de regimes tributários", to: "/conteudos/regimes-tributarios", eyebrow: "Conteúdo" },
        { label: "Simples Nacional — obrigações de 2026", to: "/segmentos/simples-nacional", eyebrow: "Regime" },
        { label: "Planejamento tributário", to: "/solucoes/planejamento-tributario", eyebrow: "Solução" },
        { label: "Reforma tributária CBS/IBS", to: "/solucoes/reforma-tributaria", eyebrow: "Solução" },
      ]}
    />
  );
}
