//Сделайте функцию, которая параметром будет принимать массив и возвращать массив из N случайных элементов этого массива.

function getNRandomElementsFromArray(array, n) {
    let newArr = []

    for (let i = 1; i <= n; i++) {
        const randomIndex = Math.floor(Math.random() * array.length)
        newArr.push(array[randomIndex])
    }

    return newArr
}

console.log(getNRandomElementsFromArray([1, 43, 13, 'r4r', '141', '%', NaN], 4))
console.log(getNRandomElementsFromArray([1, 43, 13, 'r4r', '141'], 2))