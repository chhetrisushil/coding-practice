function nonDuplicateNumber(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result ^= arr[i];
  }

  return result;
}

console.log(nonDuplicateNumber([4, 3, 2, 4, 1, 3, 2]));
