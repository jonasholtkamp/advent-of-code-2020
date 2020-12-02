const fs = require('fs')

const run = input => {
  return input
    .map(line => {
      const [, firstOccurrence, secondOccurrence, letter, password] = line.match(/(\d+)-(\d+)\s(\w):\s(\w+)/)
      return { firstOccurrence, secondOccurrence, letter, password }
    })
    .filter(policy => {
      return policy.password.charAt(policy.firstOccurrence - 1) === policy.letter ^ policy.password.charAt(policy.secondOccurrence - 1) === policy.letter
    })
    .length
}

const input = fs.readFileSync('./2/input.txt', 'utf8').trim().split('\n')

console.log(run(input))

module.exports = run
