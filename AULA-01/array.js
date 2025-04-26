"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const numeros = [10, 20, 30, 40, 50, 60];
const valores = [10, "taxas", 30, 'peso', 50];
function maiorque10(data) {
    return data.filter(n => n > 10);
}
//console.log(maiorque10(numeros))
function filtrarnumeros(data) {
    return data.filter(valor => typeof valor === 'number');
}
//console.log(filtrarnumeros(valores))
const dados = [
    ['guerra dos tronos', 2000],
    ['senhor dos aneis', 25000]
];
function fetchCursos() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/cursos.json');
        const data = yield response.json();
        console.log(data);
        mostrarCurso(data);
    });
}
fetchCursos();
function mostrarCurso(cursos) {
    cursos.forEach(curso => {
        let color;
        if (curso.nivel === 'iniciante') {
            color = 'blue';
        }
        else if (curso.nivel === 'avancado') {
            color = 'red';
        }
        document.body.innerHTML += `
      <div>
        <h2 style="color:${color}">${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
        <p>Aulas: ${curso.aulas}</p>
        <p>tipo: ${curso.gratuito ? 'gratuito' : 'pago'}</p>
        <p>Tags: ${curso.tags.join(', ')}</p>
        <p>id Aulas: ${curso.idAulas.join(' | ')}</p>
      </div>
    `;
    });
}
