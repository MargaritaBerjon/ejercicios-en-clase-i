'use strict';

const firstTaskElement = document.querySelector('.js-task');
console.log(firstTaskElement);
// firstTaskElement.innerHTML += ': foo';

const taskElements = document.querySelectorAll('.js-task');

console.log(taskElements);

for (const taskElement of taskElements) {
  taskElement.innerHTML += ': foo';
}

function handleItemClick(ev) {
  console.log(ev.target);
  ev.target.innerHTML += ': faa';
}

for (const taskElement of taskElements) {
  console.log(taskElement);
  taskElement.addEventListener('click', handleItemClick);
}
