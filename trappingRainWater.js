// how much water you can collect 

// if your array is increasing or decreasing order then you collect zero amount of water



function rainingWater(arr) {
    let n = arr.length
    let res = 0

    for (let i = 1; i < n - 1; i++) {
        let lMax = arr[i]
        for (let j = 0; j < i; j++) {
            lMax = Math.max(lMax, arr[j])
        }
        let rMax = arr[i]
        for (let j = i + 1; j < n; j++) {
            rMax = Math.max(rMax, arr[j])
        }
        res += Math.min(lMax, rMax) - arr[i]
    }
    return res
}


// console.log(rainingWater(heights))
// console.log(rainingWater([1, 2, 3]))
// console.log(rainingWater([3, 2, 1]))


// efficient solution
let heights = [3, 0, 1, 2, 5]

function storeRainWater(arr) {
    let n = arr.length
    let res = 0

    let lMax = []
    let rMax = []

    lMax[0] = arr[0]
    rMax[n - 1] = arr[n - 1]

    for (let i = 1; i < n; i++) {
        lMax[i] = Math.max(lMax[i - 1], arr[i])
    }

    for (let j = n - 2; j >= 0; j--) {
        rMax[j] = Math.max(rMax[j + 1], arr[j])
    }

    for (let i = 1; i < n - 1; i++) {
        res += Math.min(lMax[i], rMax[i]) - arr[i]
    }
    return res

}

console.log(storeRainWater(heights))
console.log(storeRainWater([1, 2, 3]))
console.log(storeRainWater([3, 2, 1]))