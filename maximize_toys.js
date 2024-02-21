// Money you have K = 50

const toysCosts = [1, 12, 5, 111, 200, 1000, 10]


// you have to find how many toys you can buy from K rupee

// you can not buy multiple toy of same price


function maxToys(toysPrice, K) {
    let res = 0
    for (let price of toysPrice) {
        if (K <= 0) {
            return res
        }
        if (price <= K) {
            res++
            K = K - price
        }
    }
    return res
}

console.log(maxToys(toysCosts, 50))
console.log(maxToys([20, 30, 50], 100))


