
// we have to find maximum occuring element in the given Range.
// where left arr = [1,2,5,15]
//       right arr = [5,8,7,18]

// constraints: 0 <= left[i] <= right[i]  and range will be between 1 to 100.

function maximumAppearance(left, right) {
    let freq = new Array(100).fill(0)

    for (let i = 0; i < left.length; i++) {
        for (let j = left[i]; j <= right[i]; j++) {
            freq[j] += 1
        }
    }
    return freq.indexOf(Math.max(...freq))
}

console.log(maximumAppearance([1, 2, 4], [4, 5, 7]))

//  first pair (1,4) => [1,2,3,4]
// second pair (2,5) => [2,3,4,5]
// third pair (4,7)  => [4,5,6,7]

// 0, 1, 2, 2, 3, 2, 1, 1, 0, 0, 0, 0,
// 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
// 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
// 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
// 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
// 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
// 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
// 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
// 0, 0, 0, 0

// so, here element at index 4 has maximum count, so it will be answer.

//

// function insertAtIndex(arr, index, element) {
//     for (let i = arr.length; i >= index; i--) {
//         arr[i] = arr[i - 1];
//     }
//     arr[index] = element;
//     console.log(arr)
// }

// insertAtIndex([7, 7, 1, 1], 0, 3)
// insertAtIndex([7, 7, 1, 1], 4, 3)
// insertAtIndex([1, 2, 3, 4, 5], 5, 90)
