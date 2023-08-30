// Через запятую написаны числа. Получите максимальное из этих чисел.

let numbers = '345, 57, 3, 86, 7'
let arr = numbers.split(', ')
let arrNum = arr.map((strNum) => parseInt(strNum))

console.log(Math.max(...arrNum))