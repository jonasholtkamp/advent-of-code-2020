const fs = require('fs')

const run = input => {
  return input
    .map(line => {
      const [, firstOccurence, secondOccurence, letter, password] = line.match(/(\d+)-(\d+)\s(\w):\s(\w+)/)
      return { firstOccurence, secondOccurence, letter, password }
    })
    .filter(policy => {
      return policy.password.charAt(policy.firstOccurence - 1) === policy.letter ^ policy.password.charAt(policy.secondOccurence - 1) === policy.letter
    })
    .length
}

const input = fs.readFileSync('./2/input.txt', 'utf8').trim().split('\n')

console.log(run(input))

module.exports = run
