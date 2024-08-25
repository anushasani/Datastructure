class Solution {
  // Function to reverse array using two pointers
  reverse(arr, n) {
    let p1 = 0,
      p2 = n - 1;
    // Swap elements pointed by p1 and p2 until they meet in the middle
    while (p1 < p2) {
      [arr[p1], arr[p2]] = [arr[p2], arr[p1]];
      p1++;
      p2--;
    }
    return arr; // Return the reversed array
  }

  // Function to print array
  printArray(arr) {
    console.log("Reversed array is:-");
    console.log(arr.join(" "));
  }
}

// Driver code
let solution = new Solution();
let arr = [5, 4, 3, 2, 1];
let n = arr.length;
// Call the function to reverse the array
let reversedArr = solution.reverse(arr, n);
// Print the reversed array
solution.printArray(reversedArr);
