import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
  evento.preventDefault(); //form recarrega página sempre que da submit

  const imagem = document.querySelector("[data-imagem]").value;
  const url = document.querySelector("[data-url]").value;
  const titulo = document.querySelector("[data-titulo]").value;
  const descricao = Math.floor(Math.random() * 10).toString(); //criamos um número aleatório de ponto flutuante entre 0 e 1 (*10 transforma em 1 a 10). Math.floor arredonda para um número inteiro.
  try {
    await conectaApi.criaVideo(titulo, descricao, url, imagem);

    window.location.href = "../pages/envio-concluido.html";
  } catch (e) {
    alert(e);
  }
}

formulario.addEventListener("submit", (evento) => criarVideo(evento));
