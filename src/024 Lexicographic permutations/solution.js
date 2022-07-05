/**
 * Calculates the factorial of a number
 *
 * @param n non-negative integer
 * @returns an integer representing the factorial of `n`
 */
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n-1);
}

/**
 * Returns the `n`-th lexicographic permutation of the elements of `arr`.
 *
 * @param arr an array of digits or letters sorted in lexicographic order that
 * does not contain duplicates
 * @param n positive integer, must be less than or equal to arr.length!
 * @returns an array representing the n-th lexicographic permutation of `arr`
 */
function lexicographicPermuttationOfArray(arr, n) {
    // Will be implemented recursively: finds the first character of the `n`-th
    // permutation and then recurses on an array formed by the rest of the
    // characters.

    // if there is only one element, or we are looking for the 1st permutation
    // just return the elements of current array in this order, as arr is sorted
    if (arr.length === 1 || n === 0) {
        return arr;
    }

    // Find the first character.
    // There will be (arr.length-1)! permutations starting with each character
    const permutationsStartingWithEachCharacter= factorial(arr.length-1);
    const firstCharacterIndex = Math.floor(n/permutationsStartingWithEachCharacter);
    const firstCharacter = arr[firstCharacterIndex];

    // Get the rest of the elements, in order, by making a copy of the original array
    // and removing the first character of the `n`-th permutation
    const restOfTheElements = [...arr];
    restOfTheElements.splice(firstCharacterIndex, 1);

    const permutationsLeft = n - permutationsStartingWithEachCharacter*firstCharacterIndex;
    const permutationOfRestOfTheElements = lexicographicPermuttationOfArray(restOfTheElements, permutationsLeft);


    //console.log("first: ", firstCharacter, "; rest: ", restOfTheElements, "; recursive value of n: ", permutationsOfRestOfElements);
    return [firstCharacter].concat(permutationOfRestOfTheElements)

}

function lexicographicPermutations(n) {
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const nthPermutainOfDigits = lexicographicPermuttationOfArray(digits, n);
    return parseInt(nthPermutainOfDigits.join(""));
}

console.log(lexicographicPermutations(725760));