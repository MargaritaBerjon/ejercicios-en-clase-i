'use strict';

//ENUNCIADO
//Devolver el nombre del ganador utilizando el método reduce
//Dado un array de corredores (objetos)
const runners = [
    { name: 'Gregory Goyle', time: 56 },
    { name: 'Luna Lovegood', time: 45 },
    { name: 'Nymphadora Tonks', time: 9 },
    { name: 'Cedric Diggory', time: 28 },
    { name: 'Cho Chang', time: 6 },
];

//Necesito una función reductora que es la que le puedo pasar al método reduce directamente
//el acumulador de mi reduce es una variable en la que se va a ir guardando un valor acumulado, en este caso como lo que estoy
//recorriendo es un array de objetos mi acumulador es un objeto que usaré para comparar con cada uno de los runners en mi iteración
//estos runners representan cada uno e los objetos en la iteración del bucle
//voy guardando en el acc/acumulador el valor que retorno en la comparación para poder compararlo con el siguiente objeto
//a medida que recorro el bucle, uso el acumulador devuelto
const winner = function (acc,runner){
  //a medida que transcurre el bucle voy comparando cada runner on el acumulador, si el if se cumple retorno
  //el acumulador que es un objeto igualando al objeto que cumple esa condición (reduce almacena en su memoria el resultado y cuando termina de ejecutarse el bucle
  // es cuando retorna el acumulador)
  if(runner.time < acc.time) {
    return acc = runner
  } else {
    //si no se cumple la condición devuelve el aculudor que en cada caso será el corredor anterior, que es el acumulado
    //puesto que no se ha cambiado el valor con el if
    return acc
  }
}

//esta misma función se podría hacer con un ternario
//const winner = (acc,runner) => runner.time < acc.time ? acc = runner : acc;

//1---> Aquí le paso directamente la función reductora que he definido arriba.
const winnerName = runners.reduce(winner);

//Otra opción sería pasarle directamente la función con un ternario y un arrow function en la varable que he declarado pa
//const winnerName = runners.reduce((acc,runner) => runner.time < acc.time ? acc = runner : acc);


console.log(winnerName.name);