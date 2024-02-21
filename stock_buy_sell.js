// 


const arr = [100, 180, 260, 310, 40, 535, 695]


function stockBuySell(array) {
    const idx = []
    let buy = 0
    let sell
    for (let i = 0; i < array.length; i++) {
        for (let j = buy + 1; j < array.length; j++) {
            if (array[j] < array[i]) {
                sell = j - 1
                idx.push([buy, sell])
                buy = j
            } else if (j === array.length - 1) {
                idx.push([buy, j])
            }
            i++
        }
    }
    return idx
}

console.log(stockBuySell(arr))

const stockBuySell2 = (arr) => {
    let buy = 0;
    let idx = []

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            idx.push([buy, i])
            buy = i + 1
        }
        if (i + 1 === arr.length - 1) {
            idx.push([buy, i + 1])
        }
    }
    return idx
}


console.log(stockBuySell2(arr))


const stockBuySell3 = (arr) => {
    let buy = 0;
    let idx = []

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            idx.push([i, i + 1])
        }
    }
    return idx
}
console.log(stockBuySell3(arr))