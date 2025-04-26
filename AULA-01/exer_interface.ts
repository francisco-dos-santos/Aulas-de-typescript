interface Empresa{
  nome:string;
  fundacao:number;
  pais:string;
}
interface Produto{
  nome:string;
  preco:number;
  descricao:string;
  garantia:string;
  seguroAcidentes:boolean;
  empresaFabricante:Empresa;
  empresaMontadora:Empresa;
}

async function fetchProdutos() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const data = await response.json();
  console.log(data)
  showProduto(data);
}

function showProduto(produto:Produto){
  document.body.innerHTML =`
  <div>
    <h2>${produto.nome}</h2>
    <p>Preço: kz ${produto.preco}</p>
    <p>Descrição: ${produto.descricao}</p>
    <p>Garantia: ${produto.garantia} meses</p>
    <p>Seguro de Acindente: ${produto.seguroAcidentes? 'sim':'não'}</p>
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
  `
}

fetchProdutos();