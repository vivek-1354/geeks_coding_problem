
const Maximum_length_Even_Odd_subArray = (arr) => {
    let res = 1

    for (let i = 0; i < arr.length; i++) {
        let count = 1
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] % 2 === 0 && arr[j - 1] % 2 !== 0 ||
                arr[j] % 2 !== 0 && arr[j - 1] % 2 === 0
            ) {
                count++;
            }
            else {
                break
            }
        }
        res = Math.max(res, count)
    }
    return res
}


// efficient solution in O(n) time 



let array = [5, 10, 20, 6, 3, 8]   // output: = 3  , explanation 6, 3, 8  even, odd, even
console.log(Maximum_length_Even_Odd_subArray(array))



// In kadane's algorithm we begin traversing an array from the second element and for every element 
// there are two cases, either you begin a new subarray or you extend the previous subArray.

function Maximum_length_Even_Odd_subArray2(arr) {
    let res = 1
    let count = 1

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && arr[i - 1] % 2 !== 0 ||
            arr[i] % 2 !== 0 && arr[i - 1] % 2 === 0
        ) {
            count++;
            res = Math.max(res, count)
        }
        else {
            count = 1
        }
    }
    return res

}
console.log(Maximum_length_Even_Odd_subArray2(array))