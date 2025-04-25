async function fecthProduto<T>(url:string):Promise<T>{
  const base='./';
  const response = await fetch(base + url);
  return await response.json()
}

interface Jogo{
  nome:string;
  ano:number;
  desenvolvedora:string;
  plataformas:string[]
}
interface Livro1{
  nome:string;
  ano:number;
  autor:string;
  paginas:number
}

function checkInterface<Interface>(
  obj:unknown,
  key:keyof Interface
):obj is Interface
{
  if(obj && typeof obj==="object" && key in obj){
    return true;
  }else{
    return false;
  }
}

 async function handleProduto(){
  const jogo = await fecthProduto('jogos.json');
  
    if(checkInterface<Jogo>(jogo, "desenvolvedora")){
      console.log(jogo.desenvolvedora.toLowerCase());
    }
  const livro =  await fecthProduto('livro.json');
    if(checkInterface<Livro1>(livro, "autor")){
      console.log(livro.autor);
    }
}

handleProduto()


//usando também quando eu quer usar qualquer propriedade sem declarar na interface
interface objectLiteral{
  [key:string]:unknown
}
type objectLiteral2=Record<string, unknown> 

function showtitulo(obj:objectLiteral2){
 if('titulo' in obj){
  console.log(obj.titulo)
 }
}

showtitulo({titulo:"HTML & CSS"})