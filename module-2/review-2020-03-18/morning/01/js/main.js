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
  // obtener el producto clickado
  let foundProduct = {};
  for (const product of products) {
    console.log(product.id, clickedId);
    if (product.id === clickedId) {
      foundProduct = product;
    }
  }
  console.log(foundProduct);
  // añadirlo a el array cart
  // cart.push(foundProduct);
  cart.push({
    name: foundProduct.name,
    price: foundProduct.price,
    id: foundProduct.id,
    quantity: 1
  });
  console.log(cart);
}

const listenAddProductsBtns = () => {
  const productsBtns = document.querySelectorAll('.js-add-btn');
  for (const productBtn of productsBtns) {
    productBtn.addEventListener('click', addProduct);
  }
};

// start app

getDataApi();
