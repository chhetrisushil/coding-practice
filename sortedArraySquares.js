/*
 * sortedArraySquares.js
 * Copyright (C) 2020 Sushil Chhetri <chhetrisushil@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

function sortedArraySquares(arr) {
  let left = 0, right = arr.length - 1;
  let highestSquareIndex = arr.length - 1;
  let squares = [];

  while (left <= right) {
    let leftSquare = Math.pow(arr[left], 2);
    let rightSquare = Math.pow(arr[right], 2);

    if (leftSquare > rightSquare) {
      squares[highestSquareIndex--] = leftSquare;
      left++;
    } else {
      squares[highestSquareIndex--] = rightSquare;
      right--;
    }
  }

  return squares;
}

console.log(sortedArraySquares([-2, -1, 0, 2, 3]));
console.log(sortedArraySquares([-3, -1, 0, 1, 2]));
