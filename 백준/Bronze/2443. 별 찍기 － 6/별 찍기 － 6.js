const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
for (let i = input; i >= 1; i--) {
  console.log(" ".repeat(input - i) + "*".repeat(2 * i - 1));
}