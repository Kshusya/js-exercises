// Дано число. Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней.

let number = 1421381731532763
let str = number.toString()
let arr = []

for (let i = 0; i < str.length; i++) {
    if (str[i] === '3') arr.push(i)
}

arr.pop()
arr.shift()

console.log(arr)