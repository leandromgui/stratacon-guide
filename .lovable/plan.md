## Objetivo

Integrar as 2.188 linhas de conteúdo validado (`DCON_Arquitetura_Com_Respostas_Validadas_v2.md`, 19 páginas) na nova interface institucional (mega-menu, `PageScaffold` com método/tecnologia/riscos/documentos/entregáveis/FAQ), aplicando otimização Google + AI search.

## Princípios de organização

1. **Uma página markdown = uma rota canônica** (mapeamento abaixo). Conteúdos longos viram seções densas em `PageScaffold`, não landing pages.
2. **Padrão editorial fixo por página de solução/setor**:
   - Hero curto (H1 ≤ 65 char) + parágrafo-resumo de 2–3 frases (extraído pela IA).
   - "Para quem é" (chips de público).
   - Escopo / Serviço (sections H2/H3).
   - Método DCON aplicado (4 passos).
   - Entregáveis (numerados, com prova técnica).
   - Riscos endereçados.
   - Tecnologia e documentos analisados.
   - FAQ (acordeão + `FAQPage` JSON-LD).
   - CTA contextual + `LeadCaptureForm`.
   - Links cruzados (3–5 páginas relacionadas) no corpo.
3. **H1 curto + subtítulo longo**: o H1 original do doc vira `<p class="lead">`; o H1 visível e o `<title>` ficam ≤ 65 caracteres.
4. **Schema duplo em toda página**: `BreadcrumbList` + (`Service` | `Article` | `FAQPage`) conforme tipo.
5. **Tom institucional**: "consultoria contábil, fiscal, tributária e empresarial" — nunca "contabilidade online".

## Mapeamento documento → rota → ação

| # | Página doc | Rota | Status | Ação |
|---|---|---|---|---|
| 1 | HOME | `/` | reescrita parcial | Reescrever blocos com narrativa do doc; manter layout institucional |
| 2 | Diagnóstico | `/diagnostico` | existente | Enriquecer com 4 blocos do doc + entregáveis + FAQ |
| 3 | Planejamento Tributário | `/solucoes/planejamento-tributario` | já com scaffold | Substituir copy pelo conteúdo validado |
| 4 | Reforma Tributária | `/solucoes/reforma-tributaria` | stub | Conteúdo integral + cronograma CBS/IBS |
| 5 | Recuperação de Créditos | `/solucoes/recuperacao-creditos-tributarios` | já com scaffold | Substituir copy |
| 6 | Defesas Fiscais | `/solucoes/defesas-fiscais` | stub | Conteúdo integral + tipos de defesa |
| 7 | Regularização Fiscal | `/solucoes/regularizacao-fiscal` | já com scaffold | Adicionar certidões/licitações/crédito |
| 8 | Tecnologia Contábil | `/solucoes/tecnologia-contabil` | stub | Conteúdo integral + stack |
| 9 | PF / IRPF | `/solucoes/pessoa-fisica-irpf` | stub | Conteúdo integral |
| 10 | Holding Patrimonial | `/solucoes/holding-patrimonial` | já com scaffold | Substituir copy |
| 11 | Folha / eSocial / SST | `/solucoes/departamento-pessoal` | já com scaffold | Adicionar CCT, SST, compliance |
| 12 | Construção Civil | `/segmentos/construcao-civil-spe` | existente | Reescrever |
| 13 | Produtor Rural | `/segmentos/produtor-rural` | existente | Reescrever |
| 14 | Provedores de Internet | `/segmentos/provedores-internet` | stub | Conteúdo integral |
| 15 | Saúde | `/segmentos/medicos-clinicas` | existente | Reescrever |
| 16 | Valuation / KPIs | `/solucoes/valuation-kpis` | stub | Conteúdo integral |
| 17 | Registro de Marca INPI | `/solucoes/registro-marca-inpi` | stub | Conteúdo integral |
| 18 | Trocar de Contador | `/solucoes/trocar-contabilidade` | existente | Reescrever |
| 19 | Contador Consultivo | `/sobre/metodologia` | existente | Reescrever com método DCON |

## Sugestões de organização que recomendo aplicar

