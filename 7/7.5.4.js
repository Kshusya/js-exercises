// Напишите программу, которая сформирует следующий массив:

// [
// 	['x', 'x', 'x', 'x', 'x'],
// 	['x', 'x', 'x', 'x'],
// 	['x', 'x', 'x'],
// 	['x', 'x'],
// 	['x'],
// ]

const arr = [];

for (let i = 5; i >= 1; i--) {
	const arr1 = [];

	for (let j = i; j >= 1; j--) {
		arr1.push('x')
	}
	arr.push(arr1);
}

console.log(arr);