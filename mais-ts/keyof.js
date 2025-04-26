"use strict";
//usando para que as chave de um object ou inteface 
//possa ser acessado é uma variavel
function selecionar(selector) {
    return document.querySelector(selector);
}
selecionar("audio");
function coordenadas(x, y) {
    return { x, y };
}
let coord;
coord = (x, y) => {
    return { x, y };
};
