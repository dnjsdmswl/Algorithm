const fs = require("fs");
let input = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

let range = 1,
  block = 1;

while (block < input) {
  block += 6 * range;

  range++;
}

console.log(range);