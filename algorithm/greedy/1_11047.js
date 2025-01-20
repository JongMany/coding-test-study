const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = `10 4200
1
5
10
50
100
500
1000
5000
10000
50000`
  .toString()
  .split('\n');

const [N, K] = input[0].split(' ');
const numbers = input.slice(1).map(Number);

let current = K;
let totalCnt = 0;

for (let i = N - 1; i >= 0; i--) {
  const coin = numbers[i];

  const cnt = Math.floor(current / coin);
  totalCnt += cnt;
  current -= cnt * coin;

  if (current === 0) break;
}

console.log(totalCnt);
