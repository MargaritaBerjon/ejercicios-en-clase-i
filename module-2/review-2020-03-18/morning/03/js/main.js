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
  // buscar el producto en la cesta para saber si tengo que añadirlo o incrementarlo
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
  setInLocalStorage();
  paintCartItems();
}

const decProduct = ev => {
  const clickedId = ev.target.id;
  // buscar el producto en la cesta para saber si tengo que añadirlo o incrementarlo
  let foundAddedProduct = undefined;
  for (const cartItem of cart) {
    if (cartItem.id === clickedId) {
      // si lo encontramos el foundCardItem no es undefined, es el producto de la cesta encontrado
      foundAddedProduct = cartItem;
    }
  }

  if (foundAddedProduct.quantity === 1) {
    // OPCIÓN A: elimino el producto de la cesta
    let indexToDelete = 0;
    for (let index = 0; index < cart.length; index++) {
      if (cart[index].id === clickedId) {
        // si lo encontramos el foundCardItem no es undefined, es el producto de la cesta encontrado
        indexToDelete = index;
      }
    }
    console.log(indexToDelete);
    // borramos el producto de la cesta
    cart.splice(indexToDelete, 1);
  } else {
    // OPCIÓN B: decremento las unidades
    foundAddedProduct.quantity -= 1;
  }

  setInLocalStorage();
  paintCartItems();
};

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
    htmlCode += `    <button class="js-dec-btn card__btn" id="${item.id}">-</button>`;
    htmlCode += `    ${item.quantity}`;
    htmlCode += `    <button class="js-inc-btn card__btn" id="${item.id}">+</button>`;
    htmlCode += `  </td>`;
    htmlCode += `  <td class="text-align-right">${item.price * item.quantity}€</td>`;
    htmlCode += `</tr>`;
    cartElement.innerHTML += htmlCode;
  }

  // calculo el total
  // let total = 0;
  // for (const item of cart) {
  //   total += item.price * item.quantity;
  // }
  const totalPrice = cart.reduce(function(total, item) {
    return total + item.price * item.quantity;
  }, 0);
  let totalCode = '';
  totalCode += `<tr class="text--bold">`;
  totalCode += `  <td colspan="3">Total:</td>`;
  totalCode += `  <td class="text-align-right">${totalPrice}€</td>`;
  totalCode += `</tr>`;
  cartElement.innerHTML += totalCode;
  // escucho los botones
  listenCartProductsBtns();
};

const listenCartProductsBtns = () => {
  const incBtns = document.querySelectorAll('.js-inc-btn');
  for (const productBtn of incBtns) {
    productBtn.addEventListener('click', addProduct);
  }
  const decBtns = document.querySelectorAll('.js-dec-btn');
  for (const productBtn of decBtns) {
    productBtn.addEventListener('click', decProduct);
  }
};

// local storage

const setInLocalStorage = () => {
  const cartInString = JSON.stringify(cart);
  localStorage.setItem('cart', cartInString);
};

const getFromLocalStorage = () => {
  const cartInString = localStorage.getItem('cart');
  if (cartInString !== null) {
    cart = JSON.parse(cartInString);
    paintCartItems();
  } else {
    // console.log('Es mi primerita visita a la página');
  }
};

// start app

getDataApi();
getFromLocalStorage();
