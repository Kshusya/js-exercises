//Сделайте функцию, которая параметром будет принимать букву и проверять, это буква кириллицы или латиницы.

function isThisCyrillicOrLatin(letter) {
    let latin = /[a-z]/i
    let cyrillic = /[\wа-яё]+/i

    if (!isNaN(letter)) return 'This is not a letter'
    if (letter.length !== 1) return 'This is not a single letter'

    if (letter.match(latin)) return 'This is a latin letter'
    if (letter.match(cyrillic)) return 'This a is cyrillic letter'

    return 'This is an unknown letter'
}

console.log(isThisCyrillicOrLatin('t'))
console.log(isThisCyrillicOrLatin('U'))
console.log(isThisCyrillicOrLatin('Э'))
console.log(isThisCyrillicOrLatin('ёfjkddifs'))
console.log(isThisCyrillicOrLatin('3243242'))
console.log(isThisCyrillicOrLatin('%'))