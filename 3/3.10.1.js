// Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.

let arr = [12, 4, 5, 6564, 43]
let newArr = []

for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i], arr[i])
}

console.log(newArr)