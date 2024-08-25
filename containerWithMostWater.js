function containerWithMaxWater(height) {
  let mx = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    mx = Math.max(mx, Math.min(height[l], height[r]) * (r - l));

    if (height[l] < height[r]) l = +1;
    else if (height[l] > height[r]) r = -1;
    else {
      l = +1;
      r = -1;
    }
  }

  return mx;
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(containerWithMaxWater(height));
