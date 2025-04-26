/* function typeGuard(value:any){
  if(typeof value ==="string"){
    return value.toLocaleLowerCase()
  }

  if(typeof value === 'number'){
    return value.toFixed()
  }
  if(value instanceof HTMLElement){
    value.innerText
  }
}

typeGuard(200)
typeGuard("texete")
typeGuard(document.body)


const obj= {
  nome:'Orgamid'
}

if('nome' in obj){
  console.log('sim')
}

async function fetchProduto(){
  const response = await fetch('./notebook.json')
  const json= await response.json()
  handleProducts(json)
}

interface Produto{
  nome:string,
  preco:number
}

function handleProducts(data:Produto[]){
  console.log(data)
  data.map(item=>{
    if("preco" in item){
    document.body.innerHTML+=`
    <p>Nome:${item.nome}</p>
    <p>Preco:${item.preco +100}</p>
    `}
})
}
//fetchProduto()


function typeGuard(value:unknown){
  if(typeof value === "string"){
    return value.toUpperCase()
  }
  if(typeof value ==="number"){
    return value.toFixed()
  }
  if(value instanceof HTMLElement){
    return value.innerText="abba"
  }
}

typeGuard('Francisco')
typeGuard(200)
typeGuard(document.body)
*/