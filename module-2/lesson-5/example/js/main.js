/* eslint-disable no-console */
'use strict';

const paragraph = document.querySelector('.js-paragraph');

const handleParagraphClick = ev => {
  console.log('El párrafo ha sido pulsado');
  console.log('El parrafo pulsado ha sido', ev.currentTarget);
  console.log('Haz click derecho sobre este elemento ', ev.currentTarget, ' y pulsa "Reveal in Elements panel"');
};

paragraph.addEventListener('click', handleParagraphClick);
