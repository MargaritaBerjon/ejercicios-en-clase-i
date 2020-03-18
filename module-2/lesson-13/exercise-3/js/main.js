'use strict';

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false }
];

const result = users
  .filter(function(user) {
    return user.isPremium;
  })
  .map(function(user) {
    return 'Hola ' + user.name;
  });

// const result = users.map(function(user) {
//   return 'Hola ' + user.name;
// });

// const result = users
//   .map(function(user) {
//     return 'Hola ' + user.name;
//   })
//   .filter(function(user) {
//     console.log(user);
//     return user.includes('Ro');
//   });

console.log(result);
