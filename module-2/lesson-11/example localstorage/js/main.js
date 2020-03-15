'use strict';

const form = document.querySelector('.js-form');
const nameInput = document.querySelector('.js-name');
const surnameInput = document.querySelector('.js-surname');

const getFromLocalStorage = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  if (userData !== null) {
    nameInput.value = userData.name;
    surnameInput.value = userData.surname;
  }
};

const handleInput = () => {
  const data = {
    name: nameInput.value,
    surname: surnameInput.value
  };
  localStorage.setItem('userData', JSON.stringify(data));
};

form.addEventListener('keyup', handleInput);

getFromLocalStorage();