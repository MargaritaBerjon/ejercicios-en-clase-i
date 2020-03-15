'use strict';

let people;
let homeworld;
let films = [];

const getFetchPromise = (url) => fetch(url).then(response => response.json());

const getPeopleById = (id) => {
  return fetch(`https://swapi.co/api/people/${id}`)
    .then(response => response.json())
    .then(data => {
      return {
        name: data.name,
        birthYear: data.birth_year,
        homeworldUrl: data.homeworld,
        filmsUrls: data.films
      };
    })
}

const getHomeworld = (homeworldUrl) => {
  return fetch(homeworldUrl)
    .then(response => response.json())
    .then(data => {
      return {
        name: data.name,
        population: data.population,
        surfaceWater: data.surface_water
      };
    })
};

const getFilms = (filmsUrls) => {
  const promises = [];
  for (const url of filmsUrls) {
    promises.push(getFetchPromise(url));
  }
  return Promise.all(promises)
    .then(data => {
      const films = [];
      for (const film of data) {
        films.push(film.title);
      }
      return films;
    })
};

getPeopleById(3)
  .then(data => {
    people = data;
  })
  .then(() => getHomeworld(people.homeworldUrl))
  .then(data => {
    homeworld = data
  })
  .then(() => getFilms(people.filmsUrls))
  .then(data => {
    films = data
  })
  .then(() => {
    console.log('People', people);
    console.log('Homeworld', homeworld);
    console.log('Films', films);
  });