const fs = require('fs')

const input = fs.readFileSync('./01/input.txt', 'utf8').trim().split('\n').map(v => parseInt(v))

console.log(require('./1')(input))
console.log(require('./2')(input))
