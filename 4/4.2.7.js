// Сделайте функцию, которая вернет предыдущий, текущий и следующий дни недели словом в виде следующего объекта:

// {
// 	next: 'пн',
// 	curr: 'вс',
// 	prev: 'сб',
// }

function prevCurrNextDays() {
    let obj = {}

    let now = new Date()
    let currentDayOfTheWeek = now.toLocaleString('ru-RU', { weekday: 'short' })

    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
    let tomorrowDayOfTheWeek = tomorrow.toLocaleString('ru-RU', { weekday: 'short' })

    let yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1)
    let yesterdayDayOfTheWeek = yesterday.toLocaleString('ru-RU', { weekday: 'short' })

    obj.next = `${tomorrowDayOfTheWeek}`
    obj.curr = `${currentDayOfTheWeek}`
    obj.prev = `${yesterdayDayOfTheWeek}`

    return obj
}

console.log(prevCurrNextDays())