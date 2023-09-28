async function listaVideos() {
  const conexao = await fetch("http://localhost:3000/videos"); //requisição get: só estamos solicitando que a API retorne dados, que é o método padrão (método GET), sem pedir para fazer mais nada além de receber os valores
  const conexaoConvertida = await conexao.json();
  return conexaoConvertida; //retorna uma response porque aguardamos a promessa ser resolvida utilizando await
}

async function criaVideo(titulo, descricao, url, imagem) {
  const conexao = await fetch("http://localhost:3000/videos", {
    method: "POST", //requisição post: alteramos a requisição padrão GET para POST. Permite acrescentar novos objetos na API
    headers: {
      //header da requisição
      "Content-type": "application/json", //serve para especificar o tipo do arquivo que está sendo recebido ou enviado, nesse caso JSON
    },
    body: JSON.stringify({
      //corpo da requisição. Enviando um objeto de valores. Para enviar uma requisição tem que ser sempre uma string
      titulo: titulo,
      descricao: `${descricao} mil visualizações`,
      url: url,
      imagem: imagem,
    })
  });

  if(!conexao.ok){
    throw new Error("Não foi possível enviar o vídeo");
  }

  const conexaoConvertida = await conexao.json();
  return conexaoConvertida //retornamos para o usuário a resposta
}

async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json();

    return conexaoConvertida
}

export const conectaApi = {
  listaVideos, //exporta a variável conectaApi que recebe a função listaVideos, assim importamos a função
  criaVideo,
  buscaVideo
}; 
