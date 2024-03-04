let array = [1, 5, 3, 8, 12]


//  we have to return sum of all profit during  the entire  trading

function stock_buy_sell(arr) {
    let n = arr.length
    let totalProfit = 0;
    for (let i = 0; i < n - 1; i++) {
        if (arr[i + 1] > arr[i]) {
            totalProfit += arr[i + 1] - arr[i]
        }
    }
    return totalProfit
}

console.log(stock_buy_sell(array))
console.log(stock_buy_sell([10, 10, 10, 10, 10]))
console.log(stock_buy_sell([30, 20, 10]))

console.log(stock_buy_sell([10, 20, 30]))
console.log(stock_buy_sell([1, 5, 3, 1, 2, 8]))
console.log(stock_buy_sell([1, 5, 3, 8, 12]))
