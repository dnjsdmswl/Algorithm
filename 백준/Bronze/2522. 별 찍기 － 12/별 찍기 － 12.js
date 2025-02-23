const fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim());
for (let i = 1; i <= input - 1; i++) {
  console.log(" ".repeat(input - i) + "*".repeat(i));
}
for (let i = input; i >= 1; i--) {
  console.log(" ".repeat(input - i) + "*".repeat(i));
}
