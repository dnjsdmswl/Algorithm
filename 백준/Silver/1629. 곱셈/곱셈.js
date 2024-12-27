const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ").map(BigInt);
const modPow = (base, exp, mod) => {
  let result = BigInt(1);
  while (exp > 0) {
    if (exp % BigInt(2) == BigInt(1)) {
      result = (result * base) % mod;
    }
    base = (base * base) % mod;
    exp /= BigInt(2);
  }
  return result;
};
let result = modPow(input[0], input[1], input[2]);
console.log(result.toString());