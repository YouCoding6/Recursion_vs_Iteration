const computeFactorialIt = (n) => {
    let result = 1
    if (n == 0) {
        return 1
    }
    else if (n > 0) {
        for (let i = 1; i <= n; i++) {
            result = result * i
        }
        return result
    }

}

console.log(computeFactorialIt(5))


const computeFactorialRec = (n) => {
    if (n == 0) {
        return 1
    }
    else if (n > 0) {
        return computeFactorialRec(n - 1) * n
    }
}

console.log(computeFactorialRec(5))