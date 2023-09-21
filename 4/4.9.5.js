//Сделайте функцию, которая параметром будет принимать двухмерный массив чисел и возвращать массив максимальных чисел в каждом подмассиве.

function getMaxNumsInNestedArray(array) {
    let maxNums = []

    //Решение через цикл for
    // for (let i = 0; i < array.length; i++) {
    //     maxNums.push(array[i].reduce((a, b) => Math.max(a, b), -Infinity))
    // }

    //Решение через метод map
    array.map((element) => {maxNums.push(element.reduce((a, b) => Math.max(a, b), -Infinity))})

    return maxNums
}

console.log(getMaxNumsInNestedArray([[2, 5, 10], [15, 19], [45, 76]]))
console.log(getMaxNumsInNestedArray([[-10, -20, -90], [0, 3, 15, 28], [12, 574, 930], [12, -5, 18]]))