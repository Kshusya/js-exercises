// Дана строка. Проверьте, что эта строка состоит только из цифр.

let str = '352ht7'
const isNumeric = n => !isNaN(n)

console.log(isNumeric(str))