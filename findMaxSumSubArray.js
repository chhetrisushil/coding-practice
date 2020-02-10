/*
 * findMaxSumSubArray.js
 * Copyright (C) 2020 Sushil Chhetri <chhetrisushil@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
let windowSize = process.argv[2];
let arr = JSON.parse(process.argv[3]);

function findMaxSumSubArray(windowSize, arr) {
  let windowStart = 0;
  let windowEnd = 0;
  let windowSum = 0;
  let maxSum = 0;
  let result;

  for (; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= windowSize - 1) {
      if (maxSum < windowSum) {
        maxSum = windowSum;
        result = arr.slice(windowStart, windowEnd + 1);
      }

      windowSum -= arr[windowStart];
      windowStart += 1;
    }

  }

  if (maxSum) {
    return [maxSum, result];
  }

  return -1;
}

let [sum, result] = findMaxSumSubArray(windowSize, arr);
console.log(sum, result);
