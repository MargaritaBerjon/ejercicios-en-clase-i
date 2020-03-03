'use strict';

let someText = '';
let otherText = 'tengo texto'

// console.log (someText === false)
// console.log('2' === 2)

// console.log(someText && otherText)

console.time('temp1');

const myFunc = () => {
  if (someText) {
    console.log('tengo texto soy true')
  } else {
    console.log('no tengo soy false')
  }  
}

myFunc();

console.timeEnd('temp1');


//

console.time('temp2');

const myFunc2 = () => console.log(someText ? 'tengo texto soy true' : 'no tengo soy false')

myFunc2();

console.timeEnd('temp2');



