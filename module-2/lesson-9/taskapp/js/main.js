'use strict';

//Creo un array vacío que va a ser con el que trabaje todo el rato
//llenaré y vaciaré de tareas
const taskList = [];

//PASO 1 ------->  Accedo a los elementos
//Solo puedo acceder a aquellos elementos que de partida estén en mi DOM
//aquellos generados dinámicamente no existen al principio así que no puedo acceder a ellos
const elementButton = document.querySelector('#new-task-button');
const elementInput = document.querySelector('#new-task-input');
const elementUlList = document.querySelector('#list-container');
//////

//PASO 3----> Mi manejador ejecuta 1 función createNewTask, que se encarga de enviar la tarea que hemos añadido
function addNewTaskHandler(){
  createNewTask();
  console.log(taskList);
}
//////

//PASO 4 A---> createNewTask valida mi input, ya que siempre que enviamos datos por un input debemos contemplar que estos vengan correctamente o mi input no venga vacío
const createNewTask = () => {
  //si mi input no viene vacío, es decir, su longitud es distinta de 0, entonces añado su input.value al array vacío con push y ejecuto la función addLiElement para pintar mi elemento en el HTML, en caso contrario, es decir si me llega vacío lanzo un alert con un aviso
  if(elementInput.value !== ''){
    taskList.push(elementInput.value);
    addLiElement();
  } else{
    alert('introduce una tarea please')
  }
}

//PASO 4 B--->addLiElement pinta un li en el HTML con lo que le ha entrado por el input. ¿Qué hago para pintar un nuevo LI?
const addLiElement = () => {
  //creo el elemento LI
  const liElement = document.createElement('li');

  //le meto el contenido, es decir un span con lo que he escrito por el input y un botón que me servirá para borrar a tarea
  liElement.innerHTML = `<span>${elementInput.value}</span><button type='button' class='remove-task-button'>Borrar Tarea</button>`;

  //meto el LI dentro del UL
  elementUlList.appendChild(liElement);

  //una vez que he añadido el LI en el UL ya existe en el DOM puedo hacer un queryselectorAll para quedarme con todos los botones y asignarles el listener que escuchará el click para borrar la tarea
  const elementRemoveButtons = document.querySelectorAll('.remove-task-button');

  //recorro con un for los botones para asignarles el listener
  for (let elementRemoveButton of elementRemoveButtons){
    elementRemoveButton.addEventListener('click',removeTaskHandler)
  }
}


//PASO 5 ---> Borrar tarea
//el listener lo tiene el botón generado dinámicamente que borra las tareas
function removeTaskHandler(event) {
  //borro el li más cercano con closest (si quieres más info busca el método en la docu)
  event.currentTarget.parentElement.remove();

  //desde el botón que he pulsado (event.target), busco el hermano anterior (previousElementSibling) y me quedo con su innerHTML
  const elementSelected = event.currentTarget.previousElementSibling.innerHTML;

  //ahora busco la posición que ocupa en mi array para borrarlo, con indexOf busco el texto que he obtenido previamente en la variable anterior y se lo paso
  const indexOfElement = taskList.indexOf(elementSelected);

  //si el índice no me devuelve -1, el elemento existe en mi array
  if(indexOfElement !== -1){
    //borro el elemento, le digo el índice que he obtenido con indexOf, y que me borro solo un elemento
    taskList.splice(indexOfElement,1)
  }
  console.log(taskList);
}

//PASO 2 ------->  ¿?Quién escucha el evento CLICK? Mi botón Añadir tarea
elementButton.addEventListener('click',addNewTaskHandler);

