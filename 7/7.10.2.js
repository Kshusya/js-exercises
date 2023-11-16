// Напишите программу, которая сформирует следующую строку:

// '11 12 13 21 22 23 31 32 33'

let str = '';

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        str += i.toString() + j.toString() + ' ';
    }
}

console.log(str);