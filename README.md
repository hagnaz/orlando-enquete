# Enquete Orlando 2027

Formulário estático (GitHub Pages) que coleta as preferências de viagem dos 6 integrantes
do grupo e grava numa planilha Google via Google Apps Script.

- `index.html` — o formulário. A URL do Apps Script entra no lugar de `__APPS_SCRIPT_URL__`.
- `apps-script.gs` — código do coletor, pra colar em script.google.com.
- Planilha de respostas: **Orlando 2027 - Respostas Enquete** (Google Drive do Vinicius).

## Passos

1. **Apps Script**: seguir o cabeçalho de `apps-script.gs`. Copiar a URL `/exec`.
2. Substituir `__APPS_SCRIPT_URL__` em `index.html` por essa URL.
3. **GitHub**: criar repositório público vazio, `git push` deste diretório.
4. **Pages**: Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save.
5. Link final: `https://<usuario>.github.io/<repo>/` — mandar no grupo "Disney 2027".

## Ler as respostas

As linhas caem na aba `respostas` da planilha, uma por envio:
`recebido_em | grupo | titulo | enviado_em_cliente | respostas_json`

O Claude lê a planilha pelo conector do Google Drive e trata as respostas.
