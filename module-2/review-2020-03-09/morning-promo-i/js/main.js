'use strict';

const btn = document.querySelector('.js-update');
const selectFace = document.querySelector('.js-select-face');
const face = document.querySelector('.js-face');
const container = document.querySelector('.js-container');

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function updateAll() {
  updateFace();
  updateBackground();
}

function updateFace() {
  const selectFaceValue = selectFace.value;
  face.innerHTML = selectFaceValue;
  // face.innerHTML = selectFace.value;
}

function updateBackground() {
  const randomNumber = getRandomNumber();
  if (randomNumber % 2 === 0) {
    container.classList.add('correct-yellow-color');
  } else {
    container.classList.remove('correct-yellow-color');
  }
}

// function updateBackground() {
//   const randomNumber = getRandomNumber();
//   if (randomNumber % 2 === 0) {
//     container.classList.add('correct-yellow-color');
//     container.classList.remove('chilean-fire-color');
//   } else {
//     container.classList.add('chilean-fire-color');
//     container.classList.remove('correct-yellow-color');
//   }
//   console.log(randomNumber);
// }

// function updateBackground() {
//   const randomNumber = getRandomNumber();
//   container.classList.remove('chilean-fire-color');
//   container.classList.remove('correct-yellow-color');
//   if (randomNumber % 2 === 0) {
//     container.classList.add('correct-yellow-color');
//   } else {
//     container.classList.add('chilean-fire-color');
//   }
//   console.log(randomNumber);
// }

btn.addEventListener('click', updateAll);
