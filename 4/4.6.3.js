//Сделайте функцию, которая параметром будет получать строку со словами, а возвращать строку в верхнем регистре, состоящую из первых букв слов.

function getFirstLetters(str) {
    let words = str.split(' ')
    let upperLetter = ''
    for (let i = 0; i < words.length; i++) {
        let regex = /[a-zA-Z]/g
        if (!isNaN(words[i]) || !regex.test(words[i])) continue
        upperLetter += words[i][0].toUpperCase()
    }

    return upperLetter
}

console.log(getFirstLetters('Elik loves apples'))
console.log(getFirstLetters('Elik, loves 5 % apples !?'))