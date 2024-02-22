function convertToWave(n, arr) {
    for (let i = 1; i < n; i++) {
        console.log(i)
        let temp = arr[i]
        arr[i] = arr[i - 1]
        arr[i - 1] = temp
        i++
    }
    return arr
}

console.log(convertToWave(5, [1, 2, 3, 4, 5]))  // [2 1 4 3 5]