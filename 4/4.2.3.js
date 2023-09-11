//Сделайте функцию, которая будет возвращать сколько дней прошло или осталось до заданной даты в году, в зависимости от того, была уже эта дата или нет.

function getDateDifference(date) {
    let now = new Date()
    let diff = now.getTime() - date.getTime()
    return Math.abs(Math.round(diff / 1000 / 60 / 60 / 24))
}

console.log(getDateDifference(new Date(2024, 1, 24)))