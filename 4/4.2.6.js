//Сделайте функцию, которая будет возвращать сколько дней осталось до конца текущего месяца.

function howManyDaysUntilTheEndOfMonth() {

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    function isLeapYear(year) {
        let date = new Date(year, 2, 0)
        if (date.getDate() === 29) return true
        return false
    }

    let now = new Date()
    let currentMonth = now.getMonth()
    let currentYear = now.getFullYear()
    let currentDay = now.getDate()

    let daysLeft = daysInMonth[currentMonth] - currentDay

    if (currentMonth === 1 && isLeapYear(currentYear)) {
        daysLeft = 29 - currentDay
    }

    return daysLeft
}

console.log(howManyDaysUntilTheEndOfMonth())