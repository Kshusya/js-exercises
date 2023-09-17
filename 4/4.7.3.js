//Сделайте функцию, которая будет возвращать случайное число. Функция не должна возвращать одно и тоже число два раза подряд.

let previousRandomNumber = null

function getRandomNum(min, max) {
    let randomNumber

    do {
        randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    } while (randomNumber === previousRandomNumber)

    previousRandomNumber = randomNumber
    
    return randomNumber
}

console.log(getRandomNum(0, 10))
console.log(getRandomNum(0, 10))
console.log(getRandomNum(-10, 10))
console.log(getRandomNum(-10, 10))