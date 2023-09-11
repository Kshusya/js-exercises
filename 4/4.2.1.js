//Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.

let number = 129

function sumDigits(num) {
    let sum = 0
    let str = num.toString()

    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i])
    }
    
    return sum
}

console.log(sumDigits(number))