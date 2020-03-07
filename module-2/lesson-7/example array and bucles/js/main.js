/* eslint-disable no-console */
'use strict';

const students = ['Duquesa de Alba Gutiérrez Fernández', 'Antonia Vázquez Suarez', 'Antonio Calderón Calabuig', 'Antonio Vicente Giménez', 'Carmen Delgado Pérez', 'Enrique Castillo García', 'Francisco Álvarez Pizarro', 'Isabel García Viejo', 'Juan José Rodríguez', 'Juan Martínez Mellado', 'Marina Rico Molina', 'María Carmen Casanova', 'María Carmen Lopera', 'María José Salvatierra', 'María Roldan Arias', 'Mercedes López García', 'Pablo Barranco Gonzálvez', 'Patricia García Bueno', 'Raúl Luque Jiménez', 'Víctor Díaz Sánchez'];

let info;
let i;

for (i = 0; i < 20; i = i + 1) {
  info = 'Student #' + (i + 1) + ': ' + students[i];
  console.log(info);
}
console.log('--------------');

for (const student of students) {
  info = 'Student' + ': ' + student;
  console.log(info);
}
console.log('--------------');

for (i = 19; i >= 0; i = i - 1) {
  info = 'Student #' + i + ': ' + students[i];
  console.log(info);
}
console.log('--------------');

for (i = 0; i < 20; i = i + 2) {
  info = 'Student #' + i + ': ' + students[i];
  console.log(info);
}
console.log('--------------');

for (i = 10; i < 20; i = i + 1) {
  info = 'Student #' + i + ': ' + students[i];
  console.log(info);
}
console.log('--------------');

for (i = 0; i < students.length; i = i + 1) {
  info = 'Student #' + i + ': ' + students[i];
  console.log(info);
}
console.log('--------------');

for (let i = 0; i < students.length; i = i + 1) {
  let words = students[i].split(' ');
  console.log('Student: ' + students[i]);
  for (let word = 0; word < words.length; word = word + 1) {
    info = 'Word #' + word + ' of: ' + students[i] + ' is: ' + words[word];
    console.log(info);
  }
}
