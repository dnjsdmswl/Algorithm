const fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim());

for (let i = 1; i <= input; i++) {
  console.log("*".repeat(i));
}

for (let i = input - 1; i >= 1; i--) {
  console.log("*".repeat(i));
}
