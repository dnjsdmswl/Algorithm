const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

input.sort((a, b) => a - b);

console.log(input.join(" "));
