// Напишите программу, которая сформирует следующий массив:

// [
// 	12,
// 	34,
// 	56,
// 	78,
// 	90,
// ]

let arr = [];

for (let i = 1; i <= 10; i += 2) {
    if (i === 9) {
        arr.push(i.toString() + (i - 9).toString());
        break;
    }
    arr.push(i.toString() + (i + 1).toString())
}

console.log(arr)