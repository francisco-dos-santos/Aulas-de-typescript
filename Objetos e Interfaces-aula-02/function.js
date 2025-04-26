"use strict";
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
function abortar(mensagem) {
    throw new Error(mensagem);
}
function randomdUp(value) {
    if (typeof value === 'number') {
        return Math.ceil(value);
    }
    else {
        return Math.ceil(Number(value)).toString();
    }
}
console.log(randomdUp(20.5));
console.log(randomdUp('200.32'));
