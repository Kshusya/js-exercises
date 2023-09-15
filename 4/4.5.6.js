//Сделайте функцию, которая будет возвращать сумму N первых чисел Фибоначчи.

function getSumOfFibNumbers(n) {
    if (n <= 0) return 0
    else if (n === 1) return 1

    let fibonacciArray = [1, 1]
    let sum = 2

    let a = 1
    let b = 1
    
    for (let i = 3; i <= n; i++) {
        let c = a + b
        a = b
        b = c
        fibonacciArray.push(c)
        sum += c
    }

    return sum
}

console.log(getSumOfFibNumbers(2))
console.log(getSumOfFibNumbers(15))
console.log(getSumOfFibNumbers(77))
console.log(getSumOfFibNumbers(-5))