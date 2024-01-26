#!/usr/bin/node

const argvs = process.argv.slice(2);
const filename = argvs[0];

const fs = require("fs");
fs.readFile(filename, "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
