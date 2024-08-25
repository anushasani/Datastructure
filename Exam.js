function findingPower(base, exponent) {
  let result = 1;

  while (exponent > 0) {
    if (exponent % 2 === 1) {
      result *= base;
    }
    base = base * base;

    exponent = Math.floor(exponent / 2);
  }
  return result;
}

let a = 2;
let b = 10;

console.log(findingPower(a, b));
