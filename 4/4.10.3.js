//Дан текст со словами. Запишите все слова этого текста в специальный объект. Ключами в этом объекте будут буквы, а значениями - массивы слов, начинающихся на эти буквы.

function getObjectOfWords(text) {
    let arr = text.split(' ')
    let obj = {}

    for (let i = 0; i < arr.length; i++) {
        const firstLetter = arr[i].charAt(0).toLowerCase()

        if (!obj[firstLetter]) obj[firstLetter] = []

        obj[firstLetter].push(arr[i])
    }

    return obj
}

console.log(getObjectOfWords('Wqsjq uydgqygu duh'))
console.log(getObjectOfWords('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec dui iaculis, interdum dui pellentesque'))