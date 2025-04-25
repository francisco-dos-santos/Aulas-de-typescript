export const BASE_URL='https://orgamid.dev/json';

/* interface Produto{
  nome:string;
  preco:number
}*/

//atenção a declarar golbal porque uma interface pode ser sobrescrita por cima de outra. 
//Quando usar golbal tenha a certeza que não vais escrever mais em outro lugar  
declare global{
  interface Usuario{
    nome:string;
    id:number
  }

}