const fs = require('fs')
const path = require('path')

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8').trim().split('\n\n')

console.log(require('./1')(input))
console.log(require('./2')(input))
