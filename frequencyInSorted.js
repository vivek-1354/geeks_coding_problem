// count frequency in sorted array


function countFrequency(sortedArr) {
    let count = 1
    for (let i = 1; i < sortedArr.length; i++) {
        if (sortedArr[i] != sortedArr[i - 1]) {
            console.log(sortedArr[i - 1] + "=>  " + count)
            count = 1
        }
        else {
            count++
        }
        if (i === sortedArr.length - 1) {
            console.log(sortedArr[i] + "=>  " + count)
        }
    }
}

// countFrequency([10, 10, 10, 20, 20, 20, 20, 20, 30, 40, 40, 50, 50, 60])
countFrequency([10, 10, 10])
countFrequency([10, 20, 30])