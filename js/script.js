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
const produtos = [
  {
    id: "1",
    nome: "MEN'S BETTER THAN NAKED&trade; JACKET",
    imagem: "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png"
  },
  {
    id: "2",
    nome: "WOMEN'S BETTER THAN NAKED&trade; JACKET",
    imagem: "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-better-than-naked-jacket-AVKL_NN4_hero.png"
  },
  {
    id: "3",
    nome: "Enduro Boa&reg; Hydration Pack",
    imagem: "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png"
  }
];

const carrinhoPersistido = JSON.parse(localStorage.getItem('carrinho'));

const carrinho = carrinhoPersistido === undefined ? carrinhoPersistido : [];

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

const menuHamburguer = document.querySelector('.menu-hamburger');
const menuMobile = document.querySelector('.menu-mobile');
menuHamburguer.addEventListener('click', () => {
  menuMobile.classList.toggle('escondido');
});