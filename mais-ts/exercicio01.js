"use strict";
async function fetchVendas() {
    const response = await fetch('./vendas.json');
    const data = await response.json();
    console.log(data);
    somarVendas(data);
}
fetchVendas();
function somarVendas(data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
        total += data[i][1];
    }
    document.body.innerHTML += `<p>Total:${total}</p>`;
    const total2 = data.reduce((total, venda) => {
        return total + venda[1];
    }, 0);
    document.body.innerHTML += `<p>Total2:${total2}</p>`;
}
