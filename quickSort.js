/*
 * quickSort.js
 * Copyright (C) 2020 Sushil Chhetri <chhetrisushil@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

let _sort = (arr, left = 0, right = arr.length - 1) => {
  if (left >= right) {
    return;
  }

  let pivot = arr[Math.floor((left + right)/2)];
  let index = partition(arr, left, right, pivot);

  _sort(arr, left, index - 1);
  _sort(arr, index, right);
};

let partition = (arr, left, right, pivot) => {
  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }

    while (arr[right] > pivot) {
      right--;
    }

    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }

  return left;
}

let swap = (arr, left, right) => {
  [arr[left], arr[right]] = [arr[right], arr[left]];
}

class QuickSort {
  constructor(arr) {
    this.arr = arr;
  }

  sort() {
    _sort(this.arr);

    return this.arr;
  }
}


let arr = new QuickSort([15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19]);
console.log(arr.sort());
