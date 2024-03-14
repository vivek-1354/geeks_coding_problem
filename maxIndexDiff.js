// Given an array a of n positive integers. The task is to find the maximum of j - i 
// subjected to the constraint of a[i] < a[j] and i < j.

// Example 1:

// Input:
// n = 2
// a[] = {1, 10}
// Output:
// 1
// Explanation:
// a[0] < a[1] so (j-i) is 1-0 = 1.

// input :

// n = 9
// a[] = {34, 8, 10, 3, 2, 80, 30, 33, 1}
// Output:
// 6
// Explanation:
// In the given array a[1] < a[7] satisfying the required condition(a[i] < a[j]) 
// thus giving the maximum difference of j - i which is 6(7-1).

// naive solution   O(n square)

function maxIndexDiff(arr) {
    let n = arr.length;
    let res = 0
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] <= arr[j] && i <= j) {
                res = Math.max(res, j - i)
            }
        }

    }
    return res
}

// console.log(maxIndexDiff([34, 8, 10, 3, 2, 80, 30, 33, 1]))

// efficient solution 


function maxIndexDifff(arr) {
    let n = arr.length
    let leftMin = [arr[0]]
    let rightMax = []
    rightMax[n - 1] = arr[n - 1]

    for (let i = 1; i < n; i++) {
        leftMin[i] = Math.min(leftMin[i - 1], arr[i])
    }

    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], arr[i])
    }

    let i = 0; let j = 0
    let res = -Infinity

    while (i < n && j < n) {
        if (leftMin[i] <= rightMax[j]) {
            res = Math.max(res, j - i)
            j++
        } else {
            i++
        }
    }
    // console.log(leftMin)
    // console.log(rightMax)
    return res
}

console.log(maxIndexDifff([34, 8, 10, 3, 2, 80, 30, 33, 1]))
// maxIndexDifff([34, 8, 10, 3, 2])