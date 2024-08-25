// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift

function stringGoal(s, goal) {
  return s.length === goal.length && (s + s).includes(goal);
}

let s = "abcde";
let goal = "bcdea";

console.log(stringGoal(s, goal));
