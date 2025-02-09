const fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim());
for (let i = 1; i <= input; i++) {
  console.log(" ".repeat(input - i) + "*".repeat(2 * i - 1));
}
