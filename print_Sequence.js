// Print a sequence of numbers starting with N, without using loop, where replace N with N - 5,
// until N > 0. After that replace N with N + 5 until N regains its initial value.



class Print {
    static input = 0;
    printPattern(n) {
        this.input = n
        this.pattern(n)
    }
    pattern2(n) {
        console.log(n)
        if (n === this.input) {
            return
        }
        return this.pattern2(n + 5)
    }
    pattern(n) {
        if (n < 0) {
            return this.pattern2(n)
        }
        console.log(n)
        return (this.pattern(n - 5))
    }
}

const obj = new Print()

// obj.printPattern(16)   // 16 11 6 1 -4 1 6 11 16


function printPattern(n) {
    const input = n;
    function pattern(n) {
        let flag = false
        console.log(n)
        if (n < 0) {
            flag = true;
        }
        if (flag) {
            console.log(n)
            if (n === input) {
                return
            }
            return pattern(n + 5)
        }
        if (!flag) {
            return pattern(n - 5)
        }
    }
    return pattern
}


// printPattern()(16)

function convertToWave(n, arr) {
    for (let i = 1; i < n; i++) {
        console.log(i)
        let temp = arr[i]
        arr[i] = arr[i - 1]
        arr[i - 1] = temp
        i++
    }

    return arr
}

console.log(convertToWave(5, [1, 2, 3, 4, 5]))