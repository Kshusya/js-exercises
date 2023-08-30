// Дан массив со числами. Оставьте в нем числа, состоящие из разных цифр, а остальные удалите.

let arr = [123, 456, 789, 333, 22, 44544, 345, 678]

function hasUniqueDigits(number) {
    let set = new Set()
    let str = number.toString()

    for (let i = 0; i < str.length; i++) {
        if (set.has(str[i])) {
            return false // Найдена повторяющаяся цифра
        }
        set.add(str[i])
    }
    
    return true // Все цифры уникальны
}

function filterNumbersWithUniqueDigits(numbers) {
    return numbers.filter(number => hasUniqueDigits(number))
}

console.log(filterNumbersWithUniqueDigits(arr))