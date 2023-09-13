//Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.

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

console.log(isPrimeNumber(11))