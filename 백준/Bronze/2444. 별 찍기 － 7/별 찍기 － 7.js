const fs = require("fs");
let input = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

for (let i = 1; i <= input; i++) {
  let blank = " ".repeat(input - i);
  let stars = "*".repeat(2 * i - 1);
  console.log(blank + stars);
}

for (let j = input - 1; j > 0; j--) {
  let blank = " ".repeat(input - j);
  let stars = "*".repeat(2 * j - 1);
  console.log(blank + stars);
}