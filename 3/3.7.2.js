// Дано число. Получите массив делителей этого числа.

let num = 164689
let arr = []

for (let i = 0; i <= num; i++) {
    if (num % i === 0) arr.push(i)
}

console.log(arr)