function removeDuplicateArray(array) {
  const map = new Map();

  for (const i of array) {
    if (map.has(i)) {
      return true;
    } else {
      map.set(i, true);
    }
  }
  return false;
  //   const set = new Set(array);
  //   return set.size !== array.length;
}

const array = [1, 2, 3, 1];
console.log(removeDuplicateArray(array));
