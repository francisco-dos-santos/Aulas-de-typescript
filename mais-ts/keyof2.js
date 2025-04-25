"use strict";
async function fecthProduto(url) {
    const base = './';
    const response = await fetch(base + url);
    return await response.json();
}
function checkInterface(obj, key) {
    if (obj && typeof obj === "object" && key in obj) {
        return true;
    }
    else {
        return false;
    }
}
async function handleProduto() {
    const jogo = await fecthProduto('jogos.json');
    if (checkInterface(jogo, "desenvolvedora")) {
        console.log(jogo.desenvolvedora.toLowerCase());
    }
    const livro = await fecthProduto('livro.json');
    if (checkInterface(livro, "autor")) {
        console.log(livro.autor);
    }
}
handleProduto();
function showtitulo(obj) {
    if ('titulo' in obj) {
        console.log(obj.titulo);
    }
}
showtitulo({ titulo: "HTML & CSS" });
