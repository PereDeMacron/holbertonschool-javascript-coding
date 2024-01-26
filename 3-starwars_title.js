#!/usr/bin/node

const request = require('request');
const idMovie = process.argv[2];
const apiUrl = `https://swapi-api.hbtn.io/api/films/${idMovie}`;


request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  const filmData = JSON.parse(body);
  console.log(filmData.title);
});
