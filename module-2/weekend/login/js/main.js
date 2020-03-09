'use strict';

const elementUserInput = document.querySelector('#user-name');
const elementPassInput = document.querySelector('#user-password');
const elementButton = document.querySelector('#login-button');
const elementErrorWrapper = document.querySelector('.error-wrapper');

//Number of user attemps
let attemps = 0;

//Object with user information to compare with my form
const userInfo = {
  name:'front23',
  password:'bicicleta'
}

function increaseAttemps() {
  if(attemps < 3){
    attemps += 1
  }else{
    console.log('Estás bloqueado')
  }
}

function login () {
  if(elementUserInput.value === userInfo.name && elementPassInput.value === userInfo.password) {
    elementErrorWrapper.classList.add('hidden');
    alert('Estás dentro');
  } else {
    increaseAttemps();
    elementErrorWrapper.classList.remove('hidden');
  }
}

elementButton.addEventListener('click',login);