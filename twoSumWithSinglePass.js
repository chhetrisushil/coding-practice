function twoSumWithSinglePass(arr, k) {
  let numMap = {};
  
  for (let i = 0; i < arr.length; i++) {
    let temp = k - arr[i];

    if (numMap[temp]) {
      return true;
    }

    numMap[arr[i]] = true;
  }

  return false;
}

console.log(twoSumWithSinglePass([4,7,1,-3,2], 5));
