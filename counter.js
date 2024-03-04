function counter() {
    let count = 0

    function increment() {
        count++;
    }
    function decrement() {
        count--
    }
    return { increment, decrement }
}
