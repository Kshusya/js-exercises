// Дан массив, подмассивы которого содержат цифры:

// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
// Слейте элементы этого массива в числа:

// [123, 456, 789]

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const newArr = arr.map((subarray) => parseInt(subarray.join(''), 10));

console.log(newArr);

// const oneArr = arr.flat();

// let result = [];

// for (let i = 0; i < oneArr.length; i += 3) {
//     result.push(oneArr[i].toString() + oneArr[i + 1].toString() + oneArr[i + 2].toString())
// }

// console.log(result);