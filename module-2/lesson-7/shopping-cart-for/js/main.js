'use strict';

const button = document.querySelector('button');
const elementWrapperCart = document.querySelector('#my-cart');
const elementProductList = document.querySelector('#product-list');

//parto de un objeto con una lista (array) de productos (objetos) con nombre y precio
const products = [
  {
    name:'Peras',
    price:3
  },
  {
    name:'Filetes de ternera',
    price:9
  },
  {
    name:'Galletas Dinosaurios',
    price:2
  },
  {
    name:'Pizza barbacoa',
    price:2.5
  }
]

//por cada producto de mi array de productos voy a pintar un nuevo li con un span que incluya el valor de name y el valor de price en cada iteración del loop
for (const product of products) {
  elementProductList.innerHTML += `<li><span>${product.name} ${product.price}€</span></li>`
}


