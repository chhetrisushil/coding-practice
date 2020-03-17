/*
 * PairWithTargetSum.java
 * Copyright (C) 2020 Sushil Chhetri <chhetrisushil@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

public class PairWithTargetSum
{
  public static int[] search(int[] arr, int targetSum) {
    int left = 0, right = arr.length - 1;

    while (left < right) {
      int currentSum = arr[left] + arr[right];

      if (currentSum == targetSum) {
        return new int[] {left, right};
      }

      if (targetSum > currentSum) {
        left++;
      } else {
        right--;
      }
    }

    return new int[] {-1, -1};
  }

  public static void main(String[] args) {
    int[] result = PairWithTargetSum.search(new int[] {1, 2, 3, 4, 6}, 6);
    System.out.println("[ "+result[0]+", "+result[1]+" ]");
    result = PairWithTargetSum.search(new int[] {2, 5, 9, 11}, 11);
    System.out.println("[ "+result[0]+", "+result[1]+" ]");
  }
}

