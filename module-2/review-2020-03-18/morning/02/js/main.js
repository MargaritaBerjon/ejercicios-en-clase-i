'use strict';

let products = [];
let cart = [];

// get data from api

function getDataApi() {
  fetch('./api/data.json') // seasson-02/01/ video 01
    .then(response => response.json())
    .then(data => {
      // quedarme con los datos que me interesan y limpiar los datos
      products = data.cart.items;
      // pinto aquí los productos, ahora que por fin los tengo
      paintProducts();
    });
}

// paint products

const productsElement = document.querySelector('.js-products');

const paintProducts = () => {
  let productsCode = '';
  for (const product of products) {
    if (product.price % 2 === 0) {
      productsCode += `<article class="card featured">`;
    } else {
      productsCode += `<article class="card">`;
    }
    productsCode += `  <img src="${product.imageUrl}" class="card__img" alt="Producto: ${product.name}">`;
    productsCode += `  <h3 class="card__title">${product.name}</h3>`;
    productsCode += `  <p class="card__description">${product.price} €</p>`;
    productsCode += `  <button class="js-add-btn card__btn" id="${product.id}">Añadir a la cesta</button>`;
    productsCode += `</article>`;
  }
  productsElement.innerHTML = productsCode;
  listenAddProductsBtns();
};

// listen products

function addProduct(ev) {
  // obtener el id producto del producto clickado
  const clickedId = ev.target.id;
  // buscar el producto en la cesta
  let foundAddedProduct = undefined;
  for (const cartItem of cart) {
    if (cartItem.id === clickedId) {
      // si lo encontramos el foundCardItem no es undefined, es el producto de la cesta encontrado
      foundAddedProduct = cartItem;
    }
  }
  // compruebo si ya está en la cesta
  if (foundAddedProduct === undefined) {
    // OPCIÓN A: no está en la cesta
    // obtener el producto clickado
    let foundProduct = {};
    for (const product of products) {
      if (product.id === clickedId) {
        // si lo encontramos el foundProduct no es undefined, es el producto encontrado
        foundProduct = product;
      }
    }
    // lo añadimos al array cart
    const newCartItem = {
      name: foundProduct.name,
      price: foundProduct.price,
      id: foundProduct.id,
      quantity: 1
    };
    cart.push(newCartItem);
  } else {
    // OPCIÓN B: sí está en la cesta
    // incremento su cantidad
    foundAddedProduct.quantity += 1;
  }
  paintCartItems();
}

const listenAddProductsBtns = () => {
  const productsBtns = document.querySelectorAll('.js-add-btn');
  for (const productBtn of productsBtns) {
    productBtn.addEventListener('click', addProduct);
  }
};

// paint cart items

const cartElement = document.querySelector('.js-cart');

const paintCartItems = () => {
  cartElement.innerHTML = '';
  for (const item of cart) {
    let htmlCode = '';
    htmlCode += `<tr>`;
    htmlCode += `  <td>${item.name}</td>`;
    htmlCode += `  <td>${item.price}</td>`;
    htmlCode += `  <td>`;
    htmlCode += `    <button class="js-dec-btn card__btn">-</button>`;
    htmlCode += `    ${item.quantity}`;
    htmlCode += `    <button class="js-inc-btn card__btn">+</button>`;
    htmlCode += `  </td>`;
    htmlCode += `  <td class="text-align-right">${item.price * item.quantity}€</td>`;
    htmlCode += `</tr>`;
    cartElement.innerHTML += htmlCode;
  }
};

// start app

getDataApi();
