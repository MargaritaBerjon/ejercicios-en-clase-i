'use strict';

const select = document.querySelector('#city');

//me he descargado 3 imagenes de cada ciudad (echadles un vistazo)
//las he renombrado de tal manera que puedo acceder a ellas dinamicamente con un numero que representa un índice

function getImage(){
    //llamo al listado de images dentro de la función con queryselector
    const imagesList = document.querySelectorAll('img');

    //me quedo con el valor del select
    const selectValue = select.value; //o event.target.value valdría también

    //recorro cada una de las etiquetas img con un bucle clásico ya que los bucles for of no admiten usar un índice
    for (let i = 0; i<imagesList.length; i++){
    
        //si el valor de miselect es madrid seteo el src de la imagen pasándole el índice dinámicamente
        //lo hago así con cada caso del if
        if(selectValue === 'madrid'){
            imagesList[i].src = `./images/madrid_${i}.jpg`
        } else if(selectValue === 'ny'){
            imagesList[i].src = `./images/ny_${i}.jpg`
        } else {
            imagesList[i].src = `./images/paris_${i}.jpg`
        }
    }
}

select.addEventListener('change', getImage);
