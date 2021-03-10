'iterative version of recursive algorithms'

'1. Counting Sheep'

const sheep = num => {
    for (let i = num; i > 0; i--) {
        console.log(i, ': Another sheep!')
    }
    return console.log('All the sheep jumped!')
}

console.log(sheep(3))

// Big O Type - O(n)
// directly related to input value


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

// Big O Type - O(2^n)
// value is exponently increased by input


'3. Reverse String'

const reverse = string => {
    let flipped = ''
    for (let i = string.length - 1; i >= 0; i--) {
        flipped += string.slice(i, i + 1)
    }
    return flipped
}

console.log(reverse('jim'))

// Big O Type - O(n)
// directly related to input value


'4. nth Triangular Number'

const triangle = num => {
    let answer = num
    if (num === 1) {
        return 1
    }
    for (let i = 1; i < num; i++) {
        answer += i
    }
    return answer
}

console.log(triangle(5))

// Big O Type - O(n)
// directly related to input value

'5. String Splitter'

const splitter = (string, seperator) => {
    let arr = [];
    while(true) {
        let idx = string.indexOf(seperator)
        if (idx < 0) {
            break;
        }
        arr.push(string.slice(0, idx))
        string = string.slice(idx + 1)
    }
    arr.push(string)
    return arr
}

console.log(splitter('02/02/3030', '/'))

// Big O Type - O(log(n))
// will increase slightly with inputs


