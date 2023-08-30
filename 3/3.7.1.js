// Дана строка со словами. Отсортируйте слова в алфавитном порядке.

let string = 'auyagd wiwj bntj tytrh oeijf'
let arr = string.split(' ')
let newString = arr.sort().join(' ')

console.log(newString)