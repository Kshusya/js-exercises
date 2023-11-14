// Напишите программу, которая сформирует следующий массив:

// [
// 	'1',
// 	'12',
// 	'123',
// 	'1234',
// 	'12345',
// 	'1234',
// 	'123',
// 	'12',
// 	'1',
// ]

let arr = [];

for (let i = 1; i <= 5; i++) {
    let string = '';

	for (let j = 1; j <= i; j++) {
        string += j;
	}

    arr.push(string);
}

for (let i = 5 - 1; i >= 1; i--) {
    let string = '';

	for (let j = 1; j <= i; j++) {
        string += j;
	}

    arr.push(string);
}

console.log(arr);