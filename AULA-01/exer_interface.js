"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchProdutos() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/notebook.json');
        const data = yield response.json();
        console.log(data);
        showProduto(data);
    });
}
function showProduto(produto) {
    document.body.innerHTML = `
  <div>
    <h2>${produto.nome}</h2>
    <p>Preço: kz ${produto.preco}</p>
    <p>Descrição: ${produto.descricao}</p>
    <p>Garantia: ${produto.garantia} meses</p>
    <p>Seguro de Acindente: ${produto.seguroAcidentes ? 'sim' : 'não'}</p>
    <h3>Empresa Frabricante: ${produto.empresaFabricante.nome}</h3>
    <ul>
      <li> Ano da fundação: ${produto.empresaFabricante.fundacao} </li>
      <li> País: ${produto.empresaFabricante.pais} </li>
    </ul>
    <h3>Empresa Montadora: ${produto.empresaMontadora.nome}</h3>
    <ul>
      <li> Ano da fundação: ${produto.empresaMontadora.fundacao} </li>
      <li> País: ${produto.empresaMontadora.pais} </li>
    </ul>
  </div> 
  `;
}
fetchProdutos();
