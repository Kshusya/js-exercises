//Сделайте функцию, которая сгенерирует строку заданной длины, заполненную случайными латинскими буквами.

function getArrayOfARandomLatinLetters(count) {
    let str = ''
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'

    for (let i = 1; i <= count; i++) {
        let randomLetter = Math.floor(Math.random() * alphabet.length)
        str += alphabet[randomLetter]
    }

    return str
}

console.log(getArrayOfARandomLatinLetters(5))
console.log(getArrayOfARandomLatinLetters(13))