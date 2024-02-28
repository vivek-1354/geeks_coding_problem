// Given an integer array coins[ ] of size N representing different denominations of currency and an integer sum, find the number of ways you can make sum by using different combinations from coins[ ].  
// Note: Assume that you have an infinite supply of each type of coin. And you can use any coin as many times as you want.

// Example 1:

// Input:
// N = 3, sum = 4
const coins = [1, 2, 3]
// Output: 4
// Explanation: Four Possible ways are: {1,1,1,1},{1,1,2},{2,2},{1,3}.

function countWays(arr, sum, n) {
    if (sum === 0) {
        return 1
    }
    if (sum < 0) {
        return 0
    }
    if (n === 0) {
        return 0
    }
    return countWays(arr, sum - arr[n - 1], n) + countWays(arr, sum, n - 1)
}

console.log(countWays(coins, 4, 3))


// Note: Assume that you have an fixed supply of each type of coin. 
// And you can use any coin only one time.

function countWays2(arr, sum, n) {
    if (sum === 0) {
        return 1
    }
    if (sum < 0) {
        return 0
    }
    if (n === 0) {
        return 0
    }
    return countWays2(arr, sum - arr[n - 1], n - 1) + countWays2(arr, sum, n - 1)
}