'use strict';

//localstorage permite alamacenar datos en el navegador, esto por ejemplo lo ves a menudo en amazon (los productos recientes que has visto)
//cuando almacena una web tus datos de un carrito
//nos permite cachear información en nuestro navegador y acceder a ella rápidamente

//localstorage solo almacena datos primitivos por eso cada vez que guardamos en él tenemos que utilizar el me´todo JSON.stringify
//cuando queremos recuperar esos datos por ejemplo para pintar de nuevo un array leído desde local tengo que volver a parsear los datos con JSON.parse
//para devolverlos a su estado original

const listElem = document.querySelector('#list');
const pElem = document.querySelector('#local-data');

const friends = ['Laura','Irene','Celia'];
const savedFriends = [];


function paintNames(arr){
  for(let item of arr){
    listElem.innerHTML += `<li>${item}</li>`;
    addListeners();
  }
}


function addListeners(){
  const listElem = document.querySelectorAll('li');
  for(let item of listElem){
    item.addEventListener('click',saveLocal)
  }
}


function saveLocal(evt){
  //hago push a mi array de amigos
  savedFriends.push(evt.currentTarget.innerHTML)
  //antes de guardarlo en local lo paso por el método stringify
  localStorage.setItem('savedFriends', JSON.stringify(savedFriends));
  console.log(localStorage.getItem('savedFriends'))
}


function renderLocal(){
  //para volver a pintar mis datos necesito parsear lo que obtengo de local
  const arrFromLocal = JSON.parse(localStorage.getItem('savedFriends'));
  pElem.innerHTML = arrFromLocal
}

paintNames(friends);
renderLocal();

