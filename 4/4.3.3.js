//Сделайте функцию, которая параметром будет принимать массив и удалять из него одинаковые, рядом стоящие элементы.

function deleteTheSameInOrder(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === array[i + 1]) array.splice(i, 1)
    }
return array
}

console.log(deleteTheSameInOrder([1, 1, 1, 2, 3, 4, 2, 'h', 'h', 'r']))