'use strict';

//ENUNCIADO
/*Partiendo de un listado de adalabers crear
1--> Una función theYoungest que devuelve el nombre de la adalaber más joven.
2--> Una función averageAge que devuelve la media de edad de listado.
1--> una función countAdalabers que devuelve el número de adalabers en el listado.
Una función averageAge que devuelve la media de edad de listado.
Una función countDesigners que devuelve el número de adalabers que son diseñadoras. */

const adalabers = [
    {
        name: 'María',
        age: 22,
        job: 'diseñadora'
    },
    {
        name: 'Lucía',
        age: 31,
        job: 'periodista'
    },
    {
        name: 'Rocío',
        age: 18,
        job: 'diseñadora'
    }
]

//ADALABER MÁS JOVEN
//utilizo la edad de la primera adalaber como referencia para empezar a comparar
function theYoungest(arr){
    let min = arr[0].age
    let adalaberName;
    for(let i = 0; i<arr.length; i++){
        let currentAge = arr[i].age;
        let currentName = arr[i].name
        if(currentAge <= min){
            min = currentAge;
            adalaberName = currentName
        }
    }
    return adalaberName
}

const youngestAdalaber = theYoungest(adalabers);
console.log(`La adalaber más joven es ${youngestAdalaber}`);


//MEDIA DE EDAD DE LAS ADALABERS
//detalle empiezo el bucle en i=1 para que no me sume el valor de la adalaber inicial dos veces
//la primera vez que itera el bucle
function averageAge(arr){
    let acc = arr[0].age;
    for(let i = 1; i<arr.length; i++){
        acc = acc + arr[i].age;
    }
    return acc / arr.length
}

const averageAgeAdalabers = averageAge(adalabers);
console.log(`La media de edad es de ${averageAgeAdalabers} años`);


//CUENTO ADALABERS
function countAdalabers(arr){
    return arr.length
}

const numberOfAdalabers = countAdalabers(adalabers);
console.log(`Hay ${numberOfAdalabers} adalabers en mi lista`);


//CUENTO ADALABERS DISEÑADORAS
function countDesignerAdalabers(arr){
    let designers = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i].job === 'diseñadora' ){
            designers += 1;
        }
    }
    return designers
}

const numberOfDesigners = countDesignerAdalabers(adalabers);
console.log(`Hay ${numberOfDesigners} adalabers diseñadoras`);