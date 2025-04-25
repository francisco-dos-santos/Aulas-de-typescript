import { BASE_URL } from "./global.js";

function pluginSlide(selector:string){
  console.log("Criando Slide:", selector);
  console.log(BASE_URL)
}

const usuario:Usuario={
  nome:'nome',
  id:1
}
console.log(usuario.nome)

export default pluginSlide;