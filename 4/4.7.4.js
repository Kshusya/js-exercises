// Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент. Смотрите пример:

// let arr = [1, 2, 3, 4, 5];

// func(arr, 1); // 2
// func(arr, 4); // 5
// func(arr, 5); // 1

function getTheNextElementInArray(array, element) {
    let foundElement = array.findIndex((e) => e === element)
    
    return array[foundElement + 1]
}

console.log(getTheNextElementInArray([1, 10, 12, 14], 12))
console.log(getTheNextElementInArray([1, 10, 12, 14], 1))
console.log(getTheNextElementInArray([1, 10, 12, 14], 14))