const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const arr = Array(n).fill(0);

const ball = (startBasket, lastBasket, number) => {
  for (let i = startBasket - 1; i < lastBasket; i++) {
    arr[i] = number;
  }
};

for (let i = 1; i <= m; i++) {
  const [startBasket, lastBasket, number] = input[i].split(" ").map(Number);
  ball(startBasket, lastBasket, number);
}

console.log(arr.join(" "));