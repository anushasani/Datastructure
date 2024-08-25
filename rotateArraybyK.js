function rotate1(num, k) {
  k = k % num.length;
  if (k < 0) {
    k = k + num.length;
  }
  let l = 0;
  let r = num.length - 1;

  num = reverseArr(num, l, r);

  l = 0;
  r = k - 1;
  num = reverseArr(num, l, r);

  l = k;
  r = num.length - 1;
  num = reverseArr(num, l, r);
  return num;
}

function reverseArr(nums, l, r) {
  while (l < r) {
    let temp = nums[l];
    nums[l] = nums[r];
    nums[r] = temp;
    l++;
    r--;
  }

  return nums;
}
const num = [1, 2, 3, 4, 5];
const kth = 10;
console.log(rotate1(num, kth));
