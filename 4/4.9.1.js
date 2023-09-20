//Сделайте функцию, которая будет возвращать сколько дней осталось до ближайшего 29 февраля.

function howManyDaysUntilTwentyNineFeb() {
    let now = new Date()
    let currentYear = now.getFullYear()
    let nextLeapYear = currentYear

    while (true) {
        nextLeapYear++
        if (isLeapYear(nextLeapYear)) break
      }

    function isLeapYear(year) {
        let date = new Date(year, 2, 0)
        if (date.getDate() === 29) return true
        return false
    }

    const nextLeapYearDate = new Date(nextLeapYear, 1, 29)
    const timeDifference = nextLeapYearDate - now
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24))
  
    return daysRemaining
}

console.log(howManyDaysUntilTwentyNineFeb())