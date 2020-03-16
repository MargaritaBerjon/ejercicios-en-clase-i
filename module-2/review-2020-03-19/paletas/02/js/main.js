"use strict";

const palettesContainer = document.querySelector(".js-palettes-container");

let palettes = [];
const favoritesPalettes = [];

function getServerData() {
  fetch(
    "https://beta.adalab.es/Easley-ejercicios-de-fin-de-semana/data/palettes.json"
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(serverData) {
      // adapto los datos del servidor a mi gusto, a mi cortijo
      palettes = serverData.palettes;
      paintPalettes();
      listenPalettes();
    })
    .catch(function(err) {
      console.log("Error al traer los datos del servidor", err);
    });
}

function paintPalettes() {
  let htmlCode = "";
  for (let i = 0; i < palettes.length; i++) {
    htmlCode += `<li class="palettes__item js-palette-item " id="${i}">`;
    htmlCode += `<h3 class="palettes__name">${palettes[i].name}</h3>`;
    htmlCode += `<div class="palettes__colors">`;
    for (const color of palettes[i].colors) {
      htmlCode += `<div class="palettes__color" style="background-color: #${color};"></div>`;
    }
    htmlCode += `</div>`;
    htmlCode += `</li>`;
  }
  palettesContainer.innerHTML = htmlCode;
}

function toggleFavorites(ev) {
  favoritesPalettes.push(ev.currentTarget.id);
  console.log(ev.currentTarget.id, favoritesPalettes);
  paintPalettes();
}

function listenPalettes() {
  const palettesItems = document.querySelectorAll(".js-palette-item");
  for (const palettesItem of palettesItems) {
    palettesItem.addEventListener("click", toggleFavorites);
  }
}

getServerData();
