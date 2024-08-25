function productArray(num) {
  let n = num.length;

  let left = Array(n).fill(0);
  let right = Array(n).fill(0);
  let output = Array(n).fill(0);

  left[0] = num[0];
  right[n - 1] = num[n - 1];

  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * num[i];
  }
  for (let i = n - 2; i > 0; i--) {
    right[i] = right[i + 1] * num[i];
  }
  output[0] = right[1];
  output[n - 1] = left[n - 2];

  for (i = 1; i < n - 1; i++) {
    output[i] = left[i - 1] * right[i + 1];
  }
  return output;
}

const arr = [1, 2, 3, 4];
console.log(productArray(arr));