1. **Reagrupar mega-menu "Soluções" em 4 colunas temáticas** (em vez da lista plana atual):
   - *Compliance & Operação*: Contabilidade, Departamento Pessoal, Departamento Fiscal, BPO Financeiro.
   - *Estratégia Tributária*: Planejamento, Reforma Tributária, Recuperação de Créditos, Defesas Fiscais, Regularização.
   - *Patrimônio & Pessoa Física*: Holding, Sucessão, PF/IRPF, Valuation/KPIs.
   - *Tecnologia & Institucional*: Tecnologia Contábil, Abrir Empresa, Trocar de Contabilidade, Registro de Marca.
2. **"Temas Estratégicos" como hub editorial** (não duplicado das soluções): Reforma Tributária, Sucessão Patrimonial, Recuperação de Créditos, Compliance Trabalhista, Setores Regulados. Cada tema agrega 1 página-pilar + N insights de `/conteudos`.
3. **Padronizar "Segmentos" em 3 grupos visuais**: Serviços profissionais (saúde, odontologia, jurídico), Operações intensivas (construção, agro, indústria, provedores), Comércio & digital (e-commerce, comércio, franquias).
4. **Criar `/metodo` em destaque** (não enterrado em "Sobre"): página-pilar do Método DCON em 4 fases (Diagnóstico → Planejamento → Execução → Governança), linkada de toda página de solução.
5. **`/insights` (renomear `/conteudos`)** com filtros por tema + tipo + setor; cada insight linka 2 soluções e 1 segmento relevantes.
6. **Footer institucional em 5 colunas**: Soluções, Setores, Temas, Insights & Método, Contato/Endereço/CNPJ.
7. **CTAs contextuais por intenção**, não genéricos:
   - Páginas de risco (defesas, regularização) → "Solicitar análise de exposição".
   - Páginas de oportunidade (recuperação, planejamento) → "Solicitar diagnóstico de créditos".
   - Páginas institucionais → "Falar com consultor DCON".

## Execução proposta — 4 PRs sequenciais

**PR 1 — Infraestrutura editorial** (sem mudança visível grande)
- Estender `PageScaffold` com `lead`, `audience[]`, `relatedLinks[]`, `ctaVariant`.
- Criar helper `loadDocSection(slug)` que lê o markdown por seção (build-time).
- Criar componente `<MethodBadge />` e `<RelatedPages />`.
- Reorganizar mega-menu nas 4 colunas temáticas + criar `/metodo`.

**PR 2 — Soluções estratégicas (5 páginas, maior impacto SEO)**
- Reforma Tributária, Defesas Fiscais, Recuperação de Créditos, Planejamento Tributário, Regularização Fiscal.
- Conteúdo integral do doc + Service/FAQ schema + links cruzados.

**PR 3 — Soluções restantes + PF (7 páginas)**
- Holding, Departamento Pessoal, Tecnologia Contábil, PF/IRPF, Valuation/KPIs, Registro INPI, Trocar de Contador.

**PR 4 — Segmentos + Home + Método + Insights (6 páginas + hub)**
- Construção Civil, Produtor Rural, Provedores, Saúde.
- Reescrita da Home com narrativa institucional do doc.
- `/metodo` e renomeação `/conteudos` → `/insights` com redirecionamento.
- Sitemap + rescan SEO.

## Detalhes técnicos

- O markdown fica em `src/content/dcon-arquitetura.md` (importado como string via Vite `?raw`) e parseado por seção pelo helper. Isso evita hardcode duplicado nas rotas e permite atualizações pontuais.
- Cada rota declara apenas: `slug do doc`, `H1 curto`, `metaDescription`, `relatedLinks`, `serviceType`, `risks`, `deliverables`, `faq`. O scaffold monta o resto a partir do markdown.
- Tokens visuais: manter paleta azul-marinho / grafite / off-white / dourado discreto já no `styles.css`. Sem ajustes.
- SEO: rodar `seo_chat--list_findings` ao final de cada PR; corrigir antes do próximo.

## Confirmações necessárias

1. Aprovar o reagrupamento do mega-menu em 4 colunas temáticas e a criação de `/metodo` em destaque?
2. OK renomear `/conteudos` → `/insights` (com redirect 301) ou prefere manter `/conteudos`?
3. Posso começar pelo **PR 1 (infraestrutura)** já neste turno e seguir para PR 2 em sequência?
