# Plano — barras finais nos links internos

## Implementação

- Ativar a política central `trailingSlash: "always"` no roteador, fazendo todos os componentes de navegação gerarem URLs internas com barra final.
- Substituir os poucos links HTML internos diretos por navegação do roteador, para que também recebam a mesma normalização central.
- Não alterar links externos, arquivos estáticos, sitemap, conteúdo ou destinos existentes.

## Validação

- Fazer fetch real da home e de pelo menos cinco páginas internas publicadas.
- Contar todos os links internos e quantos ainda não terminam em barra, desconsiderando a home, arquivos e links externos.
- Confirmar que os links continuam levando às mesmas páginas e que a aplicação compila sem erros.
- Publicar e informar a contagem exata antes/depois e se a solução ficou centralizada ou distribuída.

## Detalhe técnico

A configuração principal ficará em um único ponto do roteador. Apenas tags HTML `<a>` internas que ignoram o roteador precisarão de conversão pontual para `Link`.
