'iterative version of recursive algorithms'

'1. Counting Sheep'

const sheep = num => {
    for (let i = num; i > 0; i--) {
        console.log(i, ': Another sheep!')
    }
    return console.log('All the sheep jumped!')
}

console.log(sheep(3))


'2. Power Calculator'

let calculator = (number, exponent) => {
    let answer = 1;
    if (exponent < 0) {
        return 'exponent should be >= 0'
    }
    for (let i = 0; i < exponent; i++) {
        answer *= number
    }
    return answer
}

console.log(calculator(10,3))
console.log(calculator(3,3))
console.log(calculator(10,-2))
