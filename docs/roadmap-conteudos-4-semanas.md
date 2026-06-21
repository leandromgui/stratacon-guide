# Roadmap Editorial — /conteudos/* · 4 semanas

> Período: 22/jun/2026 → 19/jul/2026 (1 pilar por semana).
> Critérios de priorização: **volume de busca (BR)** × **viabilidade (KDI)** × **alinhamento com solução comercial DCON**.
> Fonte de volume/KDI: Semrush, base `br`, consultada em 21/jun/2026.

---

## 1. Como as lacunas foram priorizadas

| Pilar candidato | Volume principal | KDI | Encaixe comercial | Prioridade |
|---|---|---|---|---|
| **Holding familiar** | 22.200/mo ("holding familiar") + cluster 30k+ | **28 — fácil** | `/solucoes/holding-patrimonial` | **P0** |
| **Fator R (Simples Nacional)** | 4.400/mo ("fator r") + 2.400 ("fator r simples nacional") | **23 — fácil** | `/segmentos/medicos-clinicas`, `/odontologia`, `/prestadores-servicos` | **P0** |
| **Reforma Tributária IBS/CBS** | 60.500/mo ("reforma tributária") + 9.900 ("reforma tributária 2026") + 12.100 ("lc 214") | 64 — difícil no termo curto, baixo nas long-tails | `/solucoes/reforma-tributaria` | **P1** (topical authority) |
| **Recuperação de créditos tributários** | 260/mo + 880 ("recuperação tributária") + 480 ("recuperação de crédito tributário") | **42 — possível** | `/solucoes/recuperacao-creditos-tributarios` | **P1** (alto CPC, intenção comercial) |
| Simples × Presumido × Real | 590 + cluster 8.100 ("lucro real") | 15 — fácil | `/conteudos/regimes-tributarios` (já existe) | **Reforço**, não criar |
| eSocial passivos trabalhistas | "esocial" 1M mas genérico; long-tails fracas | 55 difícil | `/solucoes/departamento-pessoal` | **P3** — adiar |
| Como abrir empresa | 320/mo + cluster MEI 600k+ (off-target) | 45 | `/solucoes/abrir-empresa` | **P3** — usar como landing, não conteúdo |
| Trocar de contabilidade | 70/mo | 0 | `/solucoes/trocar-contabilidade` | **P3** — reforçar a própria solução |
| ICMS-ST comércio | 320/mo agregado | 22 | `/segmentos/comercio` | **P2** — bloco FAQ na canônica, não pilar |

### Critério aplicado
- **P0** = vai pro roadmap das duas primeiras semanas (maior ROI: volume alto, KDI ≤ 30, conversão clara para serviço pago).
- **P1** = semanas 3–4 (alta intenção comercial ou autoridade de tema).
- **P2/P3** = backlog ou absorvido em página existente.

---

## 2. Roadmap das 4 semanas

### Semana 1 (22/jun – 28/jun) — Holding Familiar

**Slug:** `/conteudos/holding-familiar`
**Título (H1):** Holding Familiar: o que é, quanto custa e quando vale a pena abrir
**Meta-title (≤60c):** Holding Familiar: o que é, custos e quando vale | DCON
**Meta-description (≤160c):** Holding familiar protege patrimônio e organiza sucessão — mas só vale em certos cenários. Veja tipos, custos reais e quando faz sentido.
**Intenção de busca:** **Informacional + investigação comercial** (público em pré-decisão de estruturação patrimonial).
**Keyword principal:** `holding familiar` (22.200/mo · KDI 28).
**Cluster de apoio (capturar no mesmo artigo, com subtítulos próprios):**
- o que é holding familiar (3.600/mo) — abrir o artigo respondendo isso
- quanto custa abrir uma holding familiar (1.300/mo) — bloco de custos
- como abrir uma holding familiar (480/mo) — passo a passo
- como funciona uma holding familiar (390/mo) — bloco "como opera"
- holding patrimonial (6.600/mo) — diferenciar das familiares
**Estrutura sugerida:** definição → tipos (patrimonial × familiar × pura × mista) → benefícios reais × riscos → custos (abertura + manutenção) → passo a passo → quando NÃO faz sentido → FAQ (5 perguntas).
**Schema:** `Article` + `FAQPage` + `BreadcrumbList`.
**Interlinking obrigatório:**
- → `/solucoes/holding-patrimonial` (CTA principal)
- → `/segmentos/holdings`, `/segmentos/empresas-familiares`
- → `/diagnostico` (CTA secundário)
**CTA acima da dobra:** "Avalie se uma holding faz sentido para sua família — diagnóstico gratuito".

