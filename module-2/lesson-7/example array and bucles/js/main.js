/* eslint-disable no-console */
'use strict';

const students = ['Maria del Carmen', 'Chiquito de la Calzada', 'Ramón de Pitis'];

let info;
let i;

for (const student of students) {
  info = `Student: ${student}`;
  console.log(info);
}
console.log('--------------');

for (i = 0; i < 3; i = i + 1) {
  info = `Student #${i + 1}: ${students[i]}`;
  console.log(info);
}
console.log('--------------');

for (i = 2; i >= 0; i = i - 1) {
  info = `Student #${i}: ${students[i]}`;
  console.log(info);
}
console.log('--------------');

for (i = 0; i < 3; i = i + 2) {
  info = `Student #${i}: ${students[i]}`;
  console.log(info);
}
console.log('--------------');

for (i = 10; i < 3; i = i + 1) {
  info = `Student #${i}: ${students[i]}`;
  console.log(info);
}
console.log('--------------');

for (i = 0; i < students.length; i = i + 1) {
  info = `Student #${i}: ${students[i]}`;
  console.log(info);
}
console.log('--------------');

for (i = 0; i < students.length; i = i + 1) {
  // split coge un string devuelve un array separado por espacios (porque el segundo parámetro es un espacio)
  let words = students[i].split(' ');
  console.log('Student: ' + students[i]);
  for (let word = 0; word < words.length; word = word + 1) {
    info = 'Word #' + word + ' of: ' + students[i] + ' is: ' + words[word];
    console.log(info);
  }
}
