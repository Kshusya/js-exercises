//Сделайте функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов.

function getCommonElementsFromArrays(firstArray, secondArray) {
    let commonElements = []

    //Решение через цикл for
    // for (let i = 0; i < firstArray.length; i++) {
    //     if (secondArray.includes(firstArray[i])) commonElements.push(firstArray[i])
    // }

    //Решение через метод map
    firstArray.map((element) => {
        if (secondArray.includes(element)) commonElements.push(element)
    })

    return commonElements
}

console.log(getCommonElementsFromArrays([1, 10, 5, 7, 8, 15], [8, 20, 1, 5, 3]))