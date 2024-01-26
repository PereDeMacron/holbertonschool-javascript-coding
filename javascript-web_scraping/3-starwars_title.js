#!/usr/bin/node
const request = require("request");

const id = process.argv[2];
const API = "https://swapi-api.hbtn.io/api/films/" + id;

request(API, function (error, response, body) {
  if (error != null) {
    console.error("error:", error);
  }
  const objMovie = JSON.parse(body);
  console.log(objMovie.title);
});
