#!/usr/bin/node

const fs = require("fs");
const request = require("request");
const url = process.argv[2];
const file = process.argv[3];


request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    fs.writeFile(file, body, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
});
