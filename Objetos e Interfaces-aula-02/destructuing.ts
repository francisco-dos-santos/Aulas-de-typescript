
interface Produt{
  nome:string;
  prece?:number;
}
function handleData({nome,prece}:Produt){
  nome.includes('books');
  prece?.toFixed();
}
handleData({nome:"miro", prece:200});

//usamos essa quando sabermos qual callback estamos a passar ou unico
function handleclick1({currentTarget,pageX}
  :MouseEvent){
    if(currentTarget instanceof HTMLElement){
      currentTarget.innerHTML=`<h1>Clicou a posição X:${pageX}</h1>`
      console.log(currentTarget)
    }
    console.log(pageX)
  }
  
//usar esse method quado vamos usar varios callback de eventos
function handleclick({currentTarget}:
  {currentTarget:EventTarget | null;
}){
    if(currentTarget instanceof HTMLElement){
      currentTarget.innerHTML=`<h1>Clicou a posição X:1</h1>`
      console.log(currentTarget)
    }
    
  }
document.documentElement.addEventListener('click',handleclick1);  
document.documentElement.addEventListener('touchstart',handleclick);

function comparar(tipo:"menor" | "maior", ...numeros:number[]){
  if(tipo === "menor"){
    return Math.min(...numeros);
  }
  if(tipo==="maior"){
    return Math.max(...numeros);
  }

}

console.log(comparar("menor", 2,3,4,7,8,9,10,30));
console.log(comparar("maior", 2,3,4,7,8,9,10,30));