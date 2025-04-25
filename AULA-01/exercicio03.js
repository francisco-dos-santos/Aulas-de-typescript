"use strict";
function toNumber(value) {
    if (typeof value === "number") {
        return value;
    }
    else if (typeof value === "string") {
        return Number(value);
    }
    else {
        throw "valor deve ser um numero ou string";
    }
}
console.log(toNumber('2'));
