// Дана строка в формате:

// 'snake_case'
// Преобразуйте ее в формат:

// 'camelCase'

let snakeCaseString = 'snake_case'
let words = snakeCaseString.split('_')
let camelCaseString = words[0] + words.slice(1).map(word => word[0].toUpperCase() + word.slice(1)).join('')

console.log(camelCaseString)