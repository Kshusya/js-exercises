//Сделайте функцию, которая параметром будет принимать текст со словами, а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке.

function getWordsInAlphabeticalOrder(str) {
    let arr = str.split(' ')
    let regex = /[a-zA-Z]/g
    
    return arr.filter((item) => regex.test(item)).map((word) => {
        return word.toLowerCase()
    }).sort()
}

console.log(getWordsInAlphabeticalOrder('the quick brown fox jumps over the lazy dog.'))
console.log(getWordsInAlphabeticalOrder('true 5 % if the search string is found anywhere within the given string, including when searchString is an empty string ; otherwise, false.'))