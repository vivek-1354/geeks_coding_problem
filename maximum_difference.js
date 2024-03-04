// we have to find maximum difference between two elements, 
// such that arr[j] - arr[i] where j > i

let lis = [2, 3, 10, 6, 4, 18, 1]   // here maximum difference is arr[2]- arr[0] ; => 10-2; => 8



function maximumDiffernce(arr) {
    let res = -Infinity
    let n = arr.length
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            res = Math.max(res, arr[j] - arr[i])
        }
    }
    return res
}

// console.log(maximumDiffernce(lis))
// console.log(maximumDiffernce([7, 9, 5, 6, 3, 2]))
// console.log(maximumDiffernce([10, 20, 30]))
// console.log(maximumDiffernce([30, 10, 8, 2]))


// efficient solution O(n)

function maxDifference2(arr) {
    let res = arr[1] - arr[0]                // Here we store difference of first two element
    let minVal = arr[0]                      // then we set minVal as first element if middle if we find smaller value
    // than minVal we simply update with min value
    for (let i = 1; i < arr.length; i++) {
        res = Math.max(res, arr[i] - minVal)
        minVal = Math.min(minVal, arr[i])
    }
    return res
}
console.log(maxDifference2([7, 9, 5, 6, 3, 2]))