function mergeIntervals(intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let pair = intervals[0];
  let result = [];

  for (let i of intervals) {
    if (pair[1] >= i[0]) {
      pair[1] = Math.max(i[1], pair[1]);
    } else {
      result.push(pair);
      pair = i;
    }
  }

  result.push(pair);
  return result;
}

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(mergeIntervals(intervals));
