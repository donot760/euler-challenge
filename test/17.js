import { numberLetterCounts, threeDigitNumberToWord } from "../src/17/solution.js";
import assert from "assert";


describe("17", function() {
    // Converting positive integers up to 1000 (exclusive) into words
    describe("threeDigitNumberToWord", function() {
        /**
         * Partition on value and number of digits
         *     - 0
         *     - single digit, non-zero
         *     - double digits, less than 20
         *     - double digits, greater than or equal to 20
         *     - triple digits
         *
         * Partition on largest multiple of 10 dividing the number:
         *     - not divisible by 10
         *     - divisible by 10 but not by 100
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
        it("zero", function() {
            // shall return empty string
            const number = 0;
            const wordForNumber = threeDigitNumberToWord(number);
            const correctWordForNumber = "";
            assert.strictEqual(wordForNumber, correctWordForNumber,
                "Expected threeDigitNumberToWord to return the correct name for the number");
        });

        it("single digit", function(){
            const number = 4;
            const wordForNumber = threeDigitNumberToWord(number);
            const correctWordForNumber = "four";
            assert.strictEqual(wordForNumber, correctWordForNumber,
                "Expected threeDigitNumberToWord to return the correct name for the number");
        });

        it("double digits, less than 20, not divisible by 10", function(){
            const number = 13;
            const wordForNumber = threeDigitNumberToWord(number);
            const correctWordForNumber = "thirteen";
            assert.strictEqual(wordForNumber, correctWordForNumber,
                "Expected threeDigitNumberToWord to return the correct name for the number");
        });

        it("double digits, greater than 20, not divisible by 10, spelled with dash", function(){
            const number = 67;
            const wordForNumber = threeDigitNumberToWord(number);
            const correctWordForNumber = "sixty-seven";
            assert.strictEqual(wordForNumber, correctWordForNumber,
                "Expected threeDigitNumberToWord to return the correct name for the number");
        });

        it("double digits, greater than 20, divisible by 10", function(){
            const number = 80;
            const wordForNumber = threeDigitNumberToWord(number);
            const correctWordForNumber = "eighty";
            assert.strictEqual(wordForNumber, correctWordForNumber,
                "Expected threeDigitNumberToWord to return the correct name for the number");
        });

        it("100 (edge case)", function(){
            const number = 100;
            const wordForNumber = threeDigitNumberToWord(number);
            const correctWordForNumber = "one hundred";
            assert.strictEqual(wordForNumber, correctWordForNumber,
                "Expected threeDigitNumberToWord to return the correct name for the number");
        });

        it("triple digits, divisible by 100", function(){
            const number = 300;
            const wordForNumber = threeDigitNumberToWord(number);
            const correctWordForNumber = "three hundred";
            assert.strictEqual(wordForNumber, correctWordForNumber,
                "Expected threeDigitNumberToWord to return the correct name for the number");
        });

        it("triple digits, not divisible by ten, spellen with `and`", function(){
            const number = 666;
            const wordForNumber = threeDigitNumberToWord(number);
            const correctWordForNumber = "six hundred and sixty-six";
            assert.strictEqual(wordForNumber, correctWordForNumber,
                "Expected threeDigitNumberToWord to return the correct name for the number");
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
