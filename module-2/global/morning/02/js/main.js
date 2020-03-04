'use strict';

// data

const product1Name = 'Node JS';
const product1Price = '12,00';
const product1ImageUrl = './images/node-js.jpg';
let product1Quantity = 1;

const product2Name = 'JavaScript';
const product2Price = '15,00';
const product2ImageUrl = './images/javascript.jpg';
let product2Quantity = 1;

const product3Name = 'React JS';
const product3Price = '13,00';
const product3ImageUrl = './images/react.jpg';
let product3Quantity = 1;

// products

const productsElement = document.querySelector('.js-products');

function getProductHtmlCode(name, price, imageUrl) {
  let htmlCode = `<article class="card">`;
  htmlCode += `  <img src="${imageUrl}" class="card__img" alt="Camiseta de ${name}">`;
  htmlCode += `  <h3 class="card__title">${name}</h3>`;
  htmlCode += `  <p class="card__description">${price} €</p>`;
  htmlCode += `  <button class="card__btn">Añadir a la cesta</button>`;
  htmlCode += `</article>`;
  return htmlCode;
}

function paintProducts() {
  const product1 = getProductHtmlCode(product1Name, product1Price, product1ImageUrl);
  const product2 = getProductHtmlCode(product2Name, product2Price, product2ImageUrl);
  const product3 = getProductHtmlCode(product3Name, product3Price, product3ImageUrl);
  productsElement.innerHTML = product1 + product2 + product3;
}

paintProducts();

// cart

const cartElement = document.querySelector('.js-cart');

function getCartItemHtmlCode(name, price, quantity) {
  let htmlCode = `<tr>`;
  htmlCode += `  <td>${name}</td>`;
  htmlCode += `  <td>${price}</td>`;
  htmlCode += `  <td>`;
  htmlCode += `    <button class="card__btn">-</button>`;
  htmlCode += `    ${quantity}`;
  htmlCode += `    <button class="card__btn">+</button>`;
  htmlCode += `  </td>`;
  // el precio total lo calcularemos luego
  htmlCode += `  <td class="text-align-right">30,00€</td>`;
  htmlCode += `</tr>`;
  return htmlCode;
}

function getCartTotalHtmlCode() {
  let htmlCode = `<tr class="text--bold">`;
  htmlCode += `  <td>Total</td>`;
  // el precio total lo calcularemos luego
  htmlCode += `  <td colspan="3" class="text-align-right">66,00€</td>`;
  htmlCode += `</tr>`;
  return htmlCode;
}

function paintCartItems() {
  const item1 = getCartItemHtmlCode(product1Name, product1Price, product1Quantity);
  const item2 = getCartItemHtmlCode(product2Name, product2Price, product2Quantity);
  const item3 = getCartItemHtmlCode(product3Name, product3Price, product3Quantity);
  const total = getCartTotalHtmlCode();
  cartElement.innerHTML = item1 + item2 + item3 + total;
}

paintCartItems();
