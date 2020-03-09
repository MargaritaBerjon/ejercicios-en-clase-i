'use strict';

const elementButton = document.querySelector('#update-button');
const elementSelect = document.querySelector('#mood');
const elementFace = document.querySelector('#face');
const elementMain = document.querySelector('#main');

//creo una función que genera un número aleatorio, le paso como parámetro
//el máximo número de mi rango
function getRandomNumber(max) {
  return Math.round(Math.random() * max);
} 

//----------
//esta función comentada es la misma que la de arriba pero escrita como una arrow function,
//gracias al retorno implícito de estas funciones
// puedo escribir lo mismo en una línea
//const getRandomNumber = (max) => Math.round(Math.random() * max);
//--------


//esta función hace dos cosas
//recoge el valor del select y lo pinta en el HTML
//ejecuta la función que genera un número aleatorio y lo guarda en una variable para poder comparar
function updateMood() {
  elementFace.innerHTML = elementSelect.value;
  const randomNumber = getRandomNumber(100);

  //si el número generado es impar añado la clase angry
  //si no la quito
  if(randomNumber%2 !== 0){
    elementMain.classList.add('angry');
  } else {
    elementMain.classList.remove('angry');
  }
}


elementButton.addEventListener('click',updateMood);