## Validação da arquitetura proposta

A estrutura de 19 páginas é sólida, comercialmente coerente e cobre toda a operação da DCON. A maior parte do conteúdo já tem rota no site — o trabalho é **enriquecer o conteúdo existente** com o material validado e **criar 7 novas páginas** que ainda não existem.

### Ajustes recomendados (SEO Google + AI search)

1. **H1s longos demais** (ex.: "Contabilidade estratégica, tributária e consultiva para empresas que precisam decidir com segurança"). Reduzir para 55–65 caracteres, mantendo a versão completa como subtítulo/intro. Google trunca títulos longos e LLMs priorizam H1s claros.
2. **Adicionar FAQ Schema (JSON-LD `FAQPage`)** em cada página com perguntas frequentes. É o principal vetor de citação por IA (ChatGPT, Perplexity, Gemini, AI Overviews).
3. **Adicionar `Service` Schema** (não só BreadcrumbList) nas páginas de solução, com `provider`, `areaServed: "BR"`, `serviceType`. Isso ajuda no Knowledge Graph.
4. **Criar `Article` Schema** nas páginas de /conteudos com `author`, `datePublished`, `about`.
5. **Meta descriptions** das páginas atuais estão genéricas — reescrever puxando a "Frase comercial" do documento (mais persuasiva, com gatilho de ação).
6. **Densidade semântica para LLMs**: cada página deve abrir com um parágrafo-resumo de 2–3 frases respondendo "o que é + para quem + diferencial DCON" — esse é o trecho que IAs extraem.
7. **Linkagem interna cruzada**: cada página deve linkar 3–5 páginas relacionadas no corpo (não só no menu/footer). Hoje as páginas são silos.

### Mapa: documento → rotas

| # | Página doc | Rota | Ação |
|---|---|---|---|
| 1 | HOME | `/` | Reescrever com posicionamento "estratégica, consultiva, tecnológica" |
| 2 | Diagnóstico | `/diagnostico` | Enriquecer com conteúdo do doc |
| 3 | Planejamento Tributário | `/solucoes/planejamento-tributario` | Reescrever |
| 4 | **Reforma Tributária** | `/solucoes/reforma-tributaria` | **NOVA** |
| 5 | Recuperação de Créditos | `/solucoes/recuperacao-creditos-tributarios` | Reescrever |
| 6 | **Defesas Fiscais** | `/solucoes/defesas-fiscais` | **NOVA** |
| 7 | Regularização Fiscal | `/solucoes/regularizacao-fiscal` | Reescrever (incluir certidões/licitações/crédito) |
| 8 | **Tecnologia Contábil** | `/solucoes/tecnologia-contabil` | **NOVA** |
| 9 | **PF / IRPF / Liberais** | `/solucoes/pessoa-fisica-irpf` | **NOVA** |
| 10 | Holding Patrimonial | `/solucoes/holding-patrimonial` | Reescrever |
| 11 | Folha / eSocial / SST | `/solucoes/departamento-pessoal` | Reescrever (incluir CCT, SST, compliance) |
| 12 | Construção Civil | `/segmentos/construcao-civil-spe` | Reescrever |
| 13 | Produtor Rural | `/segmentos/produtor-rural` | Reescrever |
| 14 | **Provedores de Internet** | `/segmentos/provedores-internet` | **NOVA** |
| 15 | Saúde | `/segmentos/medicos-clinicas` | Reescrever |
| 16 | **Valuation / KPIs / Precificação** | `/solucoes/valuation-kpis` | **NOVA** |
| 17 | **Registro de Marca INPI** | `/solucoes/registro-marca-inpi` | **NOVA** |
| 18 | Trocar de Contador | `/solucoes/trocar-contabilidade` | Reescrever |
| 19 | Contador Consultivo | `/sobre/metodologia` | Reescrever (encaixa na metodologia) |

**7 rotas novas** + **12 rotas reescritas** + atualização de menu/footer/sitemap.

### Como executar (proposta de fases)

Dado o volume (2188 linhas de conteúdo → 19 páginas), sugiro **3 PRs/fases** para não fazer tudo num único commit gigante:

- **Fase 1** — Criar as 7 páginas novas (estrutura `PageScaffold` + Service/FAQ schema) e atualizar menu/footer/sitemap.
- **Fase 2** — Reescrever HOME + Diagnóstico + 5 soluções principais (Planejamento, Reforma, Recuperação, Defesas, Regularização) com o conteúdo validado e FAQ schema.
- **Fase 3** — Reescrever segmentos + páginas restantes + auditoria SEO final (rescan).

### Detalhes técnicos

- Padronizar `PageScaffold` com novos opcionais: `faq?: {q,a}[]` (renderiza acordeão + injeta FAQPage JSON-LD) e `serviceSchema?: boolean`.
- Manter o `LeadCaptureForm` no rodapé das páginas de solução/segmento (já implementado).
- Sitemap: já é gerado dinamicamente? Verificar e adicionar as 7 rotas novas.
- Validar breadcrumbs (já há workflow `validate-breadcrumbs`).

### Confirmações antes de começar

1. **OK quebrar em 3 fases?** Ou prefere tudo em um único bloco grande?
2. **Posso simplificar os H1s** (versão curta como `<h1>`, versão completa como intro)?
3. Os números de WhatsApp/email no doc são placeholders ou os reais a usar?
