'use strict';

const elemList = document.querySelector('#recipes-list');
const elemFavList = document.querySelector('#favourites-recipes-list');
const urlBase = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian';

let recipes = null;
//como ahora voy a leer los favoritos desde local igualo mi variable favorites a lo que contenga localstorage
let favourites = readLocalStorage();

//Conecto a la API
function conectToApi(){
  fetch(urlBase)
    .then(response => response.json())
    .then(data => {
      recipes = data.meals;
      renderRecipes(recipes);
      //al iniciar mi app pinto lo que tenga en favoritos
      renderFavourites(favourites);
    })
}
///

//Pinto las recetas
function renderRecipes(arr){
  for(let item of arr){
    elemList.innerHTML += `<li id='${item.idMeal}' class='recipes-list__item'><div class='recipes-list__item-info'><img src=${item.strMealThumb} alt=${item.strMeal}><span>${item.strMeal}</span></div></li>`
  }
  addClickListeners();
}
////

//Añado los listeners a mis botones llamaré esta función en la que pinta las recetas, ya que es ella la que la usa al crear los botones
function addClickListeners(){
  const recipeLiElements = document.querySelectorAll('.recipes-list__item');
  for(let recipeLi of recipeLiElements){
    recipeLi.addEventListener('click',saveFavourites)
  }
}
///

//Guardo en favoritos en cada click sobre la receta
function saveFavourites(evt){
  const index = evt.currentTarget.id;
  if(favourites.indexOf(index) === -1){//--> esta línea se puede también escribir con el método de array includes----->if(favourites.includes(index))
    favourites.push(index);
    //cuando hago push de mi receta seteo mi localstorage mandándole el array de ids
    setLocalStorage(favourites);
    //llamo a la función que pinta mis platos favoritos pasándole el array de favoritos
    renderFavourites(favourites);
  } else {
    alert('ese plato ya está en favoritos')
  }
}

//creo la función que setea mi localstorage, recibe como parámetro el array de mis ids favoritos y lo pasa por el método stringify para poder almacenarlo
//la llamaré cada vez que se ejecute saveFavourites
function setLocalStorage(favourites){
  localStorage.setItem('favourites',JSON.stringify(favourites));
}

//función que recoge el valor de localstorage lo lee y lo parsea
function readLocalStorage(){
  let favourites = JSON.parse(localStorage.getItem('favourites'));
  //si local es distinto de null es que tiene contenido así que devuelvo su contenido
  if(favourites !== null){
    return favourites;
  }
  //si no tiene contenido devolverá null así que para que no me de error devuelvo un array vacío para poder
  //emepzar a guardar ids;
  return favourites = [];
}


//como los favoritos los estoy guardando por id, necesito relacionar mi array de ids de favoritos con el objeto al que hace referencia
//en el array de objetos recipes
//para ello creo una función que recibe el id de favorito, recorre el array recipes y si el id que le paso coincide con alguno de los ids
//de mi array de recetas devuelvo el objeto para poder pintarlo
function getRecipe(idRecipe){
  for(let recipe of recipes){
    if(recipe.idMeal === idRecipe){
      return recipe;
    }
  }
}

//funcío que pinta el contenido de favoritos
//le paso como parámetro el array de favoritos, de partida vacío lo que contenga el ul
function renderFavourites(favourites){
  elemFavList.innerHTML = '';
  //por cada id que contenga favoritos le paso el id a la función getRecipe que me devolverá el objeto con ese id
  for( let favourite of favourites) {
    let recipe = getRecipe(favourite);
    //ahora ya puedo ver que si existe ese objeto lo añado a mi ul
    if(recipe){
      elemFavList.innerHTML += `<li><img src='${recipe.strMealThumb}' alt='plato'></li>`
    }
  }
}

conectToApi();


