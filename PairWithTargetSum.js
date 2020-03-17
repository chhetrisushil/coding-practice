/**
 * Input: [1, 2, 3, 4, 6]
 * Target Sum: 6
 * Output: [1, 3]

 * Input: [2, 5, 9, 11]
 * Target Sum: 11
 * Output: [0, 2]
 */

function pairWithTargetSum(arr, targetSum) {
    let result = [];
    let left = 0, right = arr.length - 1;

    while(left < right) {
	let currentSum = arr[left] + arr[right];

	if (currentSum === targetSum) {
	    return [left, right];
	}

	if (targetSum > currentSum) {
	    left++;
	} else {
	    right--;
	}
    }
    
    return [-1, -1];
}


console.log(pairWithTargetSum([1, 2, 3, 4, 6], 6));
console.log(pairWithTargetSum([2, 5, 9, 11], 11));
