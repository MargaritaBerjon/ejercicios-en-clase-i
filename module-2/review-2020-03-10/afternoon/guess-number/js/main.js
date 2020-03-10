'use strict';

//access to my elements IDs
const inputNumber = document.querySelector('#input-number');
const submitNumber = document.querySelector('#submit-number');
const responseText = document.querySelector('#response-text');
const attempsCounter = document.querySelector('#attemps-counter');
const formData = document.querySelector('#form-number');

//creo una variable attemps que contabilizará el número de intentos
let attempsValue = 0;
//creo una variable maxNumber para poder hacer la comparación y la validación de los datos que me llegan desde el input
const maxNumber = 100;

//creo una función getRandomNumber para obtener un número aleatorio
const getRandomNumber = max => Math.round(Math.random() * max);

//ejecuto getRandomNumber y guardo el valor que me retorna en una variable para poder operar con él
const randomNumber = getRandomNumber(maxNumber);

//para pintar el número de intentos pongo en el innerHTML de mi contador el valor de la variable attempsValue
attempsCounter.innerHTML = attempsValue;

console.log(randomNumber);

//función para chequear el número que me viene del input
function checkNumber() {
  //DATOS INCORRECTOS: si el valor es mayor que mi máximo, si el value me viene vacío o si el value es menor o igual a 0
  if(inputNumber.value > maxNumber || inputNumber.value === '' || inputNumber.value <= 0) {
    responseText.innerHTML = 'el número debe estar entre 1 y 100';
  //si el valor del input es mayor que el número generado
  } else if(inputNumber.value > randomNumber) {
    responseText.innerHTML = 'el número es demasiado alto';
  //si el valor del input es menor que el número generado
  }else if(inputNumber.value < randomNumber) {
    responseText.innerHTML = 'el número es demasiado bajo';
  //en todos los demás casos el número es correcto
  }else {
    responseText.innerHTML = 'el número ES CORRECTO';
  }
}

//función para incrementar el valor del contador en uno y actualizar el innerHTML del contador
function increaseCounter() {
  attempsValue += 1;
  attempsCounter.innerHTML = attempsValue;
}

//función manejadora del evento click que ejecuta las otras dos funciones
function playButtonHandler () {
  increaseCounter();
  checkNumber();
}


submitNumber.addEventListener('click',playButtonHandler);




