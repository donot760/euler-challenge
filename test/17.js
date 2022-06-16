import { numberLetterCounts } from "../src/17/solution.js";
import assert from "assert";


describe("17", function() {
    // Converting positive integers up to 1000 exclusive into words
    describe("threeDigitNumberToWord", function() {
        /**
         * Partition on number of digits
         *     - single digit
         *     - double digits, less than 20
         *     - double digits, greater than or equal to 20
         *     - triple digits
         *
         * Partition on largest multiple of 10 dividing the number:
         *     - not divisible by 10
         *     - divisible by 10 but not 100
         *     - divisible by 100
         *
         * Partititon on whether name contains a hyphen: (ex: twenty-four)
         *     - yes
         *     - no
         *
         * Partition on whether name contains the particle `and`: (ex: three hundred and three)
         *     - yes
         *     - no
         */
        it("just a random test", function(){
            true;
        });
    });

    // Converting positive integers up to a quadrillion, exclusive into words
    describe("numberToWord", function() {
        it("just a random test", function(){
            true;
        });
    });

    // Counts how many letters (not uniquely-counted) are needed to spell all numbers up to `limit`
    describe("numberLetterCount", function() {
        /**
         * Uses same values as the tests available at freeCodeCamp
         */
        it("5", function() {
            const numberOfLetters = numberLetterCounts(5);
            assert.isNumber(numberOfLetters, "Expected numberLetterCounts to return a number");
            assert.strictEqual(numberOfLetters, 19, "Expected the correct number of letters");
        });

        it("150", function() {
            const numberOfLetters = numberLetterCounts(150);
            assert.strictEqual(numberOfLetters, 19, "Expected the correct number of letters");
        });

        it("1000", function() {
            const numberOfLetters = numberLetterCounts(1000);
            assert.strictEqual(numberOfLetters, 19, "Expected the correct number of letters");
        });
    });
});
