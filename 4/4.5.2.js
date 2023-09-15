//Дана переменная со строкой. Проверьте, что в эта строка представляет собой дробь.

function isFraction(string) {
    let parts = string.split('/')

    if (parts.length !== 2) return false

    const numerator = parseInt(parts[0])
    const denominator = parseInt(parts[1])

    if (isNaN(numerator) || isNaN(denominator) || denominator === 0) {
        return false
    }

    return true
}

console.log(isFraction('1/2'))
console.log(isFraction('feh/32'))
console.log(isFraction('fgr162'))