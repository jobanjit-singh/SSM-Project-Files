let n = 4565456545654565; // 0
let sum = 0; // 6

while (n > 0) {
  // 0 > 0
  sum = sum + (n % 10);
  //       5  +  1 % 10
  //       5  +   1
  n = parseInt(n / 10);
  //         0
}

console.log(sum);
