"use strict";
const input = document.querySelector('input');
const total = localStorage.getItem('Total');
if (input && total) {
    input.value = total;
    calcularValor(Number(input.value));
}
function calcularValor(value) {
    const p = document.querySelector('p');
    if (p) {
        p.innerText = `Ganho Total: ${value + 100 - value * 0.2}`;
    }
}
function TotalMudou() {
    if (input) {
        localStorage.setItem('Total', input.value);
        calcularValor(Number(input === null || input === void 0 ? void 0 : input.value));
    }
}
if (input) {
    input.addEventListener('keyup', TotalMudou);
}
