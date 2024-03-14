function largestAndSecondLargest(arr) {
    let maxEle = Math.max(...arr)
    let maxIdx = arr.indexOf(maxEle)


    arr = arr.map((ele, idx) => {
        if (ele === maxEle) {
            return -1                       // here we repalace all ele which are equal to maxEle with -1.as given condition 
        } else {
            return ele
        }
    })
    console.log(arr)
    // arr[maxIdx] = -Infinity
    let secondEle = Math.max(...arr)

    return [maxEle, secondEle]
}

console.log(largestAndSecondLargest([2, 1, 2]))