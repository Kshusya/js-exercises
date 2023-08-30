// Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.

let arr = [3, 23, 43, 43, 653, 234]
arr = arr.map((num) => num.toString())
let allContainsThree = true

for (let i = 0; i < arr. length; i++) {
    if (!arr[i].includes('3')) {
        allContainsThree = false
        break
    }
}

console.log(allContainsThree ? 'Все содержат цифру 3' :' НЕ все содержат цифру 3')