let arr = [2, 3, 4, 5, 6]

// we have to insert an element at first position

function insert(arr, ele) {
    for (let i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1]
    }
    arr[0] = ele
    console.log(arr)
}

// insert(arr, 1)

function insert_At_pos(arr, pos, ele) {
    for (let i = arr.length; i >= pos; i--) {
        arr[i] = arr[i - 1]
    }
    arr[pos - 1] = ele
    console.log(arr)
}

// insert_At_pos(arr, 8, 10)


// delete from array

function deleteEle(arr, ele) {
    let idx = arr.indexOf(ele)

    if (idx !== -1) {
        for (let i = idx; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1]
        }
        arr.length--;

        console.log(arr)
    } else {
        console.log("element not present")
    }
}


// deleteEle([3, 8, 12, 5, 6], 12)


// find largest element


function findLargest_ele(arr) {
    for (let i = 0; i < arr.length; i++) {
        let flag = true;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                flag = false
            }
        }
        if (flag) {
            return i
        }
    }
}

// console.log(findLargest_ele([5, 8, 20, 10]))
// console.log(findLargest_ele([5, 8]))

// optimize find largest ele

function findMax(arr) {
    let res = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[res]) {
            res = i
        }
    }
    return res
}
// console.log(findMax([5, 8, 20, 10, 30]))


// find second largest

function findSecondLargest(arr) {
    let largest = findMax(arr)

    let res = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[largest]) {
            if (res === -1) {
                res = i
            } else if (arr[i] > arr[res]) {
                res = i
            }
        }
    }
    return res
}

// console.log(findSecondLargest([5, 20, 12, 20, 10]))


// method 3 


function secondLargest(arr) {
    const maxEle = Math.max(...arr)
    const maxIdx = arr.indexOf(maxEle)
    arr[maxIdx] = -Infinity

    for (let i = maxIdx; i < arr.length; i++) {
        if (arr[i + 1] === maxEle) {
            arr[i + 1] = -Infinity
        }
    }

    console.log(arr)
    return Math.max(...arr)
}

// console.log(secondLargest([5, 20, 12, 20, 10, 20]))


function find_max_and_min(arr) {
    let maxIdx = 0;
    let minIdx = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[maxIdx]) {
            maxIdx = i
        }
        else if (arr[i] < arr[minIdx]) {
            minIdx = i
        }
    }

    return { maxIdx, minIdx }
}


const { maxIdx, minIdx } = find_max_and_min([5, 20, 12, 30, 10])
// console.log(maxIdx)
// console.log(minIdx)

// console.log(find_max_and_min([5, 20, 12, 20, 10]).maxIdx)


// check if array is sorted or not


function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false
        }
    }
    return true;
}

// console.log(isSorted([10, 20, 30, 45, 50, 60,]))  // true


// reverse an array

function reverse(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        // [arr[start], arr[end]] = [arr[end], arr[start]]
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        // console.log(arr)
        start++;
        end--;
    }
    return arr
}

// console.log(reverse([10, 20, 30, 40, 50, 60, 70]))
// console.log(reverse([30, 7, 5, 10]))

// console.log(12 === "12")
// console.log(typeof "44")

//  remove duplicate from a sorted array

function removeDuplicates(arr) {
    const sortedArr = [arr[0]]    // we insert first element because first ele will be always present in sorted array

    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] != arr[i]) {
            sortedArr.push(arr[i])
        }

    }
    return sortedArr
}

// console.log(removeDuplicates([1, 2, 3, 3, 3, 4, 5, 5, 5, 6, 6, 7, 8, 9]))
// console.log(removeDuplicates([10, 20, 20, 20, 30, 30, 40, 50, 60, 70, 70, 70]))

// remove duplicate and return size of distinct array


function removeDuplicates2(arr) {
    let temp = new Array(arr.length)
    temp[0] = arr[0]
    let size = 1

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] != temp[size - 1]) {
            temp[size] = arr[i]
            size++
        }
    }
    return size
}
// console.log(removeDuplicates2([1, 2, 3, 3, 3, 4, 5, 5, 5, 6, 6, 7, 8, 9]))
// console.log(removeDuplicates2([10, 20, 20, 20, 30, 30, 40, 50, 60, 70, 70, 70]))
// console.log(removeDuplicates2([10, 10, 10, 10]))
// console.log(removeDuplicates2([10, 10, 10, 10, 20, 20, 20, 30, 30, 30]))

// remove duplicate without using extra space

function removeDuplicates3(arr) {
    let res = 1

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] != arr[res - 1]) {
            arr[res] = arr[i]
            res++
        }
    }
    return res
}
// console.log(removeDuplicates3([1, 2, 3, 3, 3, 4, 5, 5, 5, 6, 6, 7, 8, 9]))
// console.log(removeDuplicates3([10, 20, 20, 20, 30, 30, 40, 50, 60, 70, 70, 70]))
// console.log(removeDuplicates3([10, 10, 10, 10]))
// console.log(removeDuplicates3([10, 10, 10, 10, 20, 20, 20, 30, 30, 30]))

// remove zeros at the end


function removeZeroAtEnd(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] != 0) {
                    arr[i] = arr[j]
                    arr[j] = 0;
                    break;
                }
            }
        }
    }
    return arr
}

// console.log(removeZeroAtEnd(lis))
// console.log(removeZeroAtEnd([0, 0, 0, 10, 0]))

let lis = [8, 5, 0, 10, 0, 20]

// Here we track a count of non-zero element in countOfNonZero variable

// Then we loop through the array, If we will find non -zero element we simply increment
// the count, and when we find zero we ingore it and in the next interation if we will 
// find non -zero we simply swap them using countOfNonZero variable as index

function removeZero(arr) {
    let countOfNonZero = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            let temp = arr[i]
            arr[i] = arr[countOfNonZero];
            arr[countOfNonZero] = temp
            countOfNonZero++
        }
    }
    return arr
}

// console.log(removeZero(lis))

// left rotate an array by one

function leftRotateByOne(arr) {
    let n = arr.length
    let ele = arr[0]
    for (let i = 0; i < n - 1; i++) {
        arr[i] = arr[i + 1]
    }
    arr[n - 1] = ele
    // return arr
}


function leftRotateByPos(arr, pos) {
    for (let i = 0; i < pos; i++) {
        leftRotateByOne(arr)
    }
    return arr
}


// console.log(leftRotateByOne([1, 2, 3, 4, 5, 6]))
// console.log(leftRotateByPos([1, 2, 3, 4, 5, 6], 2))


// left rotate by given count using reverse function

function reverse2(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++;
        end--
    }
}

function leftRotateByD(arr, d) {
    let n = arr.length
    reverse2(arr, 0, d - 1)   // first reverse first d element
    reverse2(arr, d, n - 1)  // second reverse d to n-1 element
    reverse2(arr, 0, n - 1)  // third reverse full array from start to end

    return arr
}


console.log(leftRotateByD([1, 2, 3, 4, 5, 6], 2))