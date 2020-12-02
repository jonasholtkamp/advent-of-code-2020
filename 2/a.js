const fs = require('fs')

const run = input => {
  return input
    .map(line => {
      const [, minOccurence, maxOccurence, letter, password] = line.match(/(\d+)-(\d+)\s(\w):\s(\w+)/)
      return { minOccurence, maxOccurence, letter, password }
    })
    .filter(policy => {
      const actualOccurences = (policy.password.match(new RegExp(policy.letter, 'g')) || []).length
      return actualOccurences >= policy.minOccurence && actualOccurences <= policy.maxOccurence
    })
    .length
}

const input = fs.readFileSync('./2/input.txt', 'utf8').trim().split('\n')

console.log(run(input))

module.exports = run
