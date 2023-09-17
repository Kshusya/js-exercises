//Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива.

function getRandomElementFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length)
    
    return array[randomIndex]
}

console.log(getRandomElementFromArray([4223, '3rfu', 1223, 'rgurh']))