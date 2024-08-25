function sortArray(a, b) {
  let result = [];

  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      result.push(a[i]);
      i++;
    } else {
      result.push(b[j]);
      j++;
    }
  }

  while (i < a[i].length) {
    result.push(a[i]);
    i++;
  }
  while (j < b[j].length) {
    result.push(b[j]);
    j++;
  }

  return result;
}

let a = [6, 10];
let b = [9];

console.log(sortArray(a, b));
