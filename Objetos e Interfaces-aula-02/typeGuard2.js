"use strict";
/*async function fetchProduto(){
  const response = await fetch('./notebook.json')
  const json= await response.json()
  handleProducts(json)
}
fetchProduto()

interface Produto{
  nome:string,
  preco:number
}

function isProduto(value:unknown): value is Produto[] {
  if(value &&
    Array.isArray(value) &&
    typeof value[0]==="object"
    && "nome" in value[0]
    && "preco" in value[0]
  ){
    return true
  }else{
    return false
  }
}
//caso voce queira ter uma segurança total precisas
//veriicar se é uma string quando usas uma propriedade de string(toLowerCase)
function handleProducts(data:unknown){
  if(isProduto(data)){
    for (const item of data){
      console.log(item.nome)
    }
  }
}
*/ 
