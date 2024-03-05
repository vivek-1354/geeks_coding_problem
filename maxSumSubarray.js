function maximumSumSubarray(arr) {

    let res = -Infinity
    for (let i = 0; i < arr.length; i++) {
        let count = 0
        for (let j = i; j < arr.length; j++) {
            count += arr[j]
            res = Math.max(res, count)

        }
    }
    return res
}


// console.log(maximumSumSubarray([2, 3, -8, 7, -1, 2, 3]))
// console.log(maximumSumSubarray([5, 8, 3]))
// console.log(maximumSumSubarray([-6, -1, -8]))



// efficient solution

function maximumSum(arr) {
    let res = arr[0]

    let maxEnding = arr[0]

    for (let i = 1; i < arr.length; i++) {
        console.log(maxEnding + arr[i], arr[i])
        maxEnding = Math.max(maxEnding + arr[i], arr[i])      // for each element we calcute left maxEnding sum and in second step if we find Max of (maxEnding + current element ) and if we find higher value than res then we simply update the result with higher value
        res = Math.max(res, maxEnding)
    }
    return res
}

console.log(maximumSum([2, 3, -8, 7, -1, 2, 3]))   //11
// console.log(maximumSum([5, 8, 3]))              //
// console.log(maximumSum([-6, -1, -8]))