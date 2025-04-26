"use strict";
function listarProdutos(dados) {
    document.body.innerHTML +=
        `<div>
    <h1>${dados.name}</h1>
    <p>kz ${dados.preco}</p>
    <p>inclui teclado:${dados.teclado ? 'sim' : 'nâo'}</p>
  </div>
  `;
}
const computador = {
    name: "COMPUTADOR",
    preco: 2000,
    teclado: true
};
const notebook = {
    name: "NOTEBOOK",
    preco: 3000,
    teclado: false
};
listarProdutos(computador);
listarProdutos(notebook);
function seerole(role) {
    return role;
}
console.log(seerole("frontEnd"));
