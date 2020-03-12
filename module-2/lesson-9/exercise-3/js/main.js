'use strict';

const lostNumbers = [4, 2, 15, 16, 23, 42];

const resultWithClassicFor = [];
let position;

for (position = 0; position < lostNumbers.length; position += 1) {
  // const number = lostNumbers[position];
  const rest = lostNumbers[position] % 2;
  const isEven = rest === 0;
  console.log('position', position, 'number', lostNumbers[position], 'rest', rest, 'isEven', isEven);
  if (isEven) {
    resultWithClassicFor.push(lostNumbers[position]);
  }
}

console.log('resultWithClassicFor', resultWithClassicFor);

const resultWithForOf = [];

for (const number of lostNumbers) {
  // const number = lostNumbers[position];
  const rest = number % 2;
  const isEven = rest === 0;
  console.log('number', number, 'rest', rest, 'isEven', isEven);
  if (isEven) {
    resultWithForOf.push(number);
  }
}

console.log('resultWithForOf', resultWithForOf);
