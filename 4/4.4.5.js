//Сделайте функцию, которая параметром будет принимать число и удалять из него четные цифры.

function deleteEvenDigitsFromNum(number) {
    let str = number.toString()
    let resultStr = ''

    for (let i = 0; i < str.length; i++) {
        if (parseInt(str[i]) % 2 !== 0) resultStr += str[i]
    }

    return parseInt(resultStr)
}

console.log(deleteEvenDigitsFromNum(12786190418))
console.log(deleteEvenDigitsFromNum(124680))
console.log(deleteEvenDigitsFromNum(13579))