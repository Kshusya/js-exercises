//Сделайте функцию, которая заполнит массив случайными латинскими буквами.

function getArrayOfARandomLatinLetters() {
    let array = []
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'

    for (let i = 0; i <= Math.random() * 50; i++) {
        let randomLetter = Math.floor(Math.random() * alphabet.length)
        array.push(alphabet[randomLetter])
    }

    return array
}

console.log(getArrayOfARandomLatinLetters())