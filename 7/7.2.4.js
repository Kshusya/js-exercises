// Напишите программу, которая сформирует следующий массив:

// [
// 	['x'],
// 	['x', 'x'],
// 	['x', 'x', 'x'],
// 	['x', 'x', 'x', 'x'],
// 	['x', 'x', 'x', 'x', 'x'],
// ]

const arr = [];

for (let i = 1; i <= 5; i++) {
	const arr1 = [];

	for (let j = 1; j <= i; j++) {
		arr1.push('x')
	}
	arr.push(arr1);
}

console.log(arr);