const computeSquareRoot = (n, g) => {
    if (!g) {
        g = n / 2.0;
    }
    const guess = (n / g + g) / 2.0;
    console.log(guess)
    if (g === guess) return g;
    else return computeSquareRoot(n, guess);
};

console.log(computeSquareRoot(5, 8));

// alert(computeSquareRoot(24, 4.8));
