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

module.exports = run
