/*
function somar(a:number, b:number, c?:number):number{
  return a + b -(c? c: 0)
}
somar(10,3)

const subtrair = (a:number,b:number) =>a-b
subtrair(30,20)

function pintarBody(cor:string):void {
  document.body.style.background=cor
}
pintarBody('blue')

function isString(value:any){
  if(typeof value === 'string'){
    return true
  }
}
console.log(isString('cor'))
//console.log(isString(200))
*/

function abortar(mensagem:string):never{
  throw new Error(mensagem);
}
//abortar("Erro na tela");
//console.log('Teste de console')

/** Overloads*/
/*function normalizar(value:string):string;
function normalizar(value:string[]):string[];
function normalizar(value:string | string[]):string | string[]{
  if(typeof value === 'string'){
    return value.trim().toLowerCase()
  }else{
    return value.map(item=>item.trim().toLowerCase())
  }
}
console.log(normalizar('texto ').toUpperCase());
console.log(normalizar([' arroz','carne  ']));
*/


/**
 * Exercicio
 * Cria function que retorna um valor arredodado para cima
 * Usar o overloads
 */
function randomdUp(value:string):string;
function randomdUp(value:number):number;
function randomdUp(value:string | number):string | number{
  if(typeof value ==='number'){
    return Math.ceil(value)
  }else{
    return Math.ceil(Number(value)).toString();
  }
}

console.log(randomdUp(20.5))
console.log(randomdUp('200.32'))