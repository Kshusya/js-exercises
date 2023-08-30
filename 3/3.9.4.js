// Найдите все числа от 1 до 1000, сумма цифр которых равна 13.

function sumDigits(num) {
    let str = num.toString()
    let result = 0

    for (let j = 0; j < str.length; j++) {
        result += parseInt(str[j])
    }
    
    return result
}

for (let i = 1; i < 1000; i++) {
    if (sumDigits(i) === 13) console.log(i)
}