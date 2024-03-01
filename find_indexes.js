// Given an unsorted array A of size N that contains only non negative integers, find a continuous sub-array that adds to a given number S and return the left and 
// right index(1-based indexing) of that subarray.

// In case of multiple subarrays, return the subarray indexes which come first on moving from left to right.

// Note:- You have to return an ArrayList consisting of two elements left and right. In case no such subarray exists return an array consisting of element -1.

// Example 1:

// Input:
// N = 5, S = 12
// A[] = {1,2,3,7,5}
// Output: 2 4
// Explanation: The sum of elements 
// from 2nd position to 4th position 
// is 12.


function findIndexes(arr, sum) {
    let left = 0
    let right = 0;
    let total = 0;

    while (right < arr.length) {

        total += arr[right]

        while (total > sum) {
            total -= arr[left];
            left++;
        }

        if (total === sum) {
            return [left + 1, right + 1]
        }
        right++;
    }
    return [-1]
}

// console.log(findIndexes([1, 2, 3, 7, 5], 12))

// naive solution

function findMaxSumOf_K_consecutive(arr, k) {
    let res = -Infinity

    for (let i = 0; i + k - 1 < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < k; j++) {
            sum += arr[i + j]
            res = Math.max(res, sum)
        }
    }
    return res
}

console.log(findMaxSumOf_K_consecutive([10, 5, -2, 20, 1], 3))

// using windows sliding technique

function findMaxSumOf_K_consecutive2(arr, k) {
    let res = 0;
    for (let i = 0; i < k; i++) {
        res += arr[i]
    }

    for (let i = k; i < arr.length; i++) {
        let curr = res + arr[i] - arr[i - k]
        res = Math.max(res, curr)
    }

    return res
}

console.log(findMaxSumOf_K_consecutive2([1, 8, 30, -5, 20, 7], 4))