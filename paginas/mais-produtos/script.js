const ELEMENTO_CARREGANDO = '<i class="fas fa-spinner fa-pulse"></i> Carregando...';
const carrinho = JSON.parse(localStorage.getItem('carrinho'));

function comprarProduto(id) {
  const produtoNoCarrinho = carrinho.find(item => item.produto === id);

  if (produtoNoCarrinho) {
    produtoNoCarrinho.qtd++;
  }
  else {
    carrinho.push({
      produto: id,
      qtd: 1
    });
  }

  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

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
            <a onclick="comprarProduto(${produto.id})">Comprar</a>
          </div>
        `;
      }
    });
}