/* eslint-disable no-console */
'use strict';

console.log('Pido datos a un servidor');

fetch('./server-data/perretes.json')
  .then(() => {
    return 1;
  })
  .then(data => {
    console.log('Pinto los datos que recibo:', data);
    return 2;
  })
  .then((info, foo) => {
    // como el then anterior solo puede devolver un dato en el return
    // este then solo puede recibir un dato por parámetros
    // por eso foo, que es el segundo parámetro, es undefined
    console.log('Pinto los datos que recibo:', info, foo);
    return 3;
  })
  .then(data => {
    console.log('Pinto los datos que recibo:', data);
    return 'Hola MC';
  })
  .then(info => {
    console.log('Pinto los datos que recibo:', info);
    return true;
  })
  .then(data => {
    console.log('Pinto los datos que recibo:', data);
  });

console.log('Continuo haciendo cosas');
