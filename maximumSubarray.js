function maximumSubarray(nums) {
  let mx = nums[0];
  let sm = 0;

  nums.forEach((i) => {
    sm += i;
    mx = Math.max(sm, mx);
    if (sm < 0) {
      sm = 0;
    }
  });
  return mx;
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maximumSubarray(nums));
