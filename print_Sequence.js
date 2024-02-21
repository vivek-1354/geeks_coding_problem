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

obj.printPattern(16)   // 16 11 6 1 -4 1 6 11 16