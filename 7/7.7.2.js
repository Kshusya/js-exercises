// Напишите программу, которая сформирует следующий массив:

// [
// 	'1',
// 	'12',
// 	'123',
// 	'1234',
// 	'12345',
// ]

let arr = [];

for (let i = 1; i <= 5; i++) {
    let string = '';

	for (let j = 1; j <= i; j++) {
        string += j;
	}

    arr.push(string);
}

console.log(arr);