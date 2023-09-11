//Сделайте функцию, которая параметром будет принимать число и удалять из него нули.

let number = 13091008030

function deleteZeros(num) {
    let numWithoutZeros = ''
    let str = num.toString()

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') continue
        numWithoutZeros += str[i]
    }

    return parseInt(numWithoutZeros)
}

console.log(deleteZeros(number))