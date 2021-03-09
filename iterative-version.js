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