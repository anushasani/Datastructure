function reverseNumber(n) {
  let num;
  let temp = 0;
  while (n > 0) {
    num = n % 10;
    temp = 10 * temp + num;
    n = parseInt(n / 10);
  }
  console.log(temp);
}

let n = 78652;
console.log(reverseNumber(n));

// let num = 12345;
// let value;
// let temp = 0;

// while (num > 0) {
//   value = num % 10;
//   temp = 10 * temp + value;
//   num = parseInt(num / 10);
// }
// console.log(temp);
