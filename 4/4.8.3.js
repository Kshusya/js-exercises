//Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива так, чтобы одинаковые элементы не возвращались два раза подряд.

let previousRandomIndex = null

function getRandomElementFromArray(array) {
    let randomIndex = null

    do {
        randomIndex = Math.floor(Math.random() * array.length)
    }
    while (randomIndex === previousRandomIndex)

    previousRandomIndex = randomIndex
    
    return array[randomIndex]
}

console.log(getRandomElementFromArray([1, 2, 3, 4, 5]))
console.log(getRandomElementFromArray([1, 2, 3, 4, 5]))