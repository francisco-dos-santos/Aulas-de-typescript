
interface interfaceProduto{
  name:string;
  preco:number;
  teclado:boolean
}   

function listarProdutos(dados:interfaceProduto){
  document.body.innerHTML +=
  `<div>
    <h1>${dados.name}</h1>
    <p>kz ${dados.preco}</p>
    <p>inclui teclado:${dados.teclado? 'sim': 'nâo'}</p>
  </div>
  `;
}
const computador:interfaceProduto={
  name:"COMPUTADOR",
  preco:2000,
  teclado:true
}
const notebook:interfaceProduto={
  name:"NOTEBOOK",
  preco:3000,
  teclado:false
}

listarProdutos(computador);
listarProdutos(notebook);


type typeRole = 'design'| 'frontEnd' | 'backEnd';

function seerole(role:typeRole){
  return role;
}

console.log(seerole("frontEnd"))