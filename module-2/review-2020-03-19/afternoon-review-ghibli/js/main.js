'use strict';

const urlBase = 'https://ghibliapi.herokuapp.com/films';
const ulElem = document.querySelector('.movie-list');
const favElem = document.querySelector('.favourites');


let movieList = null;
const selectedMovies = readLocalStorage();

//Función que se trae los datos de la API, la ejecuto al inicio
//porque se debe cargar al principio
//siempre tener en cuenta que los datos se manipulan en el segundo then que es el que ha reseulto la promesa
function loadMovies(){
  fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => response.json())
    .then(data => {
      //guardo datos en constante preparada para ello
      //pinto pelis
      movieList = data;
      //pinto los datos
      renderMovies(movieList);
      //pinto los favoritos
      renderFavourites(selectedMovies);
    })
}

//función que pinta las películas que vienen de la API
//recorro el array que me llega de la API
//y pinto los elementos
function renderMovies(movieArr){
  for(let movie of movieArr){
    ulElem.innerHTML += `<li id=${movie.id}><p class='main-title'>${movie.title}</p><p>${movie.description}</p></li>`;
    addLiListeners();
  }
}

//añado los listeners a los botones
function addLiListeners(){
  const liList = document.querySelectorAll('.movie-list li');
  for(let li of liList) {
    li.addEventListener('click', selectMovie);
  }
}

//seteo localstorage
function setLocalStorage(){
  localStorage.setItem('movieInfo', JSON.stringify(selectedMovies))
}

//leo lacalstorage
function readLocalStorage(){
  //creo una variable que recogerá el valor de local si existe
  //en caso de que sí me devolverá esos datos
  //si no un array vacío
  let localInfo = JSON.parse(localStorage.getItem('movieInfo'))
  if(localInfo !== null) {
    return localInfo
  } else {
    return localInfo = []
  }
}

//función que selecciona la película
//me quedo con el id de la película seleccionada
//y lo pusheo al array de favoritos
//pinto los favoritos
function selectMovie(evt){
  const selected = evt.currentTarget.id;
  selectedMovies.push(selected);
  setLocalStorage();
  renderFavourites(selectedMovies);
}

//me quedo con el objeto
function getMovieObject(id){
  return movieList.find(movie => movie.id === id)
}

//función para pintar el array de favoritos
function renderFavourites(favArr){
  //limpio el contenido del ul porque luego se tiene que repintar
  favElem.innerHTML = '';
  //recorro el array de favoritos
  //le paso en cada caso el id al objeto
  //y pinto el título y el id de ese objeto
  for(let favourite of favArr){
    const object = getMovieObject(favourite);
    if(favourite === object.id){
      favElem.innerHTML += `<li id=${object.id}><button type="button">Borrar</button><p>${object.title}</p></li>`;
      addFavouriteListeners();
    }
  }
}

//añado los listeners los botones de borrar
function addFavouriteListeners(){
  const liList = document.querySelectorAll('button');
  for(let li of liList) {
    li.addEventListener('click', removeMovie);
  }
}

//función que borra la película
//me quedo con el id del li
//me quedo con el índice
//le paso a splice el índice y 1 como referencia  que elimino un elemento
function removeMovie(evt){
  const elemId = evt.currentTarget.parentElement.id;
  const elemIndex = selectedMovies.indexOf(elemId);
  selectedMovies.splice(elemIndex,1);
  //vulevo a setear localstorage
  setLocalStorage();
  //vuelvo a repintar favoritos
  renderFavourites(selectedMovies);
}

//ejecuto la función que arranca mi aplicación
loadMovies();



