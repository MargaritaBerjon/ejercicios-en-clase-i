'use strict';

//llamo a los elementos que van a actuar en mi app
const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');

//creo una variable que me va a guardar la información en localstorage
//la cual leeré siempre para ver si tengo datos guardados o no
const localInfo = readLocalInfo()
console.log(localInfo)

//3-->creo la función que responderá al evento click y recibirá el objeto event
//como al leer de local he retornado un objeto vacío si local está vacío puedo escribir
//las propiedades el obejto que me llegan de los inputs
function saveLocalInfo(evt){
  localInfo[evt.currentTarget.name] = evt.currentTarget.value;
  console.log(localInfo);//--> estó lo quitaría para subir a producción
  //le paso a setLocalInfo el objeto con la info del usuario
  setLocalInfo(localInfo);
}

//2--->creo la función que guardará la info en localstorage y de la que intentaré leer siempre para ver si hay datos
//como no puedo guardar tipos de datos complejos lo que almaceno en localstorage primero tengo que pasarlo a string
//para eso existe la función JSON.stringify que convierte objetos Javascript en una cadena de texto
function setLocalInfo(userInfo){
  //la función recibe como parámetro la info del usuario
  //creo una clave de localstorage para guardarla y como argumento le paso userInfo en formato string
  //userInfo va a ser un objeto que almacene los datos del usuario
  localStorage.setItem('userInfo',JSON.stringify(userInfo));
}

//3-->creo la función que lee localstorage
//creo una variable que obtiene el valor de localstorage y lo parsea
//como si localstorage está vacío el VALOR QUE DEVUELVE ES NULL primero compruebo que localstorage
//es distinto de null, si es así es que localstaorge tiene datos, así que los devuelvo ya parseados
//si es null es que está vacío, así que devuelvo un objeto vacío para que no me de error la función de saveLocalInfo
//si quieres ver qué pasa prueba a quitar el else y a limpiar localstorage
function readLocalInfo(){
  let localInfo = JSON.parse(localStorage.getItem('userInfo'));
  if(localInfo !== null){
    return localInfo;
  } else {
    return localInfo = {};
  }
}

//4-->Está función la ejecuto al inicio para rellenar mis inputs en caso de que haya algo en local
//recibe como parámetro el objeto con la info del usuario desde local
function fillFormfromLocal(localInfo){
  const inputArray = document.querySelectorAll('input');
  //selecciona todos los inputs y los recorre
  for(let inputName of inputArray){
    //hago está comprobación porque si el usuario no me rellena un input no se guardará en el objeto con la info del usuario
    //y al intentar pintar el valor de una propiedad que no existe en un objeto me pintará en el input undefined
    if(localInfo[inputName.name] !== undefined){
      //si existe la propiedad en el objeto entonces que me pinte el valor de la propiedad que coincide con el name del input
      inputName.value = localInfo[inputName.name]
    } else {
      //si no que me deje vacío el input
      inputName.value = ''
    }
  }
}

fillFormfromLocal(localInfo);

//1----> Añado los listeners a los que responderán mis inputs
firstNameInput.addEventListener('keyup',saveLocalInfo);
lastNameInput.addEventListener('keyup',saveLocalInfo);
emailInput.addEventListener('keyup',saveLocalInfo);

