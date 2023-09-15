//Сделайте функцию, которая параметром будет принимать массив с числами и заменять каждое число на массив его делителей.

function replaceNumToArrayOfDividers(array) {
    let fullArr = []
    for (let i = 0; i < array.length; i++) {
        let num = array[i]

        function getDividers(number) {
            let arrayOfDividers = []

            for (let i = 1; i <= Math.abs(number); i++) {
                if (number % i === 0) arrayOfDividers.push(i)
            }

            return arrayOfDividers
        }

        fullArr.push(getDividers(num))
    }

    return fullArr
}

console.log(replaceNumToArrayOfDividers([12, 5, 10]))
console.log(replaceNumToArrayOfDividers([0, 5, 10]))
console.log(replaceNumToArrayOfDividers([12, -5, 10]))