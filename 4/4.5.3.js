//Сделайте функцию, которая параметром будет принимать массив с числами и возвращать второе по величине число.

function getSecondHigherNum(array) {

    let sorted = array.sort(function (a, b) {
        return b - a
    })

    return sorted[1]

}

console.log(getSecondHigherNum([1, 25, 34, 15]))
console.log(getSecondHigherNum([-1, -25, -34, -15]))
console.log(getSecondHigherNum([1, 25, -34, -15]))