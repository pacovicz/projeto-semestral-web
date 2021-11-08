let i = 0;
let txt = 'e-Kommp, aqui os preços são sem kommparação';
let speed = 45;

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".slogan h3").textContent += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

let qtdCarrinho = 0;

const carrinhoPersistido = JSON.parse(localStorage.getItem('carrinho'));
const carrinho = carrinhoPersistido === null ? [] : carrinhoPersistido;
const ELEMENTO_CARREGANDO = '<i class="fas fa-spinner fa-pulse"></i> Carregando...';

function comprarProduto(id) {
  const qtdCarrinhoIcon = document.querySelector('.qtd-carrinho');
  qtdCarrinhoIcon.classList.remove('escondido');
  qtdCarrinho++;
  qtdCarrinhoIcon.textContent = qtdCarrinho;

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

function carregarPaginaPrincipal() {
  const menuHamburguer = document.querySelector('.menu-hamburger');
  const menuMobile = document.querySelector('.menu-mobile');
  menuHamburguer.addEventListener('click', () => {
    menuMobile.classList.toggle('escondido');
  });

  const usuario = JSON.parse(localStorage.getItem('usuario'));
  if (usuario) {
    const botaoLogin = document.querySelector('.botao.login');
    botaoLogin.href = '';
    botaoLogin.innerHTML = 'Sair';
    botaoLogin.addEventListener('click', () => {
      localStorage.removeItem('usuario');
      botaoLogin.innerHTML = 'Login';
      setTimeout(() => {
        botaoLogin.href = '/projeto-semestral-web/paginas/login/index.html';
      }, 1000);
    });
  }

  const listaProdutos = document.querySelector('.produtos');
  listaProdutos.innerHTML = ELEMENTO_CARREGANDO;

  fetch('/php/listarProdutos.php', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(res => res.json())
    .then(produtos => {
      listaProdutos.innerHTML = '';

      for (let i = 0; i < 3; i++) {
        const produto = produtos[i];

        listaProdutos.innerHTML += `
          <div class="produto produto-${produto.id}">
            <img
            src="${produto.imagem}">
            <span>${produto.nome}</span>
            <button onclick="comprarProduto(${produto.id})">Comprar</button>
          </div>
        `;
      }
    });
}