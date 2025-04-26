/**
 * 
 * @param moeda recebe string (1.200,50) e retorna (1200.50)
 * @returns number ou null(caso não for um numero valido)
 */
export default function moedaParaNumero(moeda:string):number | null{
  const numero=Number(moeda.replaceAll('.','').replace(',','.'))
  return isNaN(numero) ? null: numero
}