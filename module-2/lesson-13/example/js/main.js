'use strict';

const items = [1, 2, 3, 4, 6, 9, 12, 45, 76, 87];

function isEven(item) {
  console.log(item);
  if (item % 2 === 0) {
    return true;
  } else {
    return false;
  }
  return item % 2 === 0 ? true : false;
  return item % 2 === 0;
}

// js desde el navegador

const result0 = items.filter(isEven);

console.log(result0);

// mi

const result1 = [];

for (const item of items) {
  if (isEven(item) === true) {
    result1.push(item);
  }
}

console.log(result1);
