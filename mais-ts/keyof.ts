interface Elemetos{
  a:HTMLAnchorElement;
  video:HTMLVideoElement;
  div:HTMLElement;
  audio:HTMLAudioElement;
  boby:HTMLBodyElement
}
//usando para que as chave de um object ou inteface 
//possa ser acessado é uma variavel
function selecionar<k extends keyof Elemetos>(selector:k):Elemetos[k] | null{
  return document.querySelector(selector)
}

selecionar("audio")

function coordenadas(x:string, y:string){
  return {x,y}
}

let coord : typeof coordenadas

coord = (x:string, y:string)=>{
  return {x,y}
}