---

### Semana 2 (29/jun – 05/jul) — Fator R do Simples Nacional

**Slug:** `/conteudos/fator-r-simples-nacional`
**Título (H1):** Fator R do Simples Nacional: como calcular e quando o pró-labore vale a pena
**Meta-title:** Fator R Simples Nacional: cálculo, anexo III × V | DCON
**Meta-description:** Fator R define se sua empresa cai no Anexo III (mais barato) ou no V do Simples. Veja o cálculo, exemplos por setor e quando aumentar o pró-labore.
**Intenção de busca:** **Informacional com forte intenção transacional** (empresário comparando carga tributária; alto índice de conversão para diagnóstico).
**Keyword principal:** `fator r simples nacional` (2.400/mo · KDI 23).
**Cluster de apoio:**
- fator r (4.400/mo)
- o que é fator r (590/mo)
- como calcular fator r (590/mo)
- calculadora fator r (480/mo) — incluir mini-simulador (input folha/receita) ou tabela
- o que é fator r no simples nacional (210/mo)
**Estrutura sugerida:** o que é → fórmula com exemplo numérico → tabela "qual anexo cai com cada %" → setores onde mais impacta (médicos, odontologia, prestadores, TI) → quando aumentar pró-labore vale a pena → FAQ.
**Schema:** `Article` + `FAQPage` + `HowTo` (para o cálculo) + `BreadcrumbList`.
**Interlinking obrigatório:**
- → `/solucoes/planejamento-tributario` (CTA principal)
- → `/segmentos/medicos-clinicas`, `/segmentos/odontologia`, `/segmentos/prestadores-servicos`, `/segmentos/tecnologia-startups`
- → `/conteudos/regimes-tributarios`
**CTA:** "Simule seu Fator R com a DCON — diagnóstico gratuito".

---

### Semana 3 (06/jul – 12/jul) — Reforma Tributária IBS/CBS

**Slug:** `/conteudos/reforma-tributaria-ibs-cbs`
**Título (H1):** Reforma Tributária 2026: IBS, CBS e LC 214 explicados sem juridiquês
**Meta-title:** Reforma Tributária 2026: IBS, CBS e LC 214 | DCON
**Meta-description:** IBS, CBS, split payment e cronograma 2026–2033 da LC 214 explicados por contador. Veja o que muda para o Simples, Presumido e Lucro Real.
**Intenção de busca:** **Informacional + topical authority** (público em aprendizado; baixa intenção transacional imediata, mas constrói autoridade que se converte ao longo do funil).
**Keyword principal long-tail:** `reforma tributária ibs cbs` (50/mo · KDI 0) + topical "reforma tributária 2026" (9.900/mo · KDI moderada).
**Cluster de apoio:**
- o que é ibs e cbs na reforma tributária (140/mo)
- lc 214 / lei complementar 214 (12.100 + 8.100/mo)
- reforma tributária 2026 (9.900/mo)
- quando entra em vigor a reforma tributária (390/mo)
- o que muda com a reforma tributária (590/mo)
**Estrutura sugerida:** linha do tempo 2026–2033 → o que é IBS × CBS × IS → split payment → impacto por regime (Simples mantém? híbrido?) → impacto por setor (serviços × comércio × indústria) → o que fazer hoje → FAQ.
**Schema:** `Article` + `FAQPage` + `BreadcrumbList` + considerar `NewsArticle` (tema em movimento).
**Interlinking obrigatório:**
- → `/solucoes/reforma-tributaria` (CTA principal)
- → `/solucoes/planejamento-tributario`
- → `/conteudos/regimes-tributarios`
- → `/segmentos/comercio`, `/segmentos/prestadores-servicos` (impacto setorial)
**CTA:** "Avalie o impacto da reforma na sua empresa — diagnóstico DCON".
**Nota:** datar o artigo e marcar revisão trimestral; tema sofre atualização normativa constante.

---

### Semana 4 (13/jul – 19/jul) — Recuperação de Créditos Tributários

**Slug:** `/conteudos/recuperacao-creditos-tributarios`
**Título (H1):** Como recuperar créditos tributários: PIS, Cofins, ICMS e INSS na prática
**Meta-title:** Recuperação de Créditos Tributários: PIS, Cofins e ICMS | DCON
**Meta-description:** Sua empresa pode ter pago imposto a mais nos últimos 5 anos. Veja quais créditos recuperar (PIS, Cofins, ICMS, INSS), prazos e o caminho administrativo.
**Intenção de busca:** **Comercial-investigativa** (alto CPC, intenção de contratar especialista).
**Keyword principal:** `recuperação de créditos tributários` (260/mo · KDI 42) + variantes (recuperação tributária 880, recuperação de crédito tributário 480).
**Cluster de apoio:**
- recuperação tributária (880/mo)
- recuperação de impostos (170/mo)
- créditos tributários (320/mo)
- como funciona a recuperação de crédito tributário (20/mo · long-tail de alta intenção)
- recuperação tributária administrativa (210/mo)
**Estrutura sugerida:** o que são créditos recuperáveis → principais teses vigentes (exclusão ICMS da base PIS/Cofins, monofásicos, insumos, INSS sobre verbas indenizatórias) → prazo prescricional de 5 anos → via administrativa × judicial → o que sua empresa precisa entregar → cases reais (anonimizados) → FAQ.
**Schema:** `Article` + `FAQPage` + `Service` (cruzamento com a oferta) + `BreadcrumbList`.
**Interlinking obrigatório:**
- → `/solucoes/recuperacao-creditos-tributarios` (CTA principal — esta é a página com maior taxa de fechamento)
- → `/solucoes/defesas-fiscais`
- → `/segmentos/comercio`, `/segmentos/provedores-internet` (setores com maiores teses ativas)
- → `/solucoes/planejamento-tributario`
**CTA:** "Sua empresa pode ter créditos a recuperar — análise gratuita em 7 dias".

---

## 3. Checklist de produção (mesmo para todos os 4)

- [ ] Slug definido no `seo-audit-urls.ts` como `kind: "canonical"`.
- [ ] `head()` com `title`, `description`, `og:title`, `og:description`, `og:url`, `canonical` (self).
- [ ] `og:image` própria do tema (não usar a do root).
- [ ] H1 único; H2/H3 contendo as variações da cluster.
- [ ] Bloco "Veja também" com os 3–5 interlinks listados.
- [ ] FAQ de 5–7 perguntas com JSON-LD `FAQPage`.
- [ ] CTA primário acima da dobra → `/diagnostico` ou `/contato`.
- [ ] Assinatura de autoria com link → `/sobre/leandro` (E-E-A-T).
- [ ] Inserir no `sitemap[.]xml.ts`.
- [ ] Após publicar: rodar `/admin/auditoria-seo` para checar indexação na próxima semana.

---

## 4. Backlog (próximos sprints)

Em ordem sugerida após as 4 semanas:

1. `/conteudos/holding-familiar-vs-patrimonial` — subnicho com volume já mapeado (sub-cluster do P0 da semana 1).
2. `/conteudos/migracao-de-contabilidade` — apoio direto à `/solucoes/trocar-contabilidade`.
3. `/conteudos/abertura-de-empresa-passo-a-passo` — apoio à `/solucoes/abrir-empresa` (foco em PJ real, não MEI).
4. `/conteudos/icms-st-goias` — local + setorial; apoia `/segmentos/comercio` e `/goiania`.
5. `/conteudos/esocial-passivos-trabalhistas` — só após mais volume orgânico no domínio (KDI alto).

---

_Dados Semrush são estimativa; recalibrar mensalmente. Para tracking contínuo de posições, considerar conectar a conta Semrush e montar um painel próprio no `/admin`._