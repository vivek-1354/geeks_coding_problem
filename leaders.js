// find leaders in an array 
// element will be called leader if no greater elements found right side of element.

let lis = [7, 10, 4, 3, 6, 5, 2]   // in this array leaders are 10 , 6, 5,  2


function findLeaders(arr) {
    let n = arr.length
    let leaders = []

    for (let i = 0; i < n; i++) {
        let flag = true
        for (let j = i + 1; j < n; j++) {
            if (arr[j] >= arr[i]) {
                flag = false
                break
            }
        }
        if (flag) {
            leaders.push(arr[i])
        }
    }
    return leaders
}

console.log(findLeaders(lis))
console.log(findLeaders([10, 20, 30]))
console.log(findLeaders([30, 20, 10]))

