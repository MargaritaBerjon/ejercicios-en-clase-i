'use strict';

// form
// function handleForm(ev) {
//   ev.preventDefault();
// }
// formEl.addEventListener('submit', handleForm);

// input
const formEl = document.querySelector('.js-form');
// const inputEl = document.querySelector('.js-input');
function handleInput(ev) {
  console.log('Quién lanza el evento', ev.target);
  console.log('Quién escucha el evento', ev.currentTarget);
}
// inputEl.addEventListener('keyup', handleInput);
formEl.addEventListener('keyup', handleInput);
