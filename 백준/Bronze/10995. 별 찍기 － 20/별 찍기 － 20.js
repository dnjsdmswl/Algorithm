const fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim());
for (let i = 1; i <= input; i++) {
  if (i % 2 === 1) {
    console.log("* ".repeat(input).trim());
  } else {
    console.log(" " + "* ".repeat(input).trim());
  }
}