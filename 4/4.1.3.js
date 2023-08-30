// Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.

function howMuchDays(seconds) {
    let secondsInDay = 60 * 60 * 24
    return Math.floor(seconds / secondsInDay)
}
console.log(howMuchDays(432000))