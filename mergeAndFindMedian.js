// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2

function findMedianSortedArrays(arr1, arr2) {
    // const mergedArr = [...arr1, ...arr2].sort((a, b) => a - b)
    const mergedArr = []

    let i = 0, j = 0
    let n = arr1.length, m = arr2.length

    while (i < n && j < m) {
        if (arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i])
            i++
        } else if (arr1[i] > arr2[j]) {
            mergedArr.push(arr2[j])
            j++
        } else {
            i++
            j++
        }
    }
    for (let a = i; a < n; a++) {
        mergedArr.push(arr1[a])
    }
    for (let a = j; a < m; a++) {
        mergedArr.push(arr2[a])
    }

    let len = m + n

    let mid = Math.floor(len / 2)
    if (len % 2 === 0) {
        return (mergedArr[mid] + mergedArr[mid - 1]) / 2
    } else {
        return mergedArr[mid]
    }
}


console.log(findMedianSortedArrays([1, 3], [2, 4]))    // 2.5 
console.log(findMedianSortedArrays([1, 3], [2]))      // 2
