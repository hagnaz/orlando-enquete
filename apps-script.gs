/**
 * Coletor da Enquete Orlando 2027.
 * Recebe os POSTs do formulário (GitHub Pages) e grava na planilha
 * "Orlando 2027 - Respostas Enquete".
 *
 * SETUP:
 * 1. https://script.google.com  ->  Novo projeto
 * 2. Apague o conteúdo e cole este arquivo inteiro
 * 3. Salvar (ícone de disquete)
 * 4. Implantar  ->  Nova implantação  ->  tipo "App da Web"
 *      - Executar como: Eu
 *      - Quem tem acesso: Qualquer pessoa
 *    Implantar  ->  Autorizar acesso  ->  escolher a conta  ->  Permitir
 * 5. Copiar a "URL do app da Web" (termina em /exec) e mandar pro Claude
 *
 * Pra testar depois: abrir a URL /exec no navegador deve mostrar {"ok":true,"linhas":0}
 */

var SHEET_ID = "1bPfhGB9t7n1xogbG5mRbZ5YqxCcYNE3BtEYr4YYZn90";
var TAB = "respostas";

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sh = getSheet_();
    sh.appendRow([
      new Date(),
      data.grupo || "",
      data.titulo || "",
      data.enviadoEm || "",
      JSON.stringify(data.respostas || {})
    ]);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function doGet(e) {
  try {
    var sh = getSheet_();
    return json_({ ok: true, linhas: Math.max(0, sh.getLastRow() - 1) });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function getSheet_() {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var sh = ss.getSheetByName(TAB);
  if (!sh) {
    sh = ss.insertSheet(TAB);
    sh.appendRow(["recebido_em", "grupo", "titulo", "enviado_em_cliente", "respostas_json"]);
  }
  return sh;
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
