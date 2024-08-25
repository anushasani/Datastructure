//Check  whether it is a Anagram.

const Anagram = function (s, t) {
  if (s.length !== t.length) return false;
  const map = new Map();

  for (let c of s) {
    if (map.has(c)) return;
  }
};

let s = "acca";
let t = "aaac";
console.log(Anagram(s, t));

// rat tar

// {
// r :1
//a :1
//t :1
// }

// {
// r :1
//a :1
//t :1
// }
