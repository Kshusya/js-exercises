// Сформируйте с помощью циклов следующий массив:

// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]

let arr  = []
let count = 1

for (let i = 1; i <= 3; i++) {
    let arr1 = []

    for (let j = 1; j <= 3; j++) {
        arr1.push(count)
        count++
    }
    
    arr.push(arr1)
}

console.log(arr)