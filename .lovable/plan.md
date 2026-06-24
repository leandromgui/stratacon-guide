# Plano de ajustes DCON — conteúdo validado

O documento enviado tem 2230 linhas com correções técnicas e conteúdo revisado para praticamente todas as páginas do site. Para garantir qualidade e não sobrecarregar a sessão, proponho dividir em 4 entregas sequenciais.

---

## Entrega 1 — Correções técnicas críticas (rápida)

Arquivos: `__root.tsx`, `robots.txt`, `sitemap.xml.ts`, `SiteLayout.tsx`, `llms.txt`, `index.tsx`

- Alterar `<html lang="en">` para `pt-BR`
- Corrigir `robots.txt`: bloquear `/admin/` e `/auth`, apontar sitemap para `https://dcon.cnt.br/sitemap.xml`
- Remover do sitemap URLs que redirecionam 301:
  - `/sobre/metodologia`
  - `/conteudos/comercio-icms`, `/dp-esocial`, `/holding-patrimonio`, `/planejamento-tributario`, `/regularizacao-fiscal`, `/saude-clinicas`
  - `/segmentos/simples-nacional`, `/lucro-presumido`, `/lucro-real`, `/pendencias-fiscais`
- Corrigir links do footer que apontam para rotas redirecionadas (`/conteudos/planejamento-tributario` → `/solucoes/planejamento-tributario`, etc.)
- Política de privacidade/LGPD → `/privacidade`; remover link "Termos de uso" até existir
- Separar CRC: hero trust bar → "DCON CRC-GO 1202 · Resp. técnico CRC-GO 16.395/O-9"
- Footer: "DCON Serviços Contábeis — CRC-GO 1202 · Responsável técnico: Leandro Matsuoka Guimarães — CRC-GO 16.395/O-9"
- Substituir CTAs "gratuito" por "Solicitar diagnóstico técnico inicial" / "Análise inicial sem compromisso comercial"
- Ampliar `llms.txt` com identificação completa da firma, responsável técnico e métodos

## Entrega 2 — Home + Diagnóstico + Método

- **Home** (`/`): ajustar H1, subheadline, trust bar, CTA e posicionamento conforme seção 4 do documento
- **Diagnóstico** (`/diagnostico`): reescrever conteúdo com o que o diagnóstico analisa, como funciona, o que não é, o que pode gerar
- **Método** (`/metodo`): reforçar as 4 etapas (diagnóstico, cruzamento, parecer, execução) com o conteúdo validado

## Entrega 3 — Soluções principais (8 páginas)

Aplicar conteúdo validado do documento nas páginas:

1. `/solucoes/reforma-tributaria` — IBS/CBS, 2026, NFS-e, locadores, Lucro Presumido, redução linear, ICMS
2. `/solucoes/planejamento-tributario` — regimes, PF x PJ, IRPFM, manobras fiscais
3. `/solucoes/recuperacao-creditos-tributarios` — monofásico, equiparação hospitalar, exportação, DIFAL
4. `/solucoes/defesas-fiscais` — intimações, PGFN, PER/DCOMP, Termo de Exclusão, Falso Simples
5. `/solucoes/regularizacao-fiscal` — CND, licitações, crédito, obrigações atrasadas
6. `/solucoes/pessoa-fisica-irpf` — PF x PJ, Receita Saúde, malha, pensão, aluguéis, IRPFM
7. `/solucoes/holding-patrimonial` — quando faz/não faz sentido, IBS/CBS, IRPFM, custos
8. `/solucoes/departamento-pessoal` — reposicionar para Folha/eSocial/Compliance; CCT, premiações, SST

## Entrega 4 — Segmentos + Soluções restantes + Schema

Aplicar conteúdo validado:

- `/segmentos/construcao-civil-spe` — CNO, Sero, ISS, empreitada total
- `/segmentos/produtor-rural` — Funrural x folha, LC 224/2025
- `/segmentos/provedores-internet` — SCM, SVA, NFCom
- `/segmentos/medicos-clinicas` — Fator R, equiparação hospitalar, Receita Saúde
- `/solucoes/tecnologia-contabil` — cruzamentos, certidões, dashboards
- `/solucoes/registro-marca-inpi` — proteção de marca
- `/solucoes/valuation-kpis` — DCF, margem, Curva ABC
- `/solucoes/bpo-financeiro` — rotina financeira
- `/sobre/leandro` — atualizar intro com CRC separado
- Completar schemas: `AccountingService`, `Person`, `Service`, `FAQPage`

---

## Pergunta para o usuário

Prefere que eu execute por etapas (entrega 1 → 2 → 3 → 4) ou quer que eu foque em algumas páginas específicas primeiro?
