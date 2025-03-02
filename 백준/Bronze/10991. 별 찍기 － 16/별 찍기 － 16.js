const fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim());
for (let i = 1; i <= input; i++) {
  let space = " ".repeat(input - i);
  let stars = Array(i).fill("*").join(" ");
  console.log(space + stars);
}