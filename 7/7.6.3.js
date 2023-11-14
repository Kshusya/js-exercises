// Напишите программу, которая сформирует следующий массив:

// [
// 	'x',
// 	'xx',
// 	'xxx',
// 	'xxxx',
// 	'xxxxx',
// ]

const arr = [];

for (let i = 1; i <= 5; i++) {
    arr.push('x'.repeat(i));
}

console.log(arr);