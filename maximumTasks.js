function maxTasks(arr) {


    let res = 0;

    for (let pair of arr) {
        let max = 0
        for (let j = 1; j < arr.length; j++) {
            if (pair[1] <= arr[j][0]) {
                max++
            }
        }
        res = Math.max(res, max)
    }
    return res
}





const li = [[1, 5], [2, 5], [1, 7], [6, 9], [8, 12], [9, 13]]


console.log(maxTasks(li))
