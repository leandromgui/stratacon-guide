# Estrutura do Site DCON — Arquitetura de Informação

> Documento-base para os próximos ajustes (SEO, UX, copy, navegação, interlinking).
> Reflete o estado das rotas em `src/routes/` após as consolidações canônicas.
> Última revisão: 2026-06-21.

---

## 1. Visão geral

- **Stack:** TanStack Start (rotas em `src/routes/`, SSR, `head()` por rota).
- **Domínio editorial:** consultoria contábil, fiscal, tributária e patrimonial — base Goiânia, atendimento nacional.
- **Três eixos públicos** que sustentam a navegação:
  1. **Soluções** — o que a DCON entrega (serviço/produto).
  2. **Segmentos** — para quem entrega (setor / tipo de empresa).
  3. **Conteúdos** — autoridade técnica (insights, guias, comparativos).
- **Eixos institucionais:** Sobre, Método, Diagnóstico, Goiânia (local SEO), Contato, Privacidade.
- **Área restrita:** `/auth` + `/admin/*` (leads e auditoria SEO).

### Princípios de IA aplicados
- Cada **assunto** tem **uma única página canônica**; variações são 301 para evitar canibalização.
- **Solução** descreve oferta/preço/cta; **Segmento** descreve dor do setor; **Conteúdo** ensina o tema. Conteúdos nunca competem por palavra-chave comercial — apontam para a Solução correspondente.
- Páginas de **cidade** (`/goiania`) capturam a busca local sem duplicar o site institucional.
- Profundidade máxima: **2 níveis** (`/solucoes/<slug>`), exceto `/sobre/leandro`.

---

## 2. Árvore de rotas

```text
/
├── /diagnostico                       (lead — diagnóstico gratuito)
├── /metodo                            (Método DCON em 4 fases)
├── /temas-estrategicos                (hub editorial superior)
├── /contato                           (formulário + canais)
├── /goiania                           (landing SEO local)
├── /privacidade                       (LGPD)
│
├── /sobre
│   └── /sobre/leandro                 (perfil do fundador)
│
├── /solucoes                          (índice — 17 serviços)
│   ├── planejamento-tributario
│   ├── regularizacao-fiscal
│   ├── holding-patrimonial
│   ├── departamento-pessoal
│   ├── departamento-fiscal
│   ├── contabilidade-empresarial
│   ├── reforma-tributaria
│   ├── recuperacao-creditos-tributarios
│   ├── defesas-fiscais
│   ├── bpo-financeiro
│   ├── societario-legalizacao
│   ├── tecnologia-contabil
│   ├── pessoa-fisica-irpf
│   ├── valuation-kpis
│   ├── registro-marca-inpi
│   ├── abrir-empresa
│   └── trocar-contabilidade
│
├── /segmentos                         (índice — 14 setores)
│   ├── medicos-clinicas               ← canônica unificada (saúde)
│   ├── odontologia
│   ├── comercio                       ← canônica unificada (comércio/ICMS)
│   ├── e-commerce
│   ├── construcao-civil-spe
│   ├── imobiliarias
│   ├── holdings
│   ├── empresas-familiares
│   ├── franquias-redes
│   ├── prestadores-servicos
│   ├── produtor-rural
│   ├── provedores-internet
│   ├── tecnologia-startups
│   ├── condominios
│   └── terceiro-setor
│
├── /conteudos                         (hub de insights)
│   └── regimes-tributarios            ← canônica unificada (Simples/Presumido/Real)
│
├── /auth                              (login restrito equipe)
└── /_authenticated/admin              (gate; redireciona não-autenticado p/ /auth)
    ├── /admin/leads
    └── /admin/auditoria-seo
```

---

## 3. Páginas canônicas — propósito e CTA

### 3.1 Topo institucional

| Rota | Propósito | CTA primário |
|------|-----------|--------------|
| `/` | Posicionamento da marca + visão geral de soluções/segmentos | Diagnóstico |
| `/diagnostico` | Captura de lead qualificado (formulário longo) | Enviar dados |
| `/metodo` | Diferencial: as 4 fases auditáveis | Diagnóstico |
| `/contato` | Conversão por canal direto (WhatsApp/e-mail/telefone) | WhatsApp |
| `/goiania` | Local SEO ("contador em Goiânia") | Diagnóstico |
| `/sobre` | Autoridade institucional | Conhecer Leandro |
| `/sobre/leandro` | Autoridade pessoal do fundador (E-E-A-T) | Diagnóstico |
| `/temas-estrategicos` | Hub editorial sênior — agrega temas técnicos | Ler conteúdos |
| `/privacidade` | LGPD/compliance | — |

### 3.2 Soluções (`/solucoes/*`)

| Slug | Foco comercial |
|------|----------------|
| `planejamento-tributario` | Estratégia tributária recorrente |
| `regularizacao-fiscal` | Empresas com pendências/parcelamentos |
| `holding-patrimonial` | Sucessão e proteção patrimonial |
| `departamento-pessoal` | Folha + eSocial sem passivo |
| `departamento-fiscal` | Apuração ICMS/ISS/PIS/Cofins |
| `contabilidade-empresarial` | Núcleo: escrituração consultiva |
| `reforma-tributaria` | Transição IBS/CBS |
| `recuperacao-creditos-tributarios` | Contencioso administrativo + créditos |
| `defesas-fiscais` | Impugnação, PRDI, transação |
| `bpo-financeiro` | Terceirização da rotina financeira |
| `societario-legalizacao` | Alterações contratuais, certidões |
| `tecnologia-contabil` | Automação, BI fiscal |
| `pessoa-fisica-irpf` | IRPF alta renda, PF x PJ |
| `valuation-kpis` | Valuation e indicadores gerenciais |
| `registro-marca-inpi` | Proteção de marca |
| `abrir-empresa` | Abertura completa (CNAE, regime) |
| `trocar-contabilidade` | Onboarding de migração |

### 3.3 Segmentos (`/segmentos/*`)

| Slug | Setor / dor central |
|------|---------------------|
| `medicos-clinicas` | Fator R, equiparação hospitalar |
| `odontologia` | Regime ideal, fator R |
| `comercio` | ICMS, ST, SPED Fiscal |
| `e-commerce` | DIFAL, marketplaces, gateways |
| `construcao-civil-spe` | RET, patrimônio de afetação |
| `imobiliarias` | Comissões, locação |
| `holdings` | Governança, sucessão |
| `empresas-familiares` | Profissionalização |
| `franquias-redes` | Multi-CNPJ, royalties |
| `prestadores-servicos` | ISS, retenções |
| `produtor-rural` | Funrural, ITR, livro caixa |
| `provedores-internet` | SCM/SVA/NFCom/ICMS |
| `tecnologia-startups` | Lei do Bem, stock options |
| `condominios` | Folha + prestação de contas |
| `terceiro-setor` | Imunidades, OSCIPs |

### 3.4 Conteúdos (`/conteudos/*`)

| Slug | Tema |
|------|------|
| `regimes-tributarios` | Comparativo Simples × Presumido × Lucro Real (canônica unificada) |
| _(novos pilares planejados — ver §6)_ | — |

---

## 4. Redirecionamentos 301 (consolidação anti-canibalização)

Implementados via `redirect({ statusCode: 301 })` no `loader`.

| URL antiga | Destino canônico | Motivo |
|------------|------------------|--------|
| `/conteudos/planejamento-tributario` | `/solucoes/planejamento-tributario` | Conteúdo competia com a oferta |
| `/conteudos/regularizacao-fiscal` | `/solucoes/regularizacao-fiscal` | idem |
| `/conteudos/holding-patrimonio` | `/solucoes/holding-patrimonial` | idem + slug correto |
| `/conteudos/dp-esocial` | `/solucoes/departamento-pessoal` | idem |
| `/conteudos/comercio-icms` | `/segmentos/comercio` | Tema pertence ao segmento |
| `/conteudos/saude-clinicas` | `/segmentos/medicos-clinicas` | idem |
| `/segmentos/pendencias-fiscais` | `/solucoes/regularizacao-fiscal` | "Pendência" é a solução, não setor |
| `/segmentos/simples-nacional` | `/conteudos/regimes-tributarios` | Regime não é segmento |
| `/segmentos/lucro-presumido` | `/conteudos/regimes-tributarios` | idem |
| `/segmentos/lucro-real` | `/conteudos/regimes-tributarios` | idem |
| `/sobre/metodologia` | `/metodo` | Mesma promessa, slug duplicado |

---

## 5. Mapa de interlinking (recomendado)

Cada **Solução** deve linkar:
- ↑ para `/solucoes` (breadcrumb)
- ↔ para 2–3 **Segmentos** onde a dor é mais aguda
- ↔ para 1 **Conteúdo** que aprofunda o tema (quando existir)
- ↓ para `/diagnostico` (CTA)

Cada **Segmento** deve linkar:
- ↑ para `/segmentos`
- ↔ para 2–4 **Soluções** que aquele setor mais consome
- ↓ para `/diagnostico` ou `/contato`

Cada **Conteúdo** deve linkar:
- ↑ para `/conteudos` ou `/temas-estrategicos`
- → para a **Solução comercial** equivalente (transformação editorial→comercial)
- → para o **Segmento** quando o tema é setorial

Exemplos prioritários:

```text
/solucoes/holding-patrimonial   ⇄ /segmentos/holdings, /segmentos/empresas-familiares
/solucoes/regularizacao-fiscal  ⇄ /segmentos/comercio, /segmentos/construcao-civil-spe
/solucoes/departamento-pessoal  ⇄ /segmentos/condominios, /segmentos/franquias-redes
/solucoes/planejamento-tributario → /conteudos/regimes-tributarios
/segmentos/medicos-clinicas     → /solucoes/planejamento-tributario, /solucoes/pessoa-fisica-irpf
/segmentos/provedores-internet  → /solucoes/recuperacao-creditos-tributarios, /solucoes/defesas-fiscais
```

---

## 6. Lacunas e backlog editorial

Conteúdos pilares ainda **não criados** que dariam apoio às soluções/segmentos (sugestão para próximos sprints):

- `/conteudos/reforma-tributaria-ibs-cbs` — apoia `/solucoes/reforma-tributaria`.
- `/conteudos/fator-r-pro-labore` — apoia médicos, odonto, prestadores.
- `/conteudos/holding-familiar-vs-patrimonial` — apoia `/solucoes/holding-patrimonial`.
- `/conteudos/recuperacao-creditos-pis-cofins` — apoia recuperação.
- `/conteudos/abertura-de-empresa-passo-a-passo` — apoia `/solucoes/abrir-empresa`.
- `/conteudos/migracao-de-contabilidade` — apoia `/solucoes/trocar-contabilidade`.
- `/conteudos/esocial-passivos-trabalhistas` — apoia DP.
- `/conteudos/icms-st-comercio-goias` — apoia `/segmentos/comercio`.

Possíveis novas **landing pages locais** (replicar padrão `/goiania`):
- `/aparecida-de-goiania`, `/anapolis`, `/brasilia` — somente se houver demanda comprovada e copy única.

Possíveis novos **segmentos** (validar antes):
- `/segmentos/transporte-logistica`
- `/segmentos/postos-de-combustivel`
- `/segmentos/agencias-marketing`

---

## 7. SEO técnico por seção

- **Title pattern:** `<Assunto> | DCON <qualificador>` (ex.: "Holding Patrimonial | DCON Consultoria"). Manter ≤ 60 caracteres.
- **Description:** 140–160 caracteres, com cidade quando relevante e verbo de ação.
- **Canonical:** auto-referente em toda página canônica; ausente em redirects (eles emitem 301 antes de renderizar).
- **og:image:** por leaf route, nunca no `__root.tsx` (evitar override). _Pendente: ainda não há cobertura completa de OG por rota._
- **Sitemap:** `src/routes/sitemap[.]xml.ts` — listar **apenas** canônicas; nunca incluir URLs com 301.
- **JSON-LD:** Organization no root; `Service` em `/solucoes/*`; `Article` em `/conteudos/*`; `LocalBusiness` em `/goiania`. _Auditoria SEO no painel admin acompanha esses itens._

---

## 8. Áreas restritas (não indexar)

- `/auth`, `/admin/leads`, `/admin/auditoria-seo` → `<meta name="robots" content="noindex,nofollow">` (já aplicado nas auditoria/leads; verificar `/auth`).
- Bloquear `/admin/*` em `public/robots.txt`.

---

## 9. Checklist para os ajustes da próxima fase

1. Padronizar **breadcrumbs visuais** + JSON-LD `BreadcrumbList` em `/solucoes/*`, `/segmentos/*`, `/conteudos/*`.
2. Inserir bloco **"Veja também"** em cada Solução/Segmento conforme §5.
3. Adicionar **FAQ** (JSON-LD `FAQPage`) em pelo menos 5 soluções de alto valor.
4. Gerar **og:image** dedicada por seção (Soluções, Segmentos, Conteúdos, Goiânia).
5. Revisar **CTAs**: cada página canônica precisa de 1 CTA primário acima da dobra.
6. Implementar **autoria** (`/sobre/leandro` como author) nos conteúdos editoriais.
7. Confirmar `noindex` em `/auth` e bloqueio de `/admin/*` em `robots.txt`.
8. Publicar e verificar no GSC; rodar a auditoria automática semanal já configurada em `/admin/auditoria-seo`.

---

_Atualizar este documento sempre que uma rota for criada, renomeada, removida ou redirecionada._