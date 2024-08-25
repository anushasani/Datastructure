function isPalindrom(s) {
  let start = 0;
  let clearString = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let end = clearString.length - 1;
  while (start < end) {
    if (clearString[start] !== clearString[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

let str = "A man, a plan, a canal, Panama";
console.log(isPalindrom(str));
