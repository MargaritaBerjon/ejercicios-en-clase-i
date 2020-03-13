'use strict';


const urlDog = 'https://dog.ceo/api/breeds/list/all';
const urlRandom = 'https://api.rand.fun/number/integer?max=90';
const dog = document.getElementById('dog');

let dogBreed = null;

function getRandom(){
    fetch(urlRandom)
        .then(response => response.json())
        .then(data => {
            let num = data.result;
            console.log(num);
            fetch(urlDog)
                .then(response => response.json())
                .then(data => {
                    let breedsArray = Object.keys(data.message);
                    console.log(`La raza obtenida de forma aleatoria es ${breedsArray[num]}`)     
                })

        })
}

//para resolver el ejercicio he utilizado el método Object.keys que te devuelve un array con todas las claves
//de un objeto, lo he hecho así por que lo que me viene del servidor es un objeto cuyas claves son las razas de perro
//necesito acceder mediante el número aleatorio a una posición alatoria que me devuelve una clave

getRandom();

