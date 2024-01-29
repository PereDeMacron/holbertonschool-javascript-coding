#!/usr/bin/node

const request = require("request");

const url = process.argv[2];

request(url, function (error, response) {
  if (error != null) {
    console.error("error:", error);
    return;
  }
  console.log("code:", response && response.statusCode);
});
