//Сделайте функцию, которая параметром будет принимать число, а возвращать сумму его делителей.

let number = 1736

function sumDivider(num) {
    let sum = 0

    for (let i = 0; i <= num; i++) {
        if (num % i === 0) sum += i
    }
    
    return sum
}

console.log(sumDivider(number))