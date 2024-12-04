const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = parseInt(input[0], 10);
const strings = input.slice(1);

function solution(n, strings) {
//   if (n === 1) {
//     return strings[0];
//   }
  const result = strings[0].split("");

  for (let i = 1; i < n; i++) {
    const asdf = strings[i];

    for (let j = 0; j < result.length; j++) {
      if (result[j] !== asdf[j]) {
        result[j] = "?";
      }
    }
  }

  return result.join("");
}

console.log(solution(n, strings));
