'use strict';

const listElem = document.querySelector('#list');

//creo dos arrays distintos que más adelante le pasaré a la función cuando la ejecute
const friends = ['Laura','Irene','Celia'];
const enemies = ['Paco','Javascript','Antonio'];

//escribo/defino la función que va a dedicarse a pintar esos arrays, recuerdo que lo que meto en los parénetesis es un simple nombre
//que representa el tipo de dato que va a recibir la función
//antes de escribir la función YO YA SE que lo que voy a manejar dentro de ella es un array por eso uedo hacer un for
//sobre o que me entra, es decir cuando escribo una función es para hacer algo concreto y sé que el parámetro que voy a recibir
//en los paréntesis VALE POR UN ARRAY pero no tomará su valor hasta que no EJECUTE LA FUNCIÓN más abajo
function paintNames(arrNames){
  //esta función describe las insctrucciones para pintar elementos de un array que recibo por parámetro
  //como se que lo que voy a recibir es un array hago un for para recorrerlo
  //por cada vuelta de mi for cada item--> (nombre que yo le he puesto por que sí a una variable que representa cada uno de los elementos de mi array)
  //pinto un nombre
  for(let item of arrNames){

    //con el manejo avanzado de DOM primero creo lógicamente los elementos con createElement
    const li = document.createElement('li');
    const span = document.createElement('span');

    //después añado un nodo de texto a aquellos elementos que vayan a contener texto, en este caso nuestro span
    const spanContent = document.createTextNode(item);

    //a continuación creo los atributos que necesito mediante setAttribute
    span.setAttribute('class','my-class');
    span.setAttribute('data-info','my-data');

    //por último incrusto cada elemento en su contenedor de dentro hacia fuera, primero el más profundo
    //hasta que pinto el más exterior
    span.appendChild(spanContent);
    li.appendChild(span);
    listElem.appendChild(li);

    console.log(span);
    console.log(span.dataset['info']);
  //listElem.innerHTML += `<li><span class="span-class">${item}</span></li>` --> esta es la manera anterior en la que pintaría todos los li

    addListeners();
  }
}

function sayName(evt){
  console.log(evt.currentTarget.innerHTML)
}

function addListeners(){
  const listElem = document.querySelectorAll('span');
  for(let item of listElem){
    item.addEventListener('click',sayName)
  }
}

paintNames(friends);
paintNames(enemies)

