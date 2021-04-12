const computePowerIt = (n, p) => {
    let result = 1
    if (p == 0) {
        return 1
    }
    else if (p > 0) {
        for (let i = 1; i <= p; i++) {
            result = n * result
        }
        return result
    }
}

console.log(computePowerIt(5, 5))

const computePowerRec = (n, p) => {
    let result = 1
    if (p == 0) {
        return 1
    }
    if (p == 1) {
        return n
    }
    if (p > 1) {
        return n * computePowerRec(n, p - 1)
    }

}

console.log(computePowerRec(5, 5))



