
// We have to write a function that takes an array as argument and return whether array has equilibrium
// point or not. A element is called equilibrium point , if sum of elements presented in left side is
// equal to sum of elements presented in right side.

// The function should return true or false.


function checkEquilibriumPoint(arr) {
    const prefixSum = [arr[0]]
    let n = arr.length
    const rightPrefixSum = []
    rightPrefixSum[n - 1] = arr[n - 1]
    // let result = false

    for (let i = 1; i < n; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i]
    }

    for (let i = n - 2; i >= 0; i--) {
        rightPrefixSum[i] = rightPrefixSum[i + 1] + arr[i]
    }

    console.log(prefixSum, rightPrefixSum)
    for (let i = 0; i < n; i++) {
        if (prefixSum[i] === rightPrefixSum[i]) {
            return true
        }
    }
    return false
    // console.log(prefixSum, rightPrefixSum)
}


// [ 3, 7, 15, 6, 26, 32 ]
// [ 32, 29, 25, 17, 26, 6 ]

// console.log(checkEquilibriumPoint([3, 4, 8, -9, 20, 6]))  // []
console.log(checkEquilibriumPoint([4, 2, -2]))  // []
console.log(checkEquilibriumPoint([3, 4, 8, -9, 9, 7]))  // []
// console.log(checkEquilibriumPoint([4, 2, 2]))  // []