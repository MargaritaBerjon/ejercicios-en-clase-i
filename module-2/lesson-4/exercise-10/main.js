'use strict';

function modelBox (borderBox, elemWidth, padding, borderSize){

  let contentWidth;
  let finalBoxWidth;

  if (borderBox){
    finalBoxWidth = elemWidth;
    contentWidth = elemWidth - (padding*2) - (borderSize*2);
  } else{
    finalBoxWidth = elemWidth + (borderSize*2);
    contentWidth = elemWidth - (padding*2);
  }
  return console.log(`El ancho del contenido es: ${finalBoxWidth} y el ancho total de la caja es: ${contentWidth}`);
}

modelBox(true , 100, 5, 1);


