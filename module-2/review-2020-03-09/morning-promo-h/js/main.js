/* eslint-disable no-console */
'use strict';

const button = document.querySelector('.js-button');
const container = document.querySelector('.js-container');

const select = document.querySelector('.js-select');
const face = document.querySelector('.js-face');

const generateRandomNumber = function(max) {
  return parseInt(Math.random() * max);
  // return Math.floor(Math.random() * 100);
};

const setBackgroundClassname = function(randomNumber) {
  if (randomNumber % 2 === 0) {
    container.classList.remove('chilean-fire-color');
    container.classList.add('correct-yellow-color');
  } else {
    container.classList.remove('correct-yellow-color');
    container.classList.add('chilean-fire-color');
  }
};

const changeBackground = function() {
  const randomNumber = generateRandomNumber(100);
  setBackgroundClassname(randomNumber);
};

const updateFace = function() {
  const value = select.value;
  face.innerHTML = value;
};

const handleButton = function() {
  changeBackground();
  updateFace();
};

button.addEventListener('click', handleButton);
