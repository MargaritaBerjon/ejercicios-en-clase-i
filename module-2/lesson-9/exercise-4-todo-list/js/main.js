'use strict';

/*
  Explicación de este ejercicio:
  Cuando la usuaria clicke en un checkbox voy a:
    1. Leer el checkbox clickado en la función handleCheckbox
    2. Guardar si está checkeado o no en el array tasks
    3. Repintar todas las tareas dentro del UL en la función paintTasks
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
    completed: true
  },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
];

const ulElement = document.querySelector('.js-list');

// Función que pinta todas las tareas en el HTML
function paintTasks() {
  let className;
  let checked;
  let htmlCode = '';
  // Repito este for para cada elemento de tasks y guardo el código html en htmlCode
  for (let i = 0; i < tasks.length; i += 1) {
    // Calculo className y checked para cada elemento de tasks
    if (tasks[i].completed) {
      className = 'through';
      checked = 'checked';
    } else {
      className = '';
      checked = '';
    }
    // Genero el código html del LI para cada elemento de tasks
    htmlCode += `<li class="${className}">`;
    // Uso la propiedad value para identificar de manera única cada checkbox
    // Esta propiedad value es la que me va a ayudar en el futuro a saber qué checkbox ha sido clickado
    // Para más info mirar la función handleCheckbox
    htmlCode += `<input type="checkbox" ${checked} class="js-checkbox" value="${i}" />`;
    htmlCode += `${tasks[i].name}</li>`;
  }
  // Machacho el contenido del UL con el htmlCode que he generado
  ulElement.innerHTML = htmlCode;
}

// Función que escucha un evento change de un checkbox, actualiza el array tasks y repinta el HTML
function handleCheckbox(ev) {
  // Obtengo el valor del checkbox que al ser 0, 1, 2... lo puedo usar como índice del array
  // Para saber de dónde sale este índice mirar la función paintTasks
  // Para más info mirar el código html en DevTools
  const inputValue = parseInt(ev.target.value);
  // Uso inputValue como índice para el array tasks y...
  // Lo sobre escribo con su mismo valor pero negado
  tasks[inputValue].completed = !tasks[inputValue].completed;
  // Una vez que he modificado los datos de tasks las repinto en el HTML y vuelvo a escuchar los eventos
  udpateAll();
}

// Función que crea los escuchadores sobre los checkbox
function listenCheckboxEvents() {
  // Obtengo todos los checkbox que haya en este momento en el html
  const checkboxElements = document.querySelectorAll('.js-checkbox');
  for (let i = 0; i < checkboxElements.length; i += 1) {
    // Los recorro añadiendo un escuchador
    checkboxElements[i].addEventListener('change', handleCheckbox);
  }
}

// reset

const resetElement = document.querySelector('.js-reset');

// Función que pone todos las tasks a no completadas
function reset(ev) {
  ev.preventDefault();
  // Pongo todos los tasks[x].completed = false para marcar todas como no completadas
  for (const task of tasks) {
    task.completed = false;
  }
  // Una vez que he modificado los datos de tasks las repinto en el HTML y vuelvo a escuchar los eventos
  udpateAll();
}

resetElement.addEventListener('click', reset);

// start app

// Función que lo hace todo
// Esta función la ejecutamos después de modificar el array tasks. Mirar las funciones handleCheckbox y reset.
function udpateAll() {
  // Pintamos las tasks en el HTML
  paintTasks();
  // Escuchamos eventos sobre las tasks que acabamos de pintar en el HTML
  listenCheckboxEvents();
}

// Arrancamos la web pintando y escuchando las tasks
udpateAll();

//PD: Cuando estemos en un trabajo de verdad todos comentarios de código los pondremos en inglés.

//PD2: Refuerzo positivo >>> ;)
