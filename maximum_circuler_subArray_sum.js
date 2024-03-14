
// Moduler airthmatic  index = i+j % n


function maximum_circuler_subArray_sum(arr) {
    let n = arr.length;

    let res = arr[0]

    for (let i = 0; i < n; i++) {
        let curr_sum = arr[i]
        let curr_max = arr[i]

        for (let j = 1; j < n; j++) {
            let index = (i + j) % n

            curr_sum += arr[index]
            curr_max = Math.max(curr_max, curr_sum)
        }

        res = Math.max(res, curr_max)
    }
    return res
}


console.log(maximum_circuler_subArray_sum([5, -2, 3, 4]))