type Produto1 ={
  preco:string
};

type Carro={
  rodas:number;
  portas:number;
}
// type intersection(&) usado para extenter propriedades 
// em objectos que não temos acesso, mais atenção para interface e diferente
function handleProdutosCarro(dado:Produto1 & Carro){
  dado.preco;
  dado.rodas;
  dado.portas
}

type TipoCarroComPreco = Carro & {
  preco:number
}

interface interfaceCarro{
  rodas:number;
  portas:number;
}

interface interfaceCarro{
 preco:number;
}

function handleInterfaceCarro(dado:interfaceCarro){}

interface Window{
  userId:number;
}
window.userId=200