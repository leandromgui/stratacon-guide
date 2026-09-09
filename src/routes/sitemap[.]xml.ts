import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://www.dcon.cnt.br";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/diagnostico", changefreq: "monthly", priority: "0.9" },
  { path: "/metodo", changefreq: "monthly", priority: "0.9" },
  { path: "/temas-estrategicos", changefreq: "monthly", priority: "0.8" },
  { path: "/contato", changefreq: "monthly", priority: "0.7" },
  { path: "/goiania", changefreq: "monthly", priority: "0.7" },
  { path: "/contador-em-goiania", changefreq: "monthly", priority: "0.9" },
  { path: "/escritorio-de-contabilidade-em-goiania", changefreq: "monthly", priority: "0.9" },
  { path: "/sobre", changefreq: "monthly", priority: "0.7" },
  { path: "/sobre/leandro", changefreq: "monthly", priority: "0.6" },
  { path: "/privacidade", changefreq: "yearly", priority: "0.3" },
  // Soluções
  { path: "/solucoes", changefreq: "weekly", priority: "0.9" },
  { path: "/solucoes/contabilidade-empresarial", changefreq: "monthly", priority: "0.8" },
  { path: "/solucoes/departamento-fiscal", changefreq: "monthly", priority: "0.8" },
  { path: "/solucoes/departamento-pessoal", changefreq: "monthly", priority: "0.8" },
  { path: "/solucoes/planejamento-tributario", changefreq: "monthly", priority: "0.9" },
  { path: "/solucoes/reforma-tributaria", changefreq: "weekly", priority: "0.9" },
  { path: "/solucoes/recuperacao-creditos-tributarios", changefreq: "monthly", priority: "0.9" },
  { path: "/solucoes/defesas-fiscais", changefreq: "monthly", priority: "0.8" },
  { path: "/solucoes/regularizacao-fiscal", changefreq: "monthly", priority: "0.8" },
  { path: "/solucoes/holding-patrimonial", changefreq: "monthly", priority: "0.8" },
  { path: "/solucoes/bpo-financeiro", changefreq: "monthly", priority: "0.7" },
  { path: "/solucoes/societario-legalizacao", changefreq: "monthly", priority: "0.7" },
  { path: "/solucoes/tecnologia-contabil", changefreq: "monthly", priority: "0.8" },
  { path: "/solucoes/pessoa-fisica-irpf", changefreq: "monthly", priority: "0.8" },
  { path: "/solucoes/valuation-kpis", changefreq: "monthly", priority: "0.8" },
  { path: "/solucoes/registro-marca-inpi", changefreq: "monthly", priority: "0.7" },
  { path: "/solucoes/abrir-empresa", changefreq: "monthly", priority: "0.7" },
  { path: "/solucoes/trocar-contabilidade", changefreq: "monthly", priority: "0.7" },
  // Segmentos
  { path: "/segmentos", changefreq: "weekly", priority: "0.8" },
  { path: "/segmentos/medicos-clinicas", changefreq: "monthly", priority: "0.8" },
  { path: "/segmentos/odontologia", changefreq: "monthly", priority: "0.7" },
  { path: "/segmentos/e-commerce", changefreq: "monthly", priority: "0.8" },
  { path: "/segmentos/comercio", changefreq: "monthly", priority: "0.7" },
  { path: "/segmentos/prestadores-servicos", changefreq: "monthly", priority: "0.7" },
  { path: "/segmentos/construcao-civil-spe", changefreq: "monthly", priority: "0.8" },
  { path: "/segmentos/tecnologia-startups", changefreq: "monthly", priority: "0.8" },
  { path: "/segmentos/provedores-internet", changefreq: "monthly", priority: "0.8" },
  { path: "/segmentos/holdings", changefreq: "monthly", priority: "0.8" },
  { path: "/segmentos/imobiliarias", changefreq: "monthly", priority: "0.7" },
  { path: "/segmentos/empresas-familiares", changefreq: "monthly", priority: "0.7" },
  { path: "/segmentos/franquias-redes", changefreq: "monthly", priority: "0.7" },
  { path: "/segmentos/condominios", changefreq: "monthly", priority: "0.6" },
  { path: "/segmentos/terceiro-setor", changefreq: "monthly", priority: "0.6" },
  { path: "/segmentos/produtor-rural", changefreq: "monthly", priority: "0.7" },
  { path: "/segmentos/simples-nacional", changefreq: "monthly", priority: "0.9" },
  { path: "/segmentos/lucro-presumido", changefreq: "monthly", priority: "0.9" },
  // Conteúdos
  { path: "/conteudos", changefreq: "weekly", priority: "0.8" },
  // Categorias (rotas dedicadas)
  { path: "/conteudos/tributario", changefreq: "weekly", priority: "0.8" },
  { path: "/conteudos/defesa-fiscal", changefreq: "weekly", priority: "0.8" },
  { path: "/conteudos/patrimonio", changefreq: "weekly", priority: "0.8" },
  { path: "/conteudos/trabalhista", changefreq: "weekly", priority: "0.8" },
  { path: "/conteudos/setores", changefreq: "weekly", priority: "0.8" },
  { path: "/conteudos/governanca", changefreq: "weekly", priority: "0.8" },
  { path: "/conteudos/regimes-tributarios", changefreq: "monthly", priority: "0.7" },
  { path: "/conteudos/holding-familiar", changefreq: "monthly", priority: "0.7" },
  { path: "/conteudos/respostas-validadas", changefreq: "monthly", priority: "0.8" },
  { path: "/conteudos/guia-simples-nacional", changefreq: "monthly", priority: "0.8" },
  { path: "/conteudos/saude-clinicas", changefreq: "monthly", priority: "0.7" },
  { path: "/conteudos/regularizacao-fiscal", changefreq: "monthly", priority: "0.7" },
  { path: "/conteudos/lc-236-2026-processo-administrativo-fiscal", changefreq: "monthly", priority: "0.8" },
  { path: "/reforma-tributaria-2026", changefreq: "monthly", priority: "0.8" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});