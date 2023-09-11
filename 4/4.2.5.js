//Сделайте функцию, которая вернет массив всех високосных годов за предыдущие сто лет.

function leapYearsInTheLastHundredYears() {
    let now = new Date()
    let currentYear = now.getFullYear()

    for (let i = currentYear - 100; i <= currentYear; i++) {
        if (i % 4 === 0) console.log(i)
    }
}

leapYearsInTheLastHundredYears()