// Дана строка. Проверьте, что эта строка состоит только из четных цифр.

let str = '246358'
let allEven = true
const isNumeric = n => !isNaN(n)

for (let i = 0; i < str.length; i++) {
    if (!isNumeric(str) || str[i] % 2 !== 0) {
        allEven = false
        break
    }
}

console.log(allEven)