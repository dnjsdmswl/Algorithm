const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let result = input[0].slice(input[1] - 1, input[1]);
console.log(result);