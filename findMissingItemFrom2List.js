/*
 * findMissingItemFrom2List.js
 * Copyright (C) 2020 Sushil Chhetri <chhetrisushil@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

/**
 * Given the input as 2 list find the missing elements from one of the list (the list are not sorted)
 * Input:
 *      List 1: [4, 12, 9, 5, 6]
 *      List 2: [4, 9, 12, 6]
 * Output: 5
 */

/**
 * Simple filter solution:
 * This is a simpler solution with linear time complexity O(n + m) and with space complexity of O(n)
 */
function findMissingItem(l1, l2) {
  let set = new Set(l1.length > l2.length ? l2 : l1);
  let list = l1.length > l2.length ? l1 : l2;

  return list.filter(item => !set.has(item));
}

console.log(findMissingItem([4,12,9,5,6], [4,9,12,6])[0]);

/**
 * XOR solution:
 * This is a linear time O(n) solution with constant space O(1)
 * Due to the behaviour of XOR (bitwise XOR `^`) if the number is XOR'ed with itself it negates the affect of the number
 * eventually leaving with the number that is the difference in the list
 */
function findMissingXor(l1, l2) {
  xorSum = 0;
  l1.forEach(x => xorSum ^= x);
  l2.forEach(x => xorSum ^= x);

  return xorSum;
}

console.log(findMissingXor([4,12,9,5,6], [4,9,12,6]));
