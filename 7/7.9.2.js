// Напишите программу, которая сформирует следующую строку:

// '-1-12-23-34-45-'

let str = '';

for (let i = 1; i <= 5; i++) {
    str += (i - 1) + "" + i + "-";
}

const result = '-' + str.substring(1);

console.log(result);