//Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.

function randomNumsArray(min, max, amount, array) {

    if (amount <= 0) return array

    for (let i = 1; i <= amount; i++) {
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
        array.push(randomNum)
    }

    return array
}

console.log(randomNumsArray(0, 125, 15, []))
console.log(randomNumsArray(-15, 1, 5, []))
console.log(randomNumsArray(-45, -15, 9, []))