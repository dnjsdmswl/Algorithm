const fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim());
for (let i = 1; i <= input; i++) {
  let space = " ".repeat(input - i);
  if (i === 1) {
    console.log(space + "*");
  } else {
    console.log(space + "*" + " ".repeat(2 * (i - 1) - 1) + "*");
  }
}