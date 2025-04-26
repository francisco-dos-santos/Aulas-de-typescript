"use strict";
const btnMenu = document.getElementById('btn-mobile');
function handleMenuHamburguer(event) {
    const nav = document.getElementById('nav');
    const button = event.currentTarget;
    if (button instanceof HTMLElement && nav) {
        const active = nav.classList.contains('active');
        if (!active) {
            nav.classList.add('active');
            btnMenu === null || btnMenu === void 0 ? void 0 : btnMenu.setAttribute('aria-label', 'Fechar Menu');
            btnMenu === null || btnMenu === void 0 ? void 0 : btnMenu.setAttribute('aria-expanded', 'true');
        }
        else {
            nav.classList.remove('active');
            btnMenu === null || btnMenu === void 0 ? void 0 : btnMenu.setAttribute('aria-label', 'Abrir Menu');
            btnMenu === null || btnMenu === void 0 ? void 0 : btnMenu.setAttribute('aria-expanded', 'false');
        }
    }
}
btnMenu === null || btnMenu === void 0 ? void 0 : btnMenu.addEventListener('pointerdown', handleMenuHamburguer);
