// Сделайте функцию, которая параметром будет принимать массив с числами и возвращать максимальное и минимальное значение из этого массива в виде следующего объекта:

// {
// 	max: 9,
// 	min: 1,
// }

function minMaxNumbers(array) {
    let obj = {}

    let max = array.reduce((a, b) => Math.max(a, b))
    let min = array.reduce((a, b) => Math.min(a, b))

    obj.max = max
    obj.min = min

    return obj
}

console.log(minMaxNumbers([1, 3981, 172, 9, 9828, 73, 901]))