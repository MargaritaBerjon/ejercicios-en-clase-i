'use strict';

const container = document.querySelector('.container');
const buttonElem = document.querySelector('.button');


//TARGET VS CURRENT TARGET
function showInfo(event){
  console.log(`Mi currentTarget es ${event.currentTarget.id}`);
  console.log(`Mi target es ${event.target.id}`);
}

container.addEventListener('click',showInfo);
////////



// //EVENT BUBBLING
// function buttonInfo(event){
//   console.log('click en el botón');
//   event.stopPropagation();
// }

// function containerInfo(){
//   console.log('click en el container');
// }

// buttonElem.addEventListener('click',buttonInfo);
// container.addEventListener('click',containerInfo);
// ////////




//EVENT DELEGATION
// function detectClass(){
//   //console.log(event.target.classList);
//   if(event.target.classList.contains('button')) {
//     console.log('soy el botón');
//   } else {
//     console.log('NO soy el botón');
//   }
// }

// document.addEventListener('click',detectClass);
///////////