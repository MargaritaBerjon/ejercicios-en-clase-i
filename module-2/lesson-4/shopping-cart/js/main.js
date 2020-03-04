'use strict';

const elemWrapperCart = document.querySelector('#my-cart');
const addCartPotatoes = document.querySelector('#add-patatas');
const addCartSteaks = document.querySelector('#add-filetes');
const addCartPears = document.querySelector('#add-peras');

//defino una función que se queda con el valor de la etiqueta del carrito que es un 0 y le suma 1
function increaseProductQuantity() {
  //me quedo con el 0 y lo parseo para poder sumarle 1
  //sumo 1 y actualizo el valor de innerHTML
  let productQuantity = parseInt(elemWrapperCart.innerHTML);
  productQuantity = productQuantity + 1;
  elemWrapperCart.innerHTML = productQuantity;
}

//defino una función que muestre un modal con el nombre del producto que recibo como parámetro
function displayModal(product) {
  alert(`He añadido ${product} a mi cesta`)
}

//defino una función que se queda con el nombre del elemento sobre el que hago click
//mañana entenderemos de 
function getProductName(event) {
  return event.currentTarget.parentElement.id;
}

//defino la función que va a ejecutarse en el click
function addToCart() {
  //guardo en una variable el resultado de ejecutar getPorductName
  let productName = getProductName(event);
  //incremento en 1 la cantidad de productos
  increaseProductQuantity();
  //muestro el modal pasándole como argumento nuestra variable productName que contiene el nombre de nuestro producto
  displayModal(productName);
}


addCartPotatoes.addEventListener('click',addToCart);
addCartSteaks.addEventListener('click',addToCart);
addCartPears.addEventListener('click',addToCart);