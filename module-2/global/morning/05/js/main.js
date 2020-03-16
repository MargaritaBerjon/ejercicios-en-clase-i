'use strict';

// data

const products = [
  {
    name: 'Node JS',
    price: 12,
    imageUrl: './images/node-js.jpg',
    quantity: 1,
    incQuantity: incQuantity,
    decQuantity: decQuantity
  },
  {
    name: 'JavaScript',
    price: 15,
    imageUrl: './images/javascript.jpg',
    quantity: 1,
    incQuantity: incQuantity,
    decQuantity: decQuantity
  },
  {
    name: 'React JS',
    price: 13,
    imageUrl: './images/react.jpg',
    quantity: 1,
    incQuantity: incQuantity,
    decQuantity: decQuantity
  }
];

// product objects methods

function incQuantity() {
  this.quantity += 1;
}

function decQuantity() {
  if (this.quantity > 0) {
    this.quantity -= 1;
  }
}

// paint products

const productsElement = document.querySelector('.js-products');

function getProductHtmlCode(product) {
  let htmlCode = '';
  htmlCode += `<article class="card">`;
  htmlCode += `  <img src="${product.imageUrl}" class="card__img" alt="Producto: ${product.name}">`;
  htmlCode += `  <h3 class="card__title">${product.name}</h3>`;
  htmlCode += `  <p class="card__description">${product.price} €</p>`;
  htmlCode += `  <button class="card__btn">Añadir a la cesta</button>`;
  htmlCode += `</article>`;
  return htmlCode;
}

function paintProducts() {
  let productsCode = '';
  for (const product of products) {
    productsCode += getProductHtmlCode(product);
  }
  productsElement.innerHTML = productsCode;
}

paintProducts();

// paint cart items

const cartElement = document.querySelector('.js-cart');

function getCartItemHtmlCode(product) {
  let htmlCode = '';
  htmlCode += `<tr>`;
  htmlCode += `  <td>${product.name}</td>`;
  htmlCode += `  <td>${product.price}</td>`;
  htmlCode += `  <td>`;
  htmlCode += `    <button class="js-dec-btn card__btn">-</button>`;
  htmlCode += `    ${product.quantity}`;
  htmlCode += `    <button class="js-inc-btn card__btn">+</button>`;
  htmlCode += `  </td>`;
  htmlCode += `  <td class="text-align-right">${product.price * product.quantity}€</td>`;
  htmlCode += `</tr>`;
  return htmlCode;
}

function getCartTotalHtmlCode() {
  let htmlCode = '';
  htmlCode += `<tr class="text--bold">`;
  htmlCode += `  <td>Total</td>`;
  // en capítulos anteriores: calculamos así el precio total
  htmlCode += `  <td colspan="3" class="text-align-right">${getTotalPrice()}€</td>`;
  htmlCode += `</tr>`;
  return htmlCode;
}

function paintCartItems() {
  cartElement.innerHTML = '';
  // en capítulos anteriores: lo he vuelto a poner en orden ascendente
  for (let i = 0; i < products.length; i += 1) {
    cartElement.innerHTML += getCartItemHtmlCode(products[i]);
  }
  cartElement.innerHTML += getCartTotalHtmlCode();
  listenCartBtns();
}

function getTotalPrice() {
  // en capítulos anteriores: calculamos así el precio total
  let total = 0;
  for (const product of products) {
    total += product.price;
  }
  return total;
}

paintCartItems();

// listen events

function handleQuantityBtn(ev) {
  const currentTarget = ev.currentTarget;
  if (currentTarget.classList.contains('js-inc-btn')) {
    products[0].incQuantity();
    // en capítulos anteriores: product1 ya no existe, ahora es products[0]
    // product1.incQuantity();
  } else if (currentTarget.classList.contains('js-dec-btn')) {
    // en capítulos anteriores: product1 ya no existe, ahora es products[0]
    // product1.decQuantity();
    products[0].decQuantity();
  }
  paintCartItems();
}

function listenCartBtns() {
  // usar querySelectorAll para todos los botones
  const incBtn = document.querySelector('.js-inc-btn');
  incBtn.addEventListener('click', handleQuantityBtn);
  const decBtn = document.querySelector('.js-dec-btn');
  decBtn.addEventListener('click', handleQuantityBtn);
}

// address

const userAddress = {};

const address = document.querySelector('.js-address');
const city = document.querySelector('.js-city');
const zip = document.querySelector('.js-zip');

function handleAddress(ev) {
  const name = ev.currentTarget.name;
  userAddress[name] = ev.currentTarget.value;
  paintAddress();
}

function paintAddress() {
  const addressInfo = document.querySelector('.js-address-info');
  addressInfo.innerHTML = `${userAddress.address || ''} ${userAddress.city || ''} ${userAddress.zip || ''}`;
}

address.addEventListener('keyup', handleAddress);
city.addEventListener('keyup', handleAddress);
zip.addEventListener('keyup', handleAddress);
