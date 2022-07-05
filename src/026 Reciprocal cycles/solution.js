/**
 * Converts an irreducible fraction to its decimal representation. Must meet
 * gcd(`numerator`, `denominator`) = 1;
 *
 * @param numerator positive integer
 * @param denominator positive integer
 * @returns an object containing the whole part, prefix and repetend of the
 *          decimal form, stored as strings (the sting form accounts for the
 *          0s at the beginning of the prefix and/or repetend)
 */
function convertFractionToDecimal(numerator, denominator) {

    const decimalForm = {whole: "",
                     prefix: "",
                     repetend: ""}

    const value = numerator/denominator
    const wholePart = Math.floor(value).toString();
    decimalForm.whole = wholePart;

    // Do long division until the remainder is either 0, or start repeating itself
    const decimals = [];
    const remainders = [];
    let currentRemainder =  numerator - wholePart*denominator;
    while (currentRemainder !== 0) {
        //console.log("Inside while loop, remainders = ", remainders);
        const newDecimal = Math.floor(currentRemainder*10/denominator);
        remainders.push(currentRemainder);
        decimals.push(newDecimal);

        const newRemainder = currentRemainder*10 - newDecimal*denominator;
        //console.log(newRemainder);

        // Check if the remainder repeats itself
        for (let indexOfDecimalsSoFar = 0; indexOfDecimalsSoFar < decimals.length; indexOfDecimalsSoFar++) {
            const remainderAtIndex = remainders[indexOfDecimalsSoFar];
            if (newRemainder === remainderAtIndex) { // the fraction has a repetend starting at index `indexOfDecimalsSoFar`
                const prefix = decimals.slice(0, indexOfDecimalsSoFar);
                const repetend = decimals.slice(indexOfDecimalsSoFar);
                decimalForm.prefix = prefix.join("");
                decimalForm.repetend = repetend.join("");
                return decimalForm;
            }
        }

        // if the remainder does not repeat, just continue the division
        currentRemainder = newRemainder;

    }
    // if got here, there is no repetend
    const prefix = decimals.join("");
    decimalForm.prefix = prefix;

    return decimalForm;
}

function reciprocalCycles(n) {
    let lengthOfLongestRepetend = 0;
    let denominatorOfLongestRepetend = 1;
    for(let ii = 2; ii < n; ii++) {
        const decimal = convertFractionToDecimal(1, ii);
        const repetendLength = decimal.repetend.length;
        if (repetendLength > lengthOfLongestRepetend) {
            lengthOfLongestRepetend = repetendLength;
            denominatorOfLongestRepetend = ii;
        }
    }
    return denominatorOfLongestRepetend;
}

console.log(reciprocalCycles(1000));