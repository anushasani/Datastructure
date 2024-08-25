//Palindrome JS

const isPalindrome = function (x) {
  return x === +x.toString().split("").reverse().join("");
};

const res = isPalindrome(121);
console.log(res);

// x =121  => "121" => ["1","2","1"]=>["1","2","1"] =>"121"=> + operater to convert this to number
