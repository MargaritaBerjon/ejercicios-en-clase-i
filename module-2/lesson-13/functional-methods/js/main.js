'use strict';

const elemList = document.querySelector('#list');

const studentNames = ["Carmen", "Eva", "Teresa"]

//DEVUELVEN LOS RESULTADOS CREANDO NUEVOS ARRAYS, NO SON DESTRUCTIVOS
//NO MACHACAN EL ARRAY ORIGINAL, CREAN UNO DIFERENTE, por eso los guardamos en una variable
//para almacenar el nuevo array generado y poder hacer cosas con el

//Usando MAP
//Ejecuta una función sobre cada elemento de un array y me devuelve un nuevo array
// const capitalNames = studentNames.map(student => student.toUpperCase());
// console.log(capitalNames);
// console.log(studentNames);

//Usando FILTER para filtrar por ejemplo una coincidencia
//Ejecuta una función que aplica una condición sobre cada elemento del array y me devuelve el resultado
// const selectedNames = studentNames.filter(student => student.length === 3);
// console.log(selectedNames);

//Encadenando métodos
//primero realiza el filtro y luego ejecuta una función
// const filterAndUppercaseName = studentNames.filter(student => student.length === 3).map(student => student.toUpperCase());
// console.log(filterAndUppercaseName);



//Métodos find y findIndex
//Muy útiles cuando trabajo con objetos
const students = [
  {
    id:"0",
    name: "Carmen López",
    age: "21",
    job: "diseñadora"
  },
  { 
    id:"1",
    name: "Eva Martínez",
    age: "35",
    job: "periodista"
  },
  {
    id:"2",
    name: "Teresa Pérez",
    age: "25",
    job: "actriz"
  }
]

function renderStudents() {
  for (let singleStudent of students) {
    elemList.innerHTML += `<li id='${singleStudent.id}'><p>${singleStudent.name}</p><p>Edad: ${singleStudent.age}</p><p>Profesión: ${singleStudent.job}</p></li>`
    addListeners();
  }
}


function addListeners(){
  const liList = document.querySelectorAll('li');
  for (let li of liList) {
    li.addEventListener('click',selectStudent);
  }
}

function selectStudent(evt){
  //Al hacer click sobre un elemento me quedo con su id
  const selectedLi = evt.currentTarget.id;

  //con findIndex guardándolo en una variable puedo quedarme con el índice del elemento sobre el que ha sucedido el evento
  //compararlo con el de el objeto y devolver ese índice
  //const indexOfStudent = students.findIndex(student => student.id === selectedLi);
  //console.log(indexOfStudent);

  //exactamente igual que findIndex pero devolviendo el objeto como tal
  const returnedElement = students.find(student => student.id === selectedLi);
  console.log(returnedElement)
  //students.splice(indexOfStudent,1);
  //console.log(students);
}

renderStudents()



//Reduce realiza una operación concreta y devuelve el tipo de valor que nosotros queramos, es un método bastante
//complejo
const scores = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 7];

const result = scores.reduce((acc, number) => acc + number, );

console.log(result);
