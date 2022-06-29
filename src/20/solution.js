/**
 * Calculates the factorial of n
 *
 * @param n is a non-negative integer
 * @returns the factorial of n
 */
function factorial(n) {
    if (n <= 1 ) {
        return BigInt(1);
    }
    return BigInt(n)* factorial(n-1);
}

function sumFactorialDigits(n) {
    const factorialOfn = BigInt(factorial(n));
    const arrayOfDigits = factorialOfn.toString().split("").map(stringDigit => parseInt(stringDigit));
    return arrayOfDigits.reduce((x,y) => x+y, 0);
}

console.log(sumFactorialDigits(100));