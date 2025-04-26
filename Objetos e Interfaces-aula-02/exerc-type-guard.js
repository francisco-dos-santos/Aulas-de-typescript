"use strict";
async function fetchCursos() {
    const response = await fetch('./cursos.json');
    const json = await response.json();
    handleCursos(json);
}
fetchCursos();
function isCurso(curso) {
    if (curso && typeof curso === "object"
        && 'nome' in curso
        && 'horas' in curso
        && 'tags' in curso) {
        return true;
    }
    else {
        return false;
    }
}
function handleCursos(data) {
    if (Array.isArray(data)) {
        data.filter(isCurso).map(item => {
            document.body.innerHTML += `
       <h3>Nome do curso: ${item.nome}</h3>
       <p>Horas:${item.horas}h</p>
      <p>Tags:${item.tags.join(', ')}</p>
      `;
        });
    }
}
