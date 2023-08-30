// Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе.

let num1 = 1267493
let num2 = 176136575

function getSameDigits(number1, number2) {
    let str1 = number1.toString()
    let str2 = number2.toString()
    let sameDigits = []

    for (let i = 0; i < str1.length; i++) {
        if (str2.includes(str1[i])) sameDigits.push(str1[i])
    }

    return sameDigits
}

console.log(getSameDigits(num1, num2))