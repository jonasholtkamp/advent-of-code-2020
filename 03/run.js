const fs = require('fs')

const input = fs.readFileSync('./03/input.txt', 'utf8').trim().split('\n')

console.log(require('./1')(input))
console.log(require('./2')(input))
