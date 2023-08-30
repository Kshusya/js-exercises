// Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.

let num = 9
let arr = []

for (let i = 0; i <= num; i++) {
    if (num % num === 0 && num % 1 === 0 && num % i === 0) arr.push(i)
}

console.log(arr.length === 3 ? true : false) 