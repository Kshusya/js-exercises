//Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы числа не повторялись.

function getArrayOfNumbersWithoutDoubles(min, max, n) {
    let newArray = []
    let randomNumber

    while (newArray.length < n) {
        randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
        if (newArray.includes(randomNumber)) continue
        newArray.push(randomNumber)
    }

    return newArray
}

console.log(getArrayOfNumbersWithoutDoubles(0, 15, 5))
console.log(getArrayOfNumbersWithoutDoubles(-15, 15, 8))