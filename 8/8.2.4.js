// Выведите на экран следующую пирамидку:

// xx
// xxxx
// xxxxxx
// xxxxxxxx
// xxxxxxxxxx

for (let i = 1; i <= 5; i++) {
    let row = '';

    for (let j = 1; j <= i; j++) {
        row += 'xx';
    }
    
    console.log(row);
}