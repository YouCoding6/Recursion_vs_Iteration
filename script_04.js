const isPrimeNumber = (n) => {
    let count = 0
    if (n < 1) {
        return ("You need to enter a natural number!")
    }
    else {
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                count++
            }
        }
        if (count > 0) {
            return false
        }
        else {
            return true
        }
    }
}


const isPrimeNumberRec = (n, i) => {

    if (n <= 2) {
        return (n == 2) ? true : false
    }
    if (n % i == 0) {
        return false
    }
    if (i * i > n) {
        return true
    }
    return isPrimeNumberRec(n, i + 1)

}

const findSupPrime = (n) => {
    let i = n + 1
    while (!isPrimeNumber(i)) {
        i += 1
    }

    return (i)
}

// console.log(findSupPrime(8))

const findSupPrimeRec = (n) => {
    n += 1
    if (isPrimeNumberRec(n, 2)) {
        return n
    }
    else {
        return findSupPrimeRec(n)
    }
}

console.log(findSupPrimeRec(3))