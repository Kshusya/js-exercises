//Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли, которые встречаются больше трех раз.

function deleteDuplicates(array) {

    function getDuplicates(array) {
        return array.reduce((acc, i) => {
            if (acc.hasOwnProperty(i)) {
                acc[i] += 1
            } else {
                acc[i] = 1
            }
            return acc
        }, {})
    }

    console.log(getDuplicates(array))

    // let counts = getDuplicates(array)

    let counts = {}

    let uniqueArray = array.filter(function (element) {
        if (counts.hasOwnProperty(element)) {
            counts[element] += 1
        } else {
            counts[element] = 1
        }
        return counts[element] <= 3
    })

    return uniqueArray
}

console.log(deleteDuplicates([1, 5, 5, 0, 0, 0, 9, '6', '6', NaN, NaN, NaN, NaN, NaN]))