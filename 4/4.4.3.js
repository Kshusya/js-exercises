//Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей.

function arrayOfDividers(number) {
    let arr = []

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) arr.push(i)
    }

    return arr
}

console.log(arrayOfDividers(16))