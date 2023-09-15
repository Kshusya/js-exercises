//Сделайте функцию, которая параметром будет принимать дату в формате год-месяц-день, и определять, существует ли такая дата или нет.

function isDateCorrect(date) {
    let parts = date.split('-')

    if (parts.length !== 3) return false

    let year = parseInt(parts[0])
    let month = parseInt(parts[1])
    let day = parseInt(parts[2])

    if (isNaN(year) || isNaN(month) || isNaN(day)) return false

    if (year < 0 || year.toString().length > 4 || month < 1 || month > 12 || day < 1 || day > 31) return false

    if (month === 2) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            return day <= 29
        } else {
            return day <= 28
        }
    }

    if ([4, 6, 9, 11].includes(month)) {
        return day <= 30
    }

    return true
}

console.log(isDateCorrect('1998-07-01'))
console.log(isDateCorrect('19978-15-01'))
console.log(isDateCorrect('1997-fg%-01'))