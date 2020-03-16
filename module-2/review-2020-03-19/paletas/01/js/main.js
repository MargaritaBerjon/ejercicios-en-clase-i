"use strict";

const palettesContainer = document.querySelector(".js-palettes-container");

let palettes = [];

function getServerData() {
  fetch(
    "http://beta.adalab.es/Easley-ejercicios-de-fin-de-semana/data/palette.json"
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(serverData) {
      // adapto los datos del servidor a mi gusto, a mi cortijo
      palettes = serverData.palettes;
      paintPalettes();
    })
    .catch(function(err) {
      console.log("Error al traer los datos del servidor", err);
    });
}

function paintPalettes() {
  let htmlCode = "";
  for (const palette of palettes) {
    htmlCode += `<li class="palettes__item">`;
    htmlCode += `<h3 class="palettes__name">${palette.name}</h3>`;
    htmlCode += `<div class="palettes__colors">`;
    for (const color of palette.colors) {
      htmlCode += `<div class="palettes__color" style="background-color: #${color};"></div>`;
    }
    htmlCode += `</div>`;
    htmlCode += `</li>`;
  }
  palettesContainer.innerHTML = htmlCode;
}

getServerData();
