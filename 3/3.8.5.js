// Сформируйте с помощью циклов следующий массив:

// [
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// ]

let arr = []

for (let i = 1; i <= 5; i++) {
    let arr1 = []

    for (j = 1; j <= 3; j++) {
        arr1.push(j)
    }

    arr.push(arr1)
}

console.log(arr)