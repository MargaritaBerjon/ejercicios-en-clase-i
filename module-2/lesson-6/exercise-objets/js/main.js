'use strict';

const inputPassword = document.querySelector('#js-input-password');
const inputEmail = document.querySelector('#js-input-email');
const submitButton = document.querySelector('#submit-button');
const formDetails = document.querySelector('#form-user');
//creo un objeto vacío donde guardaré los name de los input como clave y los values de los inputs como valor
const formData = {};


//creo una función genérica que se queda con el name del input que emite el evento keyup y con el value de ese input
function setFormData(evt) {
  //guardo en una constante el atributo name y el value del input que emite el evento
  const inputName = evt.currentTarget.name;
  const inputValue = evt.currentTarget.value;
  //seteo en mi objeto las propiedades que le vienen por las variables
  formData[inputName] = inputValue;
  console.log(formData);
}

//creo una función que sea la encargada de enviar los datos
function sendData(evt){
  evt.preventDefault();
  console.log(`El email de mi usuario es ${formData.email} y mi contraseña es ${formData.password}`)
}


inputPassword.addEventListener('keyup', setFormData);
inputEmail.addEventListener('keyup', setFormData);
formDetails.addEventListener('submit', sendData);
submitButton.addEventListener('click', sendData);