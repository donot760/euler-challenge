export enum DAYS_OF_THE_WEEK {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

const daysOfTheWeek : ReadonlyArray<DAYS_OF_THE_WEEK> = [
    DAYS_OF_THE_WEEK.Monday,
    DAYS_OF_THE_WEEK.Tuesday,
    DAYS_OF_THE_WEEK.Wednesday,
    DAYS_OF_THE_WEEK.Thursday,
    DAYS_OF_THE_WEEK.Friday,
    DAYS_OF_THE_WEEK.Saturday,
    DAYS_OF_THE_WEEK.Sunday
];


export function isLeapYear(year: number): boolean {
    return year%4 === 0 && (year%400 === 0 ||  year%100 !== 0);
}

export function getDaysInTheMonth(month: number, year: number): number {
    switch(month) {
        case 0: // January
            return 31;
        case 1: // February
            if (isLeapYear(year)) {
                return 29;
            }
            return 28;
        case 2: // March
            return 31;
        case 3: // April
            return 30;
        case 4: // May
            return 31;
        case 5: // June
            return 30;
        case 6: // July
            return 31;
        case 7: // August
            return 31;
        case 8: // September
            return 30;
        case 9: // October
            return 31;
        case 10: // November
            return 30;
        case 11: // December
            return 31;
        default:
            throw Error("Number out of range");
    }
}

/**
 * Given a date, returns the day of the week on that date.
 *
 * @param date integer between 1 and number of days contained in `month`
 * @param month queried month, 0-indexed
 * @param year integer, must be >= 1900
 *
 * @returns day of the week, 0-indexed
 */
export function getDayOfTheWeekFromDate(date: number, month: number, year: number): DAYS_OF_THE_WEEK {
    let daysSinceBeginningOf1900 = 0;

    // add all days in the completed years since 1900
    for (let currentYear = 1900; currentYear < year; currentYear++) {
        for (let currentMonth = 0; currentMonth < 12; currentMonth++) {
            daysSinceBeginningOf1900 += getDaysInTheMonth(currentMonth, currentYear);
        }
    }

    // add days from current year's completed months
    for (let currentMonth = 0; currentMonth < month; currentMonth++) {
        daysSinceBeginningOf1900 += getDaysInTheMonth(currentMonth, year);
    }

    // add days from the current month
    daysSinceBeginningOf1900 += date-1; // -1 to make up for the 1-indexing in the human way of counting days

    const dayOfTheWeek = daysOfTheWeek[daysSinceBeginningOf1900%7];
    return dayOfTheWeek;
}


export function countingSundays(firstYear: number, lastYear: number): number {
    const date = 1;
    const dayOfTheWeek = DAYS_OF_THE_WEEK.Sunday;
    let numberOfSundays = 0;
    for (let year = firstYear; year <= lastYear; year ++) {
        for (let month = 0; month < 12; month++) {
            const weekday = getDayOfTheWeekFromDate(date, month, year);
            if (weekday === dayOfTheWeek) {
                numberOfSundays++;
            }
        }
    }
    return numberOfSundays;
}

//console.log(countingSundays(1943, 1946));
