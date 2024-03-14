// find the majority element from an array, element called majority if, it is present more than n/2 times
// if array length is five then count of majority element should be at least 3


function findMajority(arr) {
    let maxEle;

    for (let i = 0; i < arr.length; i++) {
        let count = 1
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++
            }
        }
        if (count > Math.floor(arr.length / 2)) {
            return i
        }
    }
    return -1
}


// console.log(findMajority([8, 3, 3, 3, 3, 3, 4, 8, 8]))


// efficient solution
// It's works in two phases. The first phase finds out a candidate and  the firse phase guarantees that if there is a majority
// element in the array, then this candidate is going to be the majority element. The second phse checks whether the candidate found
// out by the first phase is actually a majority or not. The need of second phase is only there when you do not have a majority element


function findMajority2(arr) {
    let res = 0
    let count = 1

    for (let i = 1; i < arr.length; i++) {
        if (arr[res] === arr[i]) {
            count++
        } else {
            count--
        }
        if (count === 0) {
            res = i
            count = 1
        }
    }

    let count2 = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[res]) {
            count2++
        }
    }
    if (count2 <= Math.floor(arr.length / 2)) {
        return -1
    }
    return res
}


console.log(findMajority2([8, 3, 4, 8, 8]))
console.log(findMajority2([8, 8, 6, 6, 6, 4, 6]))
// console.log(findMajority2([8, 3, 3, 3, 3, 3, 4, 8, 8]))