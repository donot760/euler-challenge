const DIGITS = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
];

const TEN_TO_NINETEEN = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
];

const TENS = [
    '',
    '',
    'twenty',
    'thirty',
    'fourty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
];

const DESCENDING_POWERS_OF_TEN = [
    'trillion',
    'billion',
    'million',
    'thousand',
    ""
]

/**
 * Converts an integer under 1000 to a string representing its name in words.
 *
 * @param n integer between 0 and 999 inclusive
 * @returns a string representing the cardinal word for n. Returns empty string for 0.
 */
export function threeDigitNumberToWord(n) {
    // divide number into the three digits (may be 0s)
    const hundreds = Math.floor(n/100);
    const tens = Math.floor((n-hundreds*100)/10);
    const units = n - hundreds*100 - tens*10;

    // hundreds
    let hundredsWord = "";
    if (hundreds !== 0) {
        hundredsWord += DIGITS[hundreds];
        hundredsWord += " hundred";
    }

    // tens and units
    let twoDigitWord = "";
    if (tens === 0) {
        twoDigitWord += DIGITS[units];
    } else if (tens === 1) {
        twoDigitWord += TEN_TO_NINETEEN[units];
    } else {
        twoDigitWord += TENS[tens];
        if (units !== 0) {
            twoDigitWord += "-";
            twoDigitWord += DIGITS[units];
        }
    }

    if (hundreds === 0) {
        return twoDigitWord;
    }

    if (twoDigitWord === "") {
        return hundredsWord;
    }

    return hundredsWord + " and " + twoDigitWord;
}


/**
 * Converts a positive integer to a string representing its name in words.
 *
 * @param n positive integer, smaller than a quadrillion
 * @returns a string representing the cardinal word for n
 */
export function numberToWord(n){
    const maxPowerOfTen = 15; // must be a multiple of three
    const quadrillionStringOfn = n.toString().padStart(maxPowerOfTen, "0");
    const threeDigitNumbers = [];
    for (let ii = 0; ii < maxPowerOfTen; ii = ii + 3) { // ii+3 because we want three-digit sequences
        threeDigitNumbers.push(parseInt(quadrillionStringOfn.slice(ii, ii+3)));
    }
    const threeDigitNumberWords = threeDigitNumbers.map(threeDigitNumberToWord);

    let finalWord = "";
    for (let ii = 0; ii < maxPowerOfTen/3; ii++) {
        const threeDigitWord = threeDigitNumberWords[ii];
        if (threeDigitWord !== "") {
            finalWord += " " + threeDigitWord + " " + DESCENDING_POWERS_OF_TEN[ii];
        }
    }

    // at this point finalWord starts with a blank space and migth have a trailing
    // white space (iff the last three digits are non-zero)
    const lastCharacter = finalWord[finalWord.length-1];
    const startIndex = 1;
    const endIndex = (lastCharacter === " ") ? finalWord.length-1 : finalWord.length;

    finalWord = finalWord.substring(startIndex, endIndex);

    return finalWord;
}

export function numberLetterCounts(limit) {

    return true;
  }

  numberLetterCounts(5);