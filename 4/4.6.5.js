// Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам, в виде следующего объекта:

// {
// 	d: 12,
// 	h: 10,
// 	m: 59,
// 	s: 59,
// }

function convertSecondsToTimeDif(seconds) {
    const dayInSeconds = 24 * 60 * 60
    const hourInSeconds = 60 * 60
    const minuteInSeconds = 60

    return {
        d: Math.floor(seconds / dayInSeconds),
        h: Math.floor((seconds % dayInSeconds) / hourInSeconds),
        m: Math.floor((seconds % hourInSeconds) / minuteInSeconds),
        s: Math.floor(seconds % minuteInSeconds),
    }
}

console.log(convertSecondsToTimeDif(1919298))
console.log(convertSecondsToTimeDif(1928.198298))