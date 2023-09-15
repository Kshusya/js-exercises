//Сделайте функцию, которая параметрами будет принимать два числа и возвращать массив, заполненный целыми числами от минимального параметра до максимального.

function getArrayOfNums(firstNum, secondNum) {
    let arr = []

    for (let i = Math.min(firstNum, secondNum); i <= Math.max(firstNum, secondNum); i++) {
        if (Number.isInteger(i)) arr.push(i)
        else arr.push(Math.ceil(i))
    }

    return arr
}

console.log(getArrayOfNums(1.25, 25))
console.log(getArrayOfNums(-15, 3))
console.log(getArrayOfNums(-7.25, 2.5))