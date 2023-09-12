//Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли.

function deleteDuplicates(array) {
    let uniqueSet = new Set(array)
    let uniqueArray = Array.from(uniqueSet)

    return uniqueArray
}

console.log(deleteDuplicates([1, 2, 2, '3', '3', '*', '*', 'text', NaN, NaN, true, true]))