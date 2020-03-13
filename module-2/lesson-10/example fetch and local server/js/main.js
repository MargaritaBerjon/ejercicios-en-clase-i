/* eslint-disable no-console */
'use strict';

const btnElement = document.querySelector('.js-btn');

const showLoading = () => {
  document.querySelector('.js-loading').classList.toggle('hidden', false);
};

const hideLoading = () => {
  document.querySelector('.js-loading').classList.toggle('hidden', true);
};

const ensureData = data => {
  // en esta funcion aseguro los datos, por si hay algún dato del servidor que no viene relleno
  data.name = data.name || 'Nombre desconocido';
  data.breed = data.breed || 'Raza desconocida';
  data.age = data.age || 'Edad desconocida';
  data.hasChip = data.hasChip || false;
  data.owner = data.owner || 'Dueña desconocida';
};

const printData = data => {
  document.querySelector('.js-name').innerHTML = data.name;
  document.querySelector('.js-breed').innerHTML = data.breed;
  document.querySelector('.js-age').innerHTML = data.age;
  document.querySelector('.js-has-chip').innerHTML = data.hasChip;
  document.querySelector('.js-owner').innerHTML = data.owner;
};

const printError = err => {
  console.error('Ha habido este error:', err);
};

const getDataFromServer = function(ev) {
  ev.preventDefault();
  showLoading();
  console.log('Pedimos los datos');
  fetch('./server-data/perretes.json')
    .then(response => {
      hideLoading();
      console.log(
        'El servidor contesta de forma asíncrona con la respuesta',
        response
      );
      const data = response.json();
      console.log(
        'Transformamos los datos a JSON y los retornamos para que los reciba el siguiente "then"',
        data
      );
      return data;
    })
    .then(data => {
      ensureData(data);
      printData(data);
    })
    .catch(err => {
      printError(err);
    });
  console.log(
    'Javascript sigue ejecutando las siguientes líneas (como esta) antes de ejecutar el fetch.'
  );
};

btnElement.addEventListener('click', getDataFromServer);
