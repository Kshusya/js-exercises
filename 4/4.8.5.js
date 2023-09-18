//Сделайте функцию, которая параметрами будет принимать любое количество чисел, а возвщать их сумму.

function getSum(...numbers) {
    return numbers.reduce((acc, current) => acc + current, 0)
}

console.log(getSum(5, 1, 2))
console.log(getSum(50, 1, 2, 3, 4, 5))
console.log(getSum(0, 0, 0))
console.log(getSum(0.0006, 0.0004))
console.log(getSum(1/2, 1/2))