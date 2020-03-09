'use strict';

const ulElem = document.querySelector('ul');


//un bucle repite una acción mientras se cumpla una condición
//en este caso ejecutaremos un console.log mientras nuestra variable i sea menor que 10
function increaseIndexValue(){
  for(let i = 0; i < 10; i++){
    console.log(i);
  }
}

increaseIndexValue();
////////////

//Un array es una lista
const monthList = ['enero','febrero','marzo','abril','mayo'];

//cambio el valor de la posición 1 de mi array que se corresponde con febrero
monthList[1] = 'tomate';

//por cada mes de mi array de meses pinto un li dentro de mi ul con el texto de ese mes
//por cada iteración de mi bucle month vale un mes diferente
function renderMonths(){
//for of
  for(let month of monthList) {
    ulElem.innerHTML += `<li>${month}</li>`;
  }
//for clásico
  // for(let i = 0; i<monthList.length; i++){
  //   ulElem.innerHTML += `<li>${monthList[i]}</li>`
  // }
}

renderMonths();
////////////

//Si lo que quiero es recorrer un objeto el loop que usaré es for...in
//ejemplo for in
const userData = {
  email: 'info@email.com',
  password: 'mi-contraseña-super-secreta'
};

//por cada propiedad del objeto
//seleccionaré el input con la clase que tiene el mismo nombre que item
//y asignaré al input el valor de cada propiedad en cada iteración
for (let item in userData) {
  const inputElement = document.querySelector(`.js-${item}`);
  inputElement.value = userData[item];
}
