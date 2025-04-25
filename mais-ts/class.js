"use strict";
class Produto {
    tipo = 'produto';
    nome;
    preco;
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    getNome() {
        return this.nome;
    }
}
class Livro extends Produto {
}
const livro = new Produto('Senhor dos Aneis', 300);
console.log(livro.getNome());
