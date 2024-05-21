// Дан следующий массив:

// let arr = [1, 2, 3, 4, 5, 6];
// Дано также число:

// let num = 3;
// Добавьте в приведенный массив столько пустых строк, чтобы длина массива стала равна квадрату числа из переменной.

function addStrings(num) {
    
    let arr = [1, 2, 3, 4, 5, 6];
    
    let square = num ** 2;
    let difference = square - arr.length;
    
    for (let i = 1; i < difference + 1; i++) {
        arr.push(" ");
    }
    
    console.log(arr);
}

addStrings(3);
addStrings(4);
addStrings(5);