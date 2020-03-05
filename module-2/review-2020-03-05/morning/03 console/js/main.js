'use strict';

const age = 19;
const title = document.querySelector('.js-title');

if (age >= 18) {
  console.log(document.body.innerHTML);
  document.body.innerHTML = 'Nos vamos de fiesta';
  console.log(document.body.innerHTML);
} else {
  console.log('Entro por else');
  document.body.innerHTML = 'Nos vamos al parque';
}

// console.log(title, title.classList, title.innerHTML);
// console.dir(title);
