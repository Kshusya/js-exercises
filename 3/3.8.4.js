// Дана строка в формате:

// 'camelCase'
// Преобразуйте ее в формат:

// 'snake_case'

let camelCaseString = 'camelCase'
let snakeCaseString = camelCaseString.replace(/([A-Z])/g, '_$1').toLowerCase()

console.log(snakeCaseString)