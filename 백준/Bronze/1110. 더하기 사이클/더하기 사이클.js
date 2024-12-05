const fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim());
let original = input;
let current = original;
let count = 0;

for (;;) {
  let ten = Math.floor(current / 10);
  let one = current % 10;
  let sum = ten + one;
  current = one * 10 + (sum % 10);
  count++;
  if (original === current) break;
}

console.log(count);
