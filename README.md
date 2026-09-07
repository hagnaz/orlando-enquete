# Enquete Orlando 2027

Formulário estático (GitHub Pages) que coleta as preferências de viagem dos 6 integrantes
do grupo e grava numa planilha Google via Google Apps Script.

- `index.html` — o formulário. A URL do Apps Script entra no lugar de `__APPS_SCRIPT_URL__`.
- `apps-script.gs` — código do coletor, pra colar em script.google.com.
- Planilha de respostas: **Orlando 2027 - Respostas Enquete** (Google Drive do Vinicius).

## Status (07/09/2026)

- Apps Script publicado, URL `/exec` já injetada no `index.html`. Testado ponta a ponta: envio grava linha na aba `respostas`.
- Repositório: https://github.com/hagnaz/orlando-enquete
- GitHub Pages: **falta ativar** (Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save).
- Link final: `https://hagnaz.github.io/orlando-enquete/` — mandar no grupo "Disney 2027".

## Ler as respostas

As linhas caem na aba `respostas` da planilha, uma por envio:
`recebido_em | grupo | titulo | enviado_em_cliente | respostas_json`

O Claude lê a planilha pelo conector do Google Drive e trata as respostas.
