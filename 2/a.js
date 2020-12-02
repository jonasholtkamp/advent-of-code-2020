const fs = require('fs')

const run = input => {
  return input
    .map(line => {
      const [, minOccurrence, maxOccurrence, letter, password] = line.match(/(\d+)-(\d+)\s(\w):\s(\w+)/)
      return { minOccurrence, maxOccurrence, letter, password }
    })
    .filter(policy => {
      const actualOccurrences = (policy.password.match(new RegExp(policy.letter, 'g')) || []).length
      return actualOccurrences >= policy.minOccurrence && actualOccurrences <= policy.maxOccurrence
    })
    .length
}

const input = fs.readFileSync('./2/input.txt', 'utf8').trim().split('\n')

console.log(run(input))

module.exports = run
