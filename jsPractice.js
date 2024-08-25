function findingPower(a, b) {
  for (let i = 1; i <= b; i++) {
    a *= i;
  }
  return a;
}

let a = 2;
let b = 2;

console.log(findingPower(a, b));
