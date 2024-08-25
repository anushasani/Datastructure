//fibonacciNumber :

const fib = function (n) {
  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
};

// n = 3  = > 0 ,1,1,2,3 .......

// fibonacci Number using recurssion .

const fibrecursion = function (n) {
  return n <= 1 ? n : fibrecursion(n - 1) + fibrecursion(n - 2);
};

const n = 3;
console.log(fibrecursion(n));

// n=3 => 1+ 1 = >2
//fib(2) => 1 + 0 =>1
