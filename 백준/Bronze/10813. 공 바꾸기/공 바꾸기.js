const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const baskets = Array.from({ length: n }, (_, i) => i + 1);

const swap = (baskets, x, y) => {
  const temp = baskets[x];
  baskets[x] = baskets[y];
  baskets[y] = temp;
};

for (let i = 1; i <= m; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  swap(baskets, x - 1, y - 1);
}

console.log(baskets.join(" "));
