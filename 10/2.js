const chainWorks = input => input
  .every((joltage, index, array) => {
    if (index === 0) return joltage <= 3
    return joltage <= array[index - 1] + 3
  })

const tryOutVariationsOfChain = input => {
  const variations = new Set()

  if (input.length === 1) return variations

  for (let i = 0; i < input.length; i++) {
    const chainWithRemovedElement = [...input]
    chainWithRemovedElement.splice(i, 1)

    if (chainWorks(chainWithRemovedElement)) {
      variations.add(chainWithRemovedElement.join('.'))
      variations.add(...tryOutVariationsOfChain(chainWithRemovedElement))
    }
  }

  return variations
}

const run = input => {
  const parsedInput = input
    .map(Number)
    .sort((a, b) => a - b)

  return tryOutVariationsOfChain(parsedInput).size + 1
}

module.exports = run
