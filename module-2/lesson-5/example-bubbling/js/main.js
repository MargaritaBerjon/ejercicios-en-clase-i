/* eslint-disable no-console */
'use strict';

const main = document.querySelector('.js-main');
const section = document.querySelector('.js-section');
const paragraph = document.querySelector('.js-paragraph');
const link = document.querySelector('.js-link');

const handleElementClick = ev => {
  console.log(`El elemento pulsado es ${ev.target.tagName} y el escuchado es ${ev.currentTarget.tagName}`);
  ev.preventDefault();
};

// cambia el orden de las siguientes 4 líneas y verás que el código mostrado en la consola es el mismo
// esto es por que los listeners se ejecutan en el orden de los elementos html: a, p, section y main...
main.addEventListener('click', handleElementClick);
link.addEventListener('click', handleElementClick);
paragraph.addEventListener('click', handleElementClick);
section.addEventListener('click', handleElementClick);
