"use strict";
window.UserData = {};
function isUserData(value) {
    if (value && typeof value === "object" &&
        ("nome" in value || "email" in value || "bi" in value)) {
        return true;
    }
    else {
        return false;
    }
}
function validJSON(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}
function loadLocalStorage() {
    const localUserData = localStorage.getItem('UserData');
    if (localUserData && validJSON(localUserData)) {
        const UserData = JSON.parse(localUserData);
        if (isUserData(UserData)) {
            Object.entries(UserData).forEach(([key, value]) => {
                const input = document.getElementById(key);
                if (input instanceof HTMLInputElement) {
                    input.value = value;
                    window.UserData[key] = value;
                }
            });
        }
    }
}
loadLocalStorage();
function handleInput({ target }) {
    if (target instanceof HTMLInputElement) {
        window.UserData[target.id] = target.value;
        localStorage.setItem('UserData', JSON.stringify(window.UserData));
    }
}
const form = document.querySelector('#form');
form?.addEventListener('keyup', handleInput);
