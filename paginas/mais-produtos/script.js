const ELEMENTO_CARREGANDO = '<i class="fas fa-spinner fa-pulse"></i> Carregando...';

function carregarPaginaProdutos() {
  const listaProdutos = document.querySelector('.produtos');
  listaProdutos.innerHTML = ELEMENTO_CARREGANDO;

  fetch('../../php/listarProdutos.php', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(res => res.json())
    .then(produtos => {
      listaProdutos.innerHTML = '';

      for (let i = 0; i < produtos.length; i++) {
        const produto = produtos[i];

        listaProdutos.innerHTML += `
          <div class="produto produto-${produto.id}">
            <img
            src="${produto.imagem}">
            <span>${produto.nome}</span>
            <a href="#">Comprar</a>
          </div>
        `;
      }
    });
}