const fs = require('fs')

const run = numbers => {
  for (const number1 of numbers) {
    for (const number2 of numbers) {
      for (const number3 of numbers) {
        if (number1 !== number2 && number1 !== number3 && number1 + number2 + number3 === 2020) {
          return number1 * number2 * number3
        }
      }
    }
  }
}

const numbers = fs.readFileSync('./1/input.txt', 'utf8').trim().split('\n').map(v => parseInt(v))

console.log(run(numbers))

module.exports = run
