// Даны два числа. Получите массив общих делителей этих чисел.

let num1 = 16
let num2 = 400
let arr = []
let smallestNum = Math.min(num1, num2)

for (let i = 0; i < smallestNum; i++) {
    if (num1 % i === 0 && num2 % i === 0) arr.push(i)
}

console.log(arr)