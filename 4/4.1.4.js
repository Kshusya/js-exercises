// Сделайте функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины, заданной первым параметром.


function cutTheString(number, string) {
    return string.slice(0, number)
}
console.log(cutTheString(5, 'The quick brown fox jumps over the lazy dog'))