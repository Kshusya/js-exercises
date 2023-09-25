//Сделайте функцию, которая параметром будет принимать массив и перемешивать элементы этого массива в случайном порядке.

function getMixedArray(array) {
    let mixedArray = []

    let startIndex = Math.floor(Math.random() * array.length)
    for (let i = 0; i < array.length; i++) {
        mixedArray.push(array[startIndex++ % array.length])
    }

    return mixedArray
}

console.log(getMixedArray([5, 18, 291, 1893]))