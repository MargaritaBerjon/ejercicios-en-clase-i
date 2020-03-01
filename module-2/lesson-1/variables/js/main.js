'use strict';

//Primero accedo a los elementos que voy a utilizar
//en este caso el span con id name y mi h1 con id title
const nameElem = document.querySelector('#name');
const titleElem = document.querySelector('#title');

//declaro una variable con el nombre de una alumna
let studentName = 'Elvira';
//cambio el valor de esta variable, puedo probar a utilizar const en lugar de let, veré que se genera un error
studentName = 'Eli';

//modifico el valor de nameElem, puedo añadir tanto variables como etiquetas...
nameElem.innerHTML = studentName + ' <span class="surname">Pérez</span>';

//añado una nueva clase a mi h1
titleElem.classList.add('blue');

//con console.log hago que la consola del navegador me devuelva mensajes muy útiles a la hora de depurar
console.log(nameElem.innerHTML);