'use strict';

//defino una función, a la que le paso 2 parámetros, que son dos números
//devuelvo el resultado de la operación en el retorno de la función
//el retorno es la suma de los dos parámetros
function sum(a,b) {
  return a + b
}

//en este caso tenemos una fucnión que saluda con el nombre del usuario
//si a la hora de definir la función quiero pasarle un parámetro por defecto
//puedo asignarle el valor directamente entre los paréntesis a la hora de escribir el parámetro
//así si el usuario no me pasa un nombre por defecto aparecerá Cliente
function welcome(userName = 'Cliente') {
  console.log(`Bienvenida ${userName}`)
}

//prueba a quitar el argumento y a ejecutar la función sin él
welcome('Elena');

//en esta parte vemos cómo reutilizamos código
//ejecutamos la función 2 veces y la guardamos en dos variables diferentes
//así el mismo código produce distintos valores de retorno
const result = sum(2,2);
const result2 = sum(3,2);


console.log(result);
console.log(result2)


