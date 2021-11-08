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
  },
  {
    id: "3",
    nome: "Enduro Boa&reg; Hydration Pack",
    imagem: "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png"
  },
  {
    id: "4",
    nome: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    imagem: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  },
  {
    id: "3",
    nome: "Mens Casual Premium Slim Fit T-Shirts ",
    imagem: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
  },
  {
    id: "3",
    nome: "Mens Cotton Jacket",
    imagem: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
  },
  {
    id: "3",
    nome: "Mens Casual Slim Fit",
    imagem: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
  },
  {
    id: "3",
    nome: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    imagem: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
  },
  {
    id: "3",
    nome: "Solid Gold Petite Micropave",
    imagem: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
  },
  {
    id: "3",
    nome: "White Gold Plated Princess",
    imagem: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
  },
  {
    id: "3",
    nome: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    imagem: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
  },
  {
    id: "3",
    nome: "DANVOUY Womens T Shirt Casual Cotton Short",
    imagem: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
  },
  {
    id: "3",
    nome: "Opna Women's Short Sleeve Moisture",
    imagem: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
  },
  {
    id: "3",
    nome: "MBJ Women's Solid Short Sleeve Boat Neck V",
    imagem: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
  },
  {
    id: "3",
    nome: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    imagem: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
  },
  {
    id: "3",
    nome: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    imagem: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
  },
];


function carregarPaginaProdutos() {
  const listaProdutos = document.querySelector('.produtos');

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
}