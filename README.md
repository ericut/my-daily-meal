# My Daily Meal

Aplica��o privada para encontrar receitas a partir dos ingredientes dispon�veis e explorar o cat�logo da TheMealDB.

## Estrutura

- `worker/index.js`: interface e API do Worker do Site.
- `migrations/0001_initial.sql`: esquema PostgreSQL do projeto no Neon.
- `scripts/build.mjs`: prepara o artefato est�tico do Worker.

O cat�logo � carregado pelos endpoints oficiais da API TheMealDB. A chave `1` � de desenvolvimento; mantenha este Site privado enquanto estiver usando essa chave. Os dados e imagens exibidos recebem cr�dito � TheMealDB.
