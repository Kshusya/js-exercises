// Напишите программу, которая сформирует следующую строку:

// '-x-xx-xxx-xx-x-'

let str = '';

let count = 1;

for (let i = 1; i <= 3; i++) {
    str += 'x'.repeat(count) + '-';
    count++;
}

for (let i = 3; i >= 1; i--) {
    count--;
    str +='x'.repeat(count) + '-';
}

const result = '-' + str;

console.log(result);