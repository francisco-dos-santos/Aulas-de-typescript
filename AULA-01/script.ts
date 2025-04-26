//typeof e inference 
const texto ='Front-End';
const valor = 2000;
const login = true;
console.log(typeof texto);

//union types and optional tchane
let any:string | number = 200;
any ='texto';

const button = document.querySelector('button');
button?.click()

//function e retorno
const x=100, y=200;
function somar(a:number, b:number):number {
  return a+b;
}
console.log(somar(x,y));