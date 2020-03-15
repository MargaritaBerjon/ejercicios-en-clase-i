'use strict';

let breeds;

fetch('https://dog.ceo/api/breeds/list/all')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    breeds = data.message.terrier;
    const url = 'https://api.rand.fun/number/integer?max=' + (data.message.terrier.length - 1);
    console.log(url);
    return fetch(url);
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // console.log(breeds, data.result);
    console.log(breeds, data.result, breeds[data.result]);
  });
