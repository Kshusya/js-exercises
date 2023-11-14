// Дан массив с числами. Подсчитайте общее количество цифр 3 во всех числах данного массива.

function getCountOfDigitThree(array) {
    let count = 0;
    
    for (let i = 0; i < array.length; i++) {
        let str = array[i].toString();
    
        for (let j = 0; j < str.length; j++) {
            if (str[j] === '3') count++;
        }
    }

    return count;
}

console.log(getCountOfDigitThree([3, 1203, 33, 8576, 27, 303, 19, 50]));
console.log(getCountOfDigitThree([8576, 27, 19, 50]));