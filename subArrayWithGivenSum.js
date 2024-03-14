function subArrayWithGivenSum(arr, sum) {
    let res = -Infinity
    for (let i = 0; i < arr.length; i++) {
        total = arr[i]
        if (total === sum) {
            // console.log(i)
            return true
        }
        for (let j = i + 1; j < arr.length; j++) {
            total += arr[j]

            if (total === sum) {
                // console.log(i + "  to  " + j)
                return true
            }
        }

    }
    return false
}

// console.log(subArrayWithGivenSum([1, 4, 20, 3, 10, 5], 3))
// console.log(subArrayWithGivenSum([1, 4, 20, 3, 10, 5], 28))
// console.log(subArrayWithGivenSum([1, 4, 20, 3, 10, 5], 15))
// console.log(subArrayWithGivenSum([1, 4, 0, 0, 3, 10, 5], 7))
// console.log(subArrayWithGivenSum([2, 4], 3))


// efficient solution

function isSubSum(arr, sum) {
    let s = 0;
    let curr = 0
    for (let e = 0; e < arr.length; e++) {
        curr += arr[e]
    }
    while (sum < curr) {
        curr -= arr[s]
        s++
    }
    if (curr === sum) {
        return true
    }
    return false
}

// console.log(isSubSum([1, 4, 20, 3, 10, 5], 3))
// console.log(isSubSum([1, 4, 20, 3, 10, 5], 28))
// console.log(isSubSum([1, 4, 20, 3, 10, 5], 15))
console.log(isSubSum([1, 4, 3, 10, 5, 2], 7))
// console.log(isSubSum([2, 4], 3))
// console.log(isSubSum([4, 8, 12, 5], 17))