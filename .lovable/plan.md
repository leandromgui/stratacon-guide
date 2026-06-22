## Objetivo

Importar `DCON_Arquitetura_Com_Respostas_Validadas_v2.md` como fonte única de verdade do conteúdo e refatorar as 19 páginas correspondentes para espelhar:

- Hero + H1 + frase de autoridade
- Bloco "Para quem é" (Cliente que atrai)
- Conteúdo integral por blocos (H2/H3)
- Serviço vendido por trás (entregáveis)
- CTAs sugeridos do doc
- FAQ a partir da PARTE II — Respostas Validadas (acordeão + `FAQPage` JSON-LD)

## Estrutura de execução

### Passo 1 — Importar o markdown como fonte
- Copiar o arquivo para `src/content/dcon-arquitetura.md` (importado via `?raw`).
- Criar `src/lib/dcon-content.ts` com:
  - `loadSection(slug)` → extrai uma das 19 páginas da PARTE I por número.
  - `loadFaq(slug)` → extrai a seção correspondente da PARTE II e converte cada par "Pergunta / Resposta" em `{ q, a }`.
  - Tipo `DconSection { h1, dor, audience[], blocks[], deliverables[], authority, sales, ctas[] }`.
- Parser simples por regex sobre os marcadores `## H1 sugerido`, `## Dor principal`, `## Cliente que atrai`, `## Serviço vendido por trás`, `## Frase de autoridade`, `## Frase comercial`, `## Conteúdo integral por blocos`, `## CTAs sugeridos`.

### Passo 2 — Componente de página unificado
- Estender `PageScaffold` (ou criar `DconPage` que o consome) para receber `section: DconSection` + `faq: FaqItem[]` e renderizar:
  - Hero (H1 + frase de autoridade como subtítulo).
  - "Para quem é" (chips).
  - Corpo Markdown sanitizado (usar `react-markdown` + `remark-gfm` — já viável).
  - "O que você recebe" (entregáveis numerados).
  - FAQ acordeão + JSON-LD `FAQPage`.
  - Bloco de CTAs (botões com as frases-CTA do doc).
  - `RelatedPages` (mapa de interlinking existente).
- Manter `metaTitle` / `metaDescription` por rota (não vêm do doc).

### Passo 3 — Mapeamento doc → rota (19 páginas)

| # doc | Rota |
|---|---|
| 1 HOME | `/` (apenas Hero + blocos resumidos; FAQ opcional) |
| 2 Diagnóstico | `/diagnostico` |
| 3 Planejamento Tributário | `/solucoes/planejamento-tributario` |
| 4 Reforma Tributária | `/solucoes/reforma-tributaria` |
| 5 Recuperação de Créditos | `/solucoes/recuperacao-creditos-tributarios` |
| 6 Defesas Fiscais | `/solucoes/defesas-fiscais` |
| 7 Regularização Fiscal | `/solucoes/regularizacao-fiscal` |
| 8 Tecnologia Contábil | `/solucoes/tecnologia-contabil` |
| 9 PF / IRPF | `/solucoes/pessoa-fisica-irpf` |
| 10 Holding Patrimonial | `/solucoes/holding-patrimonial` |
| 11 Folha/eSocial/SST | `/solucoes/departamento-pessoal` |
| 12 Construção Civil | `/segmentos/construcao-civil-spe` |
| 13 Produtor Rural | `/segmentos/produtor-rural` |
| 14 Provedores de Internet | `/segmentos/provedores-internet` |
| 15 Saúde | `/segmentos/medicos-clinicas` |
| 16 Valuation / KPIs | `/solucoes/valuation-kpis` |
| 17 Registro de Marca INPI | `/solucoes/registro-marca-inpi` |
| 18 Trocar de Contador | `/solucoes/trocar-contabilidade` |
| 19 Contador Consultivo | `/metodo` |

Observação: o doc tem "PARTE II 18 — Crédito Empresarial" sem PARTE I correspondente; será aproveitado como FAQ adicional em `/solucoes/regularizacao-fiscal` (tema "Certidões, Licitações e Crédito" é convergente).

### Passo 4 — Refatorar as 19 rotas
Cada rota vira:

```tsx
const section = loadSection(11);   // ex.: Folha/eSocial
const faq     = loadFaq(11);
export const Route = createFileRoute("/solucoes/departamento-pessoal")({
  head: () => buildHead({ title, description, faq, canonical }),
  component: () => <DconPage section={section} faq={faq} related={[...]} />,
});
```

CTAs: usam exatamente as frases do doc. Botão primário aponta para `/diagnostico`; secundário para `/contato` com `?intent=<slug-cta>` para futura segmentação.

### Passo 5 — Validações antes do publish
- `bun add react-markdown remark-gfm` (única dependência nova).
- `bun run scripts/validate-breadcrumbs.mjs` e `bun run scripts/validate-faq-links.mjs`.
- Build local + rota a rota: checar que H1, FAQ e CTAs renderizam em pelo menos 4 amostras (planejamento, reforma, holding, saúde).
- Rodar `seo_chat--list_findings` ao final.

## Detalhes técnicos

- **Markdown loader:** `import md from "@/content/dcon-arquitetura.md?raw"`. Parsing roda no build (módulo top-level), zero custo no runtime.
- **Segurança:** `react-markdown` sem `rehype-raw` (HTML do doc é desprezado) — só renderiza Markdown puro, sem risco XSS.
- **Tipos:** `loadSection` lança erro em build se uma seção sumir do doc, evitando regressão silenciosa.
- **HOME:** não troca o layout institucional atual; só substitui o copy do hero, "Dor principal" e os 4 blocos de serviço pela narrativa do doc. FAQ na home fica fora (decisão editorial).
- **`/metodo`:** integra a seção 19 do doc, preservando o componente `MethodBadge` das 4 fases.

## Entrega

PR único (esta tarefa). Sem publicar ao final — apenas reportar contagem de páginas refatoradas + warnings da auditoria SEO para sua revisão.

## Confirmações antes de começar

1. OK usar **2 CTAs por página** (como no doc) ou quer que eu adicione um 3º CTA padrão "Falar no WhatsApp" em todas?
2. OK pular FAQ na HOME (só hero + blocos do doc)?
3. OK seguir agora em PR único (estimo várias edições em sequência)?
