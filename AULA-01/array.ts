const numeros=[10,20,30,40,50,60];
const valores=[10, "taxas", 30,'peso', 50 ];

function maiorque10(data:number[]){
  return data.filter(n=> n >10)
}
//console.log(maiorque10(numeros))

function filtrarnumeros(data: Array<number | string>){
  return data.filter(valor=> typeof valor=== 'number');
}
//console.log(filtrarnumeros(valores))

const dados=[
  ['guerra dos tronos', 2000],
  ['senhor dos aneis', 25000]
]

async function fetchCursos() {
  const response= await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await response.json();
  console.log(data);
  mostrarCurso(data);
}
fetchCursos();

interface Curso{
  nome:string;
  horas:number;
  aulas:number;
  gratuito:false;
  tags:string[];
  idAulas:number[];
  nivel:'iniciante' | 'avancado';
} 

function mostrarCurso(cursos:Array<Curso>){
  cursos.forEach(curso=> {
    let color;
    if(curso.nivel=== 'iniciante'){
      color='blue'
    }else if(curso.nivel=== 'avancado'){
      color='red'
    }

    document.body.innerHTML +=`
      <div>
        <h2 style="color:${color}">${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
        <p>Aulas: ${curso.aulas}</p>
        <p>tipo: ${curso.gratuito? 'gratuito' : 'pago'}</p>
        <p>Tags: ${curso.tags.join(', ')}</p>
        <p>id Aulas: ${curso.idAulas.join(' | ')}</p>
      </div>
    `
  })
}

