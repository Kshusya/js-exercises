// Сделайте функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате.

let date = new Date(2023, 11, 31)
function whatWeekday(date) {
    return date.toLocaleString('en-US', { weekday: 'long' })
}
console.log(whatWeekday(date))