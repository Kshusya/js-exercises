// Напишите программу, которая сформирует следующий массив:

// [
// 	[1],
// 	[1, 2],
// 	[1, 2, 3],
// 	[1, 2, 3, 4, 5],
// 	[1, 2, 3, 4, 5, 6],
// ]

const arr = [];

for (let i = 1; i <= 5; i++) {
	const arr1 = []; 

	for (let j = 1; j <= i; j++) {
		arr1.push(j);
	}

	arr.push(arr1);
}

console.log(arr);