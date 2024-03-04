// write a function that return maximum consecutive 1's from given array.

function maxConsecutiveOnes(binArr) {
    let res = 0

    for (let i = 0; i < binArr.length; i++) {
        if (binArr[i] === 1) {
            let count = 1
            let j = i + 1

            while (j < binArr.length) {
                if (binArr[j] === 1) {
                    count++
                    j++
                } else { break }
            }
            res = Math.max(res, count)
        }
    }
    return res
}


console.log(maxConsecutiveOnes([1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0]))
console.log(maxConsecutiveOnes([1, 1, 1, 1]))
console.log(maxConsecutiveOnes([0, 1, 1, 0, 1, 0]))
console.log(maxConsecutiveOnes([0, 0, 0, 0]))


// efficient solution

function maxConsecutive(arr) {
    let res = 0
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            count++
            res = Math.max(res, count)
        } else {
            count = 0
        }
    }
    return res
}


console.log(maxConsecutive([1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0]))
console.log(maxConsecutive([1, 1, 1, 1]))
console.log(maxConsecutive([0, 1, 1, 0, 1, 0]))
console.log(maxConsecutive([0, 0, 0, 0]))