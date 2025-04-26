"use strict";
//aqui usamos o type assertion de (as)
async function fetchProduto() {
    const response = await fetch('./notebook.json');
    return response.json();
}
async function handleProduto() {
    const produto = await fetchProduto();
    console.log(produto[0].nome);
}
handleProduto();
//usamos esse operador(!) quando sabemos que não pode haver a possibilidade de ser null 
const vide = document.querySelector('video');
vide.volume;
document.querySelector('a').href = 'https//:orgamid.com';
//sintaxe do type assertion
const video1 = document.querySelector('.player');
const video2 = document.querySelector('.player');
const video3 = document.querySelector('.player');
const video4 = document.querySelector('.player');
video4.volume;
