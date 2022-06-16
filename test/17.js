import { numberLetterCounts, numberToWord, threeDigitNumberToWord } from "../src/17/solution.js";
import assert from "assert";


describe("17", function() {
    // Converting positive integers up to 1000 (exclusive) into words
    describe("threeDigitNumberToWord", function() {
        /**
         * TESTING STRATEGY
         *
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
        /**
         * TESTING STRATEGY
         *
         * Partition on value of n
         *      - 0 < n < 10^3
         *      - n = 10^3
         *      - 10^3 < n < 10^6
         *      - n = 10^6
         *      - 10^6 < n < 10^9
         *      - n = 10^9
         *      - 10^9 < n < 10^12
         *      - n = 10^12
         *      - 10^12 < n < 10^15
         */
        it("under a thousand", function(){
            const number = 420;
            const wordForNumber = numberToWord(number);
            const correctWordForNumber = "four hundred and twenty";
            assert.strictEqual(wordForNumber, correctWordForNumber,
                "Expected numberToWord to return the correct name for the number");
        });

        it("one thousand", function(){
            const number = 1000;
            const wordForNumber = numberToWord(number);
            const correctWordForNumber = "one thousand";
            assert.strictEqual(wordForNumber, correctWordForNumber,
                "Expected numberToWord to return the correct name for the number");
        });

        it("between one thousand and one million", function(){
            const number = 32010;
            const wordForNumber = numberToWord(number);
            const correctWordForNumber = "thirty-two thousand ten";
            assert.strictEqual(wordForNumber, correctWordForNumber,
                "Expected numberToWord to return the correct name for the number");
        });

        it("one million", function(){
            const number = 1000000;
            const wordForNumber = numberToWord(number);
            const correctWordForNumber = "one million";
            assert.strictEqual(wordForNumber, correctWordForNumber,
                "Expected numberToWord to return the correct name for the number");
        });

        it("between one million and one billion", function(){
            const number = 4040404;
            const wordForNumber = numberToWord(number);
            const correctWordForNumber = "four million forty thousand four hundred and four";
            assert.strictEqual(wordForNumber, correctWordForNumber,
                "Expected numberToWord to return the correct name for the number");
        });

        it("one billion", function(){
            const number = 1000000000;
            const wordForNumber = numberToWord(number);
            const correctWordForNumber = "one billion";
            assert.strictEqual(wordForNumber, correctWordForNumber,
                "Expected numberToWord to return the correct name for the number");
        });

        it("between one billion and one trillion", function(){
            const number = 12345678900;
            const wordForNumber = numberToWord(number);
            const correctWordForNumber = "twelve billion three hundred and forty-five million six hundred and seventy-eight thousand nine hundred";
            assert.strictEqual(wordForNumber, correctWordForNumber,
                "Expected numberToWord to return the correct name for the number");
        });

        it("one trillion", function(){
            const number = 1000000000000;
            const wordForNumber = numberToWord(number);
            const correctWordForNumber = "one trillion";
            assert.strictEqual(wordForNumber, correctWordForNumber,
                "Expected numberToWord to return the correct name for the number");
        });

        it("between one trillion and one quadrillion", function(){
            const number = 543000543000543;
            const wordForNumber = numberToWord(number);
            const correctWordForNumber = "five hundred and forty-three trillion five hundred and forty-three million five hundred and forty-three";
            assert.strictEqual(wordForNumber, correctWordForNumber,
                "Expected numberToWord to return the correct name for the number");
        });
    });

    // Counts how many letters (not uniquely-counted) are needed to spell all numbers up to `limit`
    describe("numberLetterCount", function() {
        /**
         * TESTING STRATEGY
         *
         * Uses same values as the tests available at freeCodeCamp
         */
        it("5", function() {
            const numberOfLetters = numberLetterCounts(5);
            assert.strictEqual(numberOfLetters, 19, "Expected the correct number of letters");
        });

        it("150", function() {
            const numberOfLetters = numberLetterCounts(150);
            assert.strictEqual(numberOfLetters, 1903, "Expected the correct number of letters");
        });

        it("1000", function() {
            const numberOfLetters = numberLetterCounts(1000);
            assert.strictEqual(numberOfLetters, 21124, "Expected the correct number of letters");
        });
    });
});
