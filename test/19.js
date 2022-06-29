import assert from "assert";
import { isLeapYear, getDayOfTheWeekFromDate, DAYS_OF_THE_WEEK, countingSundays } from "../src/19/solution.js";
describe("19", function () {
    // Determining weather a year is a leap year
    describe("isLeapYear", function () {
        /**
         * TESTING STRATEGY
         *
         * Partition on value of the year:
         *      - year not divisible by 4 (common year)
         *      - year divisible by 4, but not 100 (leap year)
         *      - year divisible by 100, but not 400 (common year)
         *      - year divisible by 400 (leap year)
         */
        it("not divisible by 4", function () {
            const year = 1923;
            assert(!isLeapYear(year), "Expected 1923 to not be a leap year");
        });
        it("divisible by 4, but not 100", function () {
            const year = 1980;
            assert(isLeapYear(year), "Expected 1980 to be a leap year");
        });
        it("divisible by 100, but not 400", function () {
            const year = 1900;
            assert(!isLeapYear(year), "Expected 1900 to not be a leap year");
        });
        it("divisible by 400", function () {
            const year = 2000;
            assert(isLeapYear(year), "Expected 2000 to be a leap year");
        });
    });
    // Getting the day of the week from the date
    describe("getDayOfTheWeekFromDate", function () {
        /**
         * TESTING STRATEGY
         *
         * Partition on date:
         *      - 1st Jan 1900
         *      - between 2nd Jan 1900 and 28th Feb 1904 (no leap days since 1900)
         *      - 29th Feb 1904 (1st leap day since 1900)
         *      - between 1st March 1904 and 28th Feb 2000
         *      - 29th Feb 2000 (leap day on year divisible by 400)
         *      - after 1st March 2000
         */
        it("1st Jan 1900", function () {
            const day = 1;
            const month = 0; // January
            const year = 1900;
            const resultDayOfTheWeek = getDayOfTheWeekFromDate(day, month, year);
            const correctDayOfTheWeek = DAYS_OF_THE_WEEK.Monday;
            assert.strictEqual(resultDayOfTheWeek, correctDayOfTheWeek, "Expected the correct day of the week");
        });
        it("between 2nd Jan 1900 and 28th Feb 1904", function () {
            const day = 5;
            const month = 6; // July
            const year = 1903;
            const resultDayOfTheWeek = getDayOfTheWeekFromDate(day, month, year);
            const correctDayOfTheWeek = DAYS_OF_THE_WEEK.Sunday;
            assert.strictEqual(resultDayOfTheWeek, correctDayOfTheWeek, "Expected the correct day of the week");
        });
        it("29th Feb 1904", function () {
            const day = 29;
            const month = 1; // February
            const year = 1904;
            const resultDayOfTheWeek = getDayOfTheWeekFromDate(day, month, year);
            const correctDayOfTheWeek = DAYS_OF_THE_WEEK.Monday;
            assert.strictEqual(resultDayOfTheWeek, correctDayOfTheWeek, "Expected the correct day of the week");
        });
        it("between 1st March 1904 and 28th Feb 2000", function () {
            const day = 26;
            const month = 9; // October
            const year = 1964;
            const resultDayOfTheWeek = getDayOfTheWeekFromDate(day, month, year);
            const correctDayOfTheWeek = DAYS_OF_THE_WEEK.Monday;
            assert.strictEqual(resultDayOfTheWeek, correctDayOfTheWeek, "Expected the correct day of the week");
        });
        it("29th Feb 2000", function () {
            const day = 29;
            const month = 1; // February
            const year = 2000;
            const resultDayOfTheWeek = getDayOfTheWeekFromDate(day, month, year);
            const correctDayOfTheWeek = DAYS_OF_THE_WEEK.Tuesday;
            assert.strictEqual(resultDayOfTheWeek, correctDayOfTheWeek, "Expected the correct day of the week");
        });
        it("after 1st March 2000", function () {
            const day = 28;
            const month = 5; // June
            const year = 2012;
            const resultDayOfTheWeek = getDayOfTheWeekFromDate(day, month, year);
            const correctDayOfTheWeek = DAYS_OF_THE_WEEK.Thursday;
            assert.strictEqual(resultDayOfTheWeek, correctDayOfTheWeek, "Expected the correct day of the week");
        });
    });
    // Counting how many Sundays have fallen on the date of 1, since 1st Jan 1900
    describe("countingSundays", function () {
        /**
         * TESTING STRATEGY
         *
         * Uses the test values from freeCodeCamp
         */
        it("1943 to 1946", function () {
            const startingYear = 1943;
            const endYear = 1946;
            const numberOfSundays = countingSundays(startingYear, endYear);
            const correctNumberOfSundays = 6;
            assert.strictEqual(numberOfSundays, correctNumberOfSundays, "Expected the function to calculate the correct number of Sundays");
        });
        it("1995 to 2000", function () {
            const startingYear = 1995;
            const endYear = 2000;
            const numberOfSundays = countingSundays(startingYear, endYear);
            const correctNumberOfSundays = 10;
            assert.strictEqual(numberOfSundays, correctNumberOfSundays, "Expected the function to calculate the correct number of Sundays");
        });
        it("1901 to 2000", function () {
            const startingYear = 1901;
            const endYear = 2000;
            const numberOfSundays = countingSundays(startingYear, endYear);
            const correctNumberOfSundays = 171;
            assert.strictEqual(numberOfSundays, correctNumberOfSundays, "Expected the function to calculate the correct number of Sundays");
        });
    });
});
