//Дана переменная со строкой. Проверьте, что в эта строка представляет собой число, то есть состоит только из цифр.

let something = '734'

function strContainsOnlyDigits(str) {
    let isNumeric = true

    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) isNumeric = false
    }

    return isNumeric
}

console.log(strContainsOnlyDigits(something))