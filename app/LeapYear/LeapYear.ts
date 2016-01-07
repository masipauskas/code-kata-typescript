function isLeapYear(year: number): boolean {
    return isTypicalLeapYear(year) || isATypicalLeapYear(year);
}

function isTypicalLeapYear(year: number): boolean {
    return (year % 4 == 0) && !(year % 100 == 0)
}

function isATypicalLeapYear(year: number): boolean {
    return (year %  400 == 0)
}

export default {isLeapYear}