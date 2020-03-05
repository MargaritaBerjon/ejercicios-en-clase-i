'use strict';

const userNameElem = document.querySelector('#user-name');
const userEmailElem = document.querySelector('#user-email');
const submitButton = document.querySelector('#submit-btn');
const userNameResult = document.querySelector('#user-name-result');
const userEmailResult = document.querySelector('#user-email-result');
const userDetailsForm = document.querySelector('#user-details');
const legalTextElem = document.querySelector("#legal-text");
const legalSpanElem = document.querySelector("#legal-span");

//declaro dos variables globales aquí para usarlas posteriormente
// en mis funciones
let userName;
let userEmail;

//hago una función que pinte en la caja de texto la información de los values de los inputs
//después guardo en las variables que previamente he declarado el contenido del HTML
function updateUserInfo(){
  userNameResult.innerHTML = userNameElem.value;
  userEmailResult.innerHTML = userEmailElem.value;
  userName = userNameElem.value;
  userEmail = userEmailElem.value;
}

//pinto por consola los valores de las variables
//que he definido fuero y que han adquirido el valor de los inputs
function sendUserInfo(event) {
  event.preventDefault();
  console.log(`Estoy mandando al server ${userName} y ${userEmail}`)
}

//esta función realiza un toggle que pone o quita la clase hidden dependiendo de del mouse
function showHiddenInfo(){
  legalTextElem.classList.toggle('hidden');
}

//asigno el addEventListener con el evento keyup a los inputs para detectar cuando escribo un nuevo caracter
userNameElem.addEventListener('keyup', updateUserInfo);
userEmailElem.addEventListener('keyup', updateUserInfo);

//asigno el addEventListener del envío del formulario al botón y al propio formulario
//la función se ejecutará cuando haga click o cuando haga submit en el formulario
submitButton.addEventListener('click',sendUserInfo);
userDetailsForm.addEventListener('submit',sendUserInfo);

//asigno el addEventListener al elemento span para que cuando te pares encima aparezca un mensaje
// con el texto que tengo oculto con la clase hidden
legalSpanElem.addEventListener('mouseover',showHiddenInfo);
legalSpanElem.addEventListener('mouseout',showHiddenInfo);
