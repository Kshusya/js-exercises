// Сделайте функцию, которая вернет текущий день недели словом.

let date = new Date()
console.log(date.toLocaleString('en-US', { weekday: 'long' }))