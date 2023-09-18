//Сделайте функцию, которая будет возвращать массив простых чисел из заданного промежутка.

function getPrimeNumbers(min, max) {
    let primeArray = []

    function isPrimeNumber(number) {
        if (number === 1) return false
    
        else if (number === 2) return true
    
        else {
            for (let i = 2; i < number; i++) {
                if (number % i === 0) {
                    return false
                }
            }
    
            return true
        }
    }

    for (let i = min; i <= max; i++) {
        if (isPrimeNumber(i)) primeArray.push(i)
    }

    return primeArray
}

console.log(getPrimeNumbers(3, 19))
console.log(getPrimeNumbers(50, 100))