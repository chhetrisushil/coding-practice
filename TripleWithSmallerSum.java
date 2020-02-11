/*
 * TripleWithSmallerSum.java
 * Copyright (C) 2020 Sushil Chhetri <chhetrisushil@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

/**
  * Problem Statement #
  * Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices.
  * Write a function to return the count of such triplets.
  */
import java.util.Arrays;

class TripleWithSmallerSum
{
  public static int searchTriples(int[] arr, int target) {
    Arrays.sort(arr);

    int count = 0;

    for (int i = 0; i < arr.length - 1; i++) {
      count += searchPair(arr, target - arr[i], i);
    }

    return count;
  }

  private static int searchPair(int[] arr, int targetSum, int first) {
    int count = 0;
    int left = first + 1, right = arr.length -1;

    while (left < right) {
      if (arr[left] + arr[right] < targetSum) {
        count += right - left;
        left++;
      } else {
        right--;
      }
    }
    return count;
  }

  public static void main(String[] args) {
    System.out.println(TripleWithSmallerSum.searchTriples(new int[] {-1, 0, 2, 3}, 3));
    System.out.println(TripleWithSmallerSum.searchTriples(new int[] {-1, 4, 2, 1, 3}, 5));
  }
}

