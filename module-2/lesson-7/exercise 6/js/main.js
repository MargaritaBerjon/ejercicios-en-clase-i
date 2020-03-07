'use strict';

const getBooks = function(ev) {
  ev.preventDefault();
  const books = [];
  const book1 = document.querySelector('.js-book1');
  const book2 = document.querySelector('.js-book2');
  books[0] = book1.value;
  books[1] = book2.value;

  for (const book of books) {
    // eslint-disable-next-line no-console
    console.log(`¡A mí también me encantó "${book}"!`);
  }
};

const button = document.querySelector('.js-button');

button.addEventListener('click', getBooks);
