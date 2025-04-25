import moedaParaNumero from "./moedaParaNumero.js";
import stringToDate from "./stringToDate.js";

declare global {
  type TransacoesPagamento = "MCX Express" | "Cartão de Credito";
  type TransacoesStatus = 
  "Paga" | 
  "Recusado" | 
  "Aguardando" | 
  "Cancelado";

  interface TransacoesAPI{
    id:number;
    nome:string;
    data:string;
    email:string;
    status:TransacoesStatus;
    forma_de_pagamento:TransacoesPagamento
    ['cliente novo']:number;
    ['Valor (kz)']:string;
  }
  interface Transacao{
    id:number;
    nome:string;
    data:Date;
    email:string;
    status:TransacoesStatus;
    pagamento:TransacoesPagamento;
    novo:boolean;
    valor:number | null
  }
}
export default function normalizarTransacao(transacao:TransacoesAPI):Transacao{
  return{
    id:transacao.id,
    nome:transacao.nome,
    data:stringToDate(transacao.data),
    email:transacao.email,
    status:transacao.status,
    pagamento:transacao.forma_de_pagamento,
    novo:Boolean(transacao["cliente novo"]),
    valor:moedaParaNumero(transacao["Valor (kz)"])
  }
}