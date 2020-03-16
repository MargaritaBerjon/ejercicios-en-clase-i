'use strict';

const itemEl = document.querySelector('.js-item');

function handleInput(ev) {
  console.log('Quién lanza el evento', ev.target);
  console.log('Quién escucha el evento', ev.currentTarget);
  ev.target.innerHTML = 'Completado';
}

itemEl.addEventListener('click', handleInput);
