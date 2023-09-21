//Сделайте функцию, которая параметром будет принимать массив чисел и возвращать массив общих делителей всех чисел из переданного массива.

function getCommonDivisors(array) {
    let max = array.reduce((a, b) => Math.max(a, b), -Infinity)
    let commonDivs = []

    for (let i = 1; i <= max; i++) {
        let isCommonDivisor = true

        for (let j = 0; j < array.length; j++) {
            if (array[j] % i !== 0) {
                isCommonDivisor = false
                break
            }
        }

        if (isCommonDivisor) {
            commonDivs.push(i)
        }
    }

    return commonDivs
}

console.log(getCommonDivisors([100, 75, 150]))