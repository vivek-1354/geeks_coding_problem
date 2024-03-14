function maxConsecutiveSumOfK(arr, k) {
    let res = 0;
    for (let i = 0; i < arr.length - k; i++) {
        let total = 0
        for (j = i; j < i + k; j++) {
            total += arr[j]

        }
        res = Math.max(res, total)
    }
    return res
}

// [1,8,30,-5,20,7]

// console.log(maxConsecutiveSumOfK([1, 8, 30, -5, 20, 7], 3))
// console.log(maxConsecutiveSumOfK([5, -10, 6, 90, 3], 2))


// using window sliding technique

function maxConsecutiveSumOfK2(arr, k) {
    let res = -Infinity
    let currSum = 0

    for (let i = 0; i < arr.length; i++) {
        if (i < k) {
            currSum += arr[i]
            res = currSum;
        }
        else {
            // res = Math.max(res, currSum)
            currSum = currSum + arr[i] - arr[i - k]
            res = Math.max(res, currSum)
        }
    }
    return res
}
console.log(maxConsecutiveSumOfK2([1, 8, 30, -5, 20, 7], 3))
console.log(maxConsecutiveSumOfK2([5, -10, 6, 90, 3], 2))
console.log(maxConsecutiveSumOfK2([5, -10, 6], 3))
