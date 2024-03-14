
const arr = [2, 8, 3, 9, 6, 5, 4]


function getSum1(s, e) {
    return arr.slice(s, e + 1).reduce((a, b) => a + b)
}

// console.log(getSum(0, 2))     //13
// console.log(getSum(1, 3))     //20
// console.log(getSum(2, 6))     //27

function getSum2(arr, s, e) {
    let prefixSum = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        prefixSum.push(prefixSum[i - 1] + arr[i])
    }
    if (s === 0) {
        return prefixSum[e]
    } else {
        return prefixSum[e] - prefixSum[s - 1]
    }
}


// console.log(getSum2(arr, 0, 2))
// console.log(getSum2(arr, 1, 3))
// console.log(getSum2(arr, 2, 6))
// console.log(getSum2([2, 3, 5, 4, 6, 1], 0, 2))



// here we first multiply from 1 to n. for first element we arr[0]*1, for second arr[1]*2, for third arr[2]*3, like that,
function getSum3(arr, s, e) {
    let prefixSum = [arr[0]]
    let pWSum = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        prefixSum.push(prefixSum[i - 1] + arr[i])
        pWSum.push(prefixSum[i - 1] + arr[i] * (i + 1))
    }
    // if (s === 0) {
    //     return pWSum[e]
    // } else {
    //     return pWSum[e] - prefixSum[s - 1]
    // }
    console.log(prefixSum)
    console.log(pWSum)
}
console.log(getSum3([2, 3, 5, 4, 6, 1], 0, 2))
// console.log(getSum3([2, 3, 5, 4, 6, 1], 2, 3))