//Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы в массиве не было подряд двух одинаковых чисел.

function getArrayOfNumbersWithoutDoublesInARow(min, max, n) {
    let newArray = []
    let randomNumber

    while (newArray.length < n) {
        randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
        if (newArray[newArray.length - 1] === randomNumber) continue
        newArray.push(randomNumber)
    }

    return newArray
}

console.log(getArrayOfNumbersWithoutDoublesInARow(0, 15, 5))
console.log(getArrayOfNumbersWithoutDoublesInARow(-15, 15, 8))