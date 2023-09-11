//Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.

function isLeapYear(year) {
    let date = new Date(year, 2, 0)
    if (date.getDate() === 29) return true
    return false
}

console.log(isLeapYear(2020))