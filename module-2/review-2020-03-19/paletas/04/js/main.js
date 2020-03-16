"use strict";

const palettesContainer = document.querySelector(".js-palettes-container");

let palettes = [];
const favoritesPalettes = [];

// local storage

function setLocalStorage() {
  localStorage.setItem("palettes", JSON.stringify(palettes));
}

function getLocalStorage() {
  const localStoragePalettesJSON = localStorage.getItem("palettes");
  const localStoragePalettes = JSON.parse(localStoragePalettesJSON);
  if (localStoragePalettes !== null) {
    palettes = localStoragePalettes;
    paintPalettes();
    listenPalettes();
  } else {
    getServerData();
  }
}

// fetch

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
      setLocalStorage();
      paintPalettes();
      listenPalettes();
    })
    .catch(function(err) {
      console.log("Error al traer los datos del servidor", err);
    });
}

// paint and listen

function paintPalettes() {
  let htmlCode = "";
  for (let i = 0; i < palettes.length; i++) {
    const favoriteIndex = favoritesPalettes.indexOf(i);
    const isFavorite = favoriteIndex !== -1;
    // if (favoritesPalettes.indexOf(i) !== -1) {
    if (isFavorite === true) {
      // if (isFavorite) {
      htmlCode += `<li class="palettes__item js-palette-item palettes__item--favorite" id="${i}">`;
    } else {
      htmlCode += `<li class="palettes__item js-palette-item" id="${i}">`;
    }
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

function listenPalettes() {
  const palettesItems = document.querySelectorAll(".js-palette-item");
  for (const palettesItem of palettesItems) {
    palettesItem.addEventListener("click", toggleFavorites);
  }
}

// favs

function toggleFavorites(ev) {
  const clickedId = parseInt(ev.currentTarget.id);
  const favoriteIndex = favoritesPalettes.indexOf(clickedId);
  const isFavorite = favoriteIndex !== -1;
  if (isFavorite === true) {
    favoritesPalettes.splice(favoriteIndex, 1);
  } else {
    favoritesPalettes.push(parseInt(ev.currentTarget.id));
  }
  paintPalettes();
  listenPalettes();
}

getLocalStorage();
