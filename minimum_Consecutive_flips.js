// Our Task: Given a binary array, we need to convert this array into an array that either contains all 1s or all 0s. 
//  We need to do it using the minimum number of group flips. 


function minimunFlips(arr) {
    let n = arr.length

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] != arr[i - 1]) {
            if (arr[i] != arr[0]) {
                console.log(`from ${i} to `)
            } else {
                console.log(console.log(i - 1))
            }
        }
    }
    if (arr[n - 1] != arr[0]) {
        console.log(n - 1)
    }
}

minimunFlips([0, 0, 1, 1, 0, 0, 1, 1, 0, 1])