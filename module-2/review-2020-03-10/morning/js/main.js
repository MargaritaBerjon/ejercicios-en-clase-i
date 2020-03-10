'use strict';

const btn = document.querySelector('.js-input-submit');
const inputNumber = document.querySelector('.js-input-number');
const feedbackEl = document.querySelector('.js-feedback');
const counterEl = document.querySelector('.js-counter');

// random number

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log('Número aleatorio:', randomNumber);

// clue

function handleBtn(ev) {
  ev.preventDefault();
  showClue();
  showCounter();
}

function showClue() {
  const inputNumberValue = parseInt(inputNumber.value);
  console.log(randomNumber, inputNumberValue);
  if (randomNumber === inputNumberValue) {
    feedbackEl.innerHTML = 'Has ganado campeona';
    // } else if (!(inputNumberValue > 1 && inputNumberValue < 100)) {
  } else if (inputNumberValue > 100 || inputNumberValue < 1) {
    feedbackEl.innerHTML = 'Tienes que poner un número entre 1 y 100';
  } else if (isNaN(inputNumberValue)) {
    feedbackEl.innerHTML = 'Introduce algo';
  } else if (inputNumberValue > randomNumber) {
    feedbackEl.innerHTML = 'Demasiado alto';
  } else if (inputNumberValue < randomNumber) {
    feedbackEl.innerHTML = 'Demasiado bajo';
  }
}

let counter = 0;
const showCounter = () => {
  counter += 1;
  counterEl.innerHTML = counter;
};

btn.addEventListener('click', handleBtn);
