'use strict';

/*
  ENUNCIADO: Tengo una app con una lista de tareas;
  Si lo pienso tengo que:
  1----> pintar las tareas en base a un listado de objetos renderTasks()
  2---> Asignar listeners a cada checkbox listenCheckboxEvents()
  3----> Controlar el estado del checkbox para ver si ha sido clickado o no handleCheckbox()
  4----> resetear el estado de las tareas reset()
  5----> actualizar el estado de mi aplicación en función de todos los cambios ocurridos updateTasks();
*/

const tasks = [
  {
    name: 'Recoger setas en el campo',
    completed: true
  },
  {
    name: 'Comprar pilas',
    completed: true
  },
  {
    name: 'Poner una lavadora de blancos',
    completed: false
  },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
];


//Llamo a los actores
const ulElement = document.querySelector('#task-list');
const resetElement = document.querySelector('#task-reset');

// 1---> Función que pinta todas las tareas en el HTML, de partida creo tres variables que serán
// las que controlen el estado de poner o quitar la clase, lo necesito porque al iniciar algunas ya están tachadas
// en función de su estado completed true o completed false
function renderTasks() {
  let className;
  let checked;
  let elemHtml = '';

  //recorro con un for clásico (aquí no puedo hacerlo con un for of porque for of no acepta como argumento el index (i)) necesito ese
  //index para que sea un identificador único de cada checkbox y más adelante saber a quien tengo que cambiar la propiedad completed
  //al hacer click en él
  for (let i = 0; i < tasks.length; i++ ) {
    // para cada task si completed es true añado la clase line al elemento y cambio el atributo checked (este atributo es propio de los checkbox
    // y sirve para saber si está checkado o no), en caso contrario vacío la clase
    if (tasks[i].completed) {
      className = 'line';
      checked = 'checked';
    } else {
      className = '';
      checked = '';
    }
    // Creo el HTML que pintará la clase en función de si está checked o no, le asignará el estado del checked en función del objeto de mi array
    //y asignará un id con el index a cada chekbox (mira en console log) para saber que checkbox ha sido clickado por el id y relacionarlo
    //con la posición del array
    elemHtml += `<li class="${className}"><input type="checkbox" ${checked} class="js-checkbox" id="${i}" />${tasks[i].name}</li>`;
  }
  // Actualizo el html del ul fuera del bucle
  ulElement.innerHTML = elemHtml;
}

// 2--> Función que asigna los listener a los checkbox por medio de un querySelectorAll atiende al evento change (que detecta un cambio en el estado del elemento)
function listenCheckboxEvents() {
  const checkboxElements = document.querySelectorAll('.js-checkbox');
  for (let singleChekbox of checkboxElements) {
    singleChekbox.addEventListener('change', handleCheckbox);
  }
}

// 3---> Función que escucha que checkbox ha sido clickado
function handleCheckbox(evt) {
  console.log(evt.currentTarget.id)
  //guardo en una variable index el id del target porque tengo que relacionarlo por la posición con el objeto de mi array
  const index = evt.currentTarget.id;
  //accedo a la posición del objeto clickado llamado a mi array[indice] para posicionarme ne ese objeto y cambio el estado de la propiedad competed
  //es como hacer un toggle de completed, si el booleano completed está en en true lo paso a false y viceversa
  tasks[index].completed = !tasks[index].completed
  //una vez hecho esto llamo a la función que arranca la app
  updateTasks();
}


// 4----> Función resetea las tareas y pone todas las propiedades competed de mis obejtos en mi array task en false
function reset(evt) {
  evt.preventDefault();
  for (const task of tasks) {
    task.completed = false;
  }
//una vez actualizado el estado de task.completed tengo que volver a pintar las tareas para reflejas los cambios en el DOM
  updateTasks();
}

//esta función es la que manda y ejecuta las demás, pinta las tareas, y llama a la función que asigna los listeners
function updateTasks() {
  renderTasks();
  listenCheckboxEvents();
}

//inicio app, llamamos a esta función varias veces a lo largo de la app para actualizar el estado de las tareas en función de los cambios
updateTasks();


resetElement.addEventListener('click', reset);


