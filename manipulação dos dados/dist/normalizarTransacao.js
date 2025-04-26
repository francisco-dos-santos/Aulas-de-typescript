import moedaParaNumero from "./moedaParaNumero.js";
import stringToDate from "./stringToDate.js";
export default function normalizarTransacao(transacao) {
    return {
        id: transacao.id,
        nome: transacao.nome,
        data: stringToDate(transacao.data),
        email: transacao.email,
        status: transacao.status,
        pagamento: transacao.forma_de_pagamento,
        novo: Boolean(transacao["cliente novo"]),
        valor: moedaParaNumero(transacao["Valor (kz)"])
    };
}
//# sourceMappingURL=normalizarTransacao.js.map