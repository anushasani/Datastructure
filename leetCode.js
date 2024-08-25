function rotateByK() {
  let nums = [1, 2, 3, 4, 5, 6, 7];
  let d = 2;
  let n = 7;

  let start = 0;
  let end = d - 1;

  while (start <= end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;  
    end++;
  }

  return nums;
}

console.log(rotateByK());
