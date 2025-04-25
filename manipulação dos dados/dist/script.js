import Estatisticas from "./Estatisticas.js";
import fetchData from "./fetchData.js";
import normalizarTransacao from "./normalizarTransacao.js";
async function handleData() {
    const data = await fetchData('./transacoes.json');
    if (!data)
        return;
    const transacoes = data.map(normalizarTransacao);
    PreencherTabela(transacoes);
    preencherEstatistica(transacoes);
}
function preencherList(list, container) {
    const containerElement = document.getElementById(container);
    if (containerElement) {
        Object.keys(list).forEach(key => {
            containerElement.innerHTML += `<p>${key}: ${list[key]}</p>`;
        });
    }
}
function preencherEstatistica(transacoes) {
    const data = new Estatisticas(transacoes);
    preencherList(data.pagamento, 'pagamento');
    preencherList(data.status, 'status');
    const totalElement = document.querySelector('p #total');
    if (totalElement) {
        totalElement.innerText = data.total
            .toLocaleString('pt', {
            style: 'currency',
            currency: 'eur',
        });
    }
    const diaElement = document.querySelector('#dia span');
    if (diaElement) {
        diaElement.innerText = data.melhorDia[0];
    }
    console.log(data);
}
function PreencherTabela(transacoes) {
    const tabela = document.querySelector('#transacoes tbody');
    if (!tabela)
        return;
    transacoes.forEach(transacao => {
        tabela.innerHTML += `
      <tr>
        <td>${transacao.nome}</td>
        <td>${transacao.email}</td>
        <td>${transacao.pagamento}</td>
        <td>kz ${transacao.valor ? transacao.valor : '-'}</td>
        <td>${transacao.status}</td>
      </tr>
    `;
    });
}
handleData();
//# sourceMappingURL=script.js.map