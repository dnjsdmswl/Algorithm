const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let result = "";

for (let i = input; i >= 2; i--) {
  console.log(" ".repeat(input - i) + "*".repeat(2 * i - 1));
}

for (let i = 1; i <= input; i++) {
  console.log(" ".repeat(input - i) + "*".repeat(2 * i - 1));
}
console.log(result);
