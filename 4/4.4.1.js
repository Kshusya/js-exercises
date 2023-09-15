//Сделайте функцию, которая параметром будет принимать число, а возвращать количество его делителей.

function getNumOfDividers(number) {
    let result = 0

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) result++
    }

    return result
}

console.log(getNumOfDividers(16))
console.log(getNumOfDividers(10))
console.log(getNumOfDividers(256))