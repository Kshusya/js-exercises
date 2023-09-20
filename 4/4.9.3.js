//Сделайте функцию, которая будет возвращать случайный цвет.

function randomColor() {
    let colors = '0123456789ABCDEF'
    let color = '#'

    for (let i = 1; i <= 6; i++) {
        color += colors[Math.floor(Math.random() * colors.length)]
    }

    return color
}

console.log(randomColor())