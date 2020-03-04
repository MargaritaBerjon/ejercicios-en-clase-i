'use strict';

//accedo hasta los elementos que voy a manejar
const userInput = document.querySelector('#user-name');
const emailInput = document.querySelector('#user-email');
const submitButton = document.querySelector('#submit');
const wrapperUserInfo = document.querySelector('#wrapper-user');
const wrapperEmailInfo = document.querySelector('#wrapper-email');

//función de envío de información que se ejecuta al tener lugar el click
const sendFormData = function() {
  //creo unas variables de tipo booleano para controlar si tengo o no tengo errores
  //para validar en una comprobación posterior
  //para empezar a trabajar parto de un estado inicial que yo he decidido
  //en el cual mis variables están inicializadas en false
  let errorUser = false;
  let errorMail = false;

  //determino que al inicio de mi función mi formulario no va a tener errores
  //con lo cual elimino la clase error por si la tuviera
  wrapperUserInfo.classList.remove('error');
  wrapperEmailInfo.classList.remove('error');

  //¿está vacío mi nombre? SI? pues añado la clase error y el booleano cambia su estado
  if(userInput.value === ''){
    wrapperUserInfo.classList.add('error');
    errorUser = true;
  } 

  //¿está vacío mi email? SI? pues añado la clase error y el booleano cambia su estado
  if(emailInput.value === ''){
    wrapperEmailInfo.classList.add('error');
    errorMail = true;
  }

  //¿mis booleanos son false? mi formulario no tiene errores? pues borro las clases error, envío los datos.
  //esto es equivalente a errorUser !== true / errorUser === false
  if(!errorUser && !errorMail) {
    alert('Datos enviados');
  }
}

submitButton.addEventListener('click',sendFormData);