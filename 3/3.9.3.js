// Дан массив со числами. Удалите из него числа, имеющие два и более нуля.

let arr = [12, 49493000, 900, 362, 584]

function countOfZeros(number) {
    let str = number.toString()
    let zeros = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') zeros += 1
    }
    return zeros
}


for (let i = arr.length - 1; i >= 0; i--) {
    if (countOfZeros(arr[i]) >= 2) arr.splice(i, 1)
}

console.log(arr)