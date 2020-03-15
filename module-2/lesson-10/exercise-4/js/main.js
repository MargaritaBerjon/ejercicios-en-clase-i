'use strict';

// 3 formas de hacer lo mismo

fetch('https://api.github.com/orgs/Adalab')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    fetch(data.repos_url)
      .then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(function(data) {
        console.log(data);
      });
  });

fetch('https://api.github.com/orgs/Adalab')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    return fetch(data.repos_url);
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });

fetch('https://api.github.com/orgs/Adalab')
  .then(response => response.json())
  .then(data => fetch(data.repos_url))
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
