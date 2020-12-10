const containsTwoSummands = (input, sum) => input.some(summand => sum / 2 !== summand && input.includes(sum - summand))

const pickingFirstAndLast = (acc, current, index, array) => {
  if (index === 0) return [current]
  if (index === array.length - 1) return [...acc, current]
  return acc
}

const addingUp = (prev, cur) => prev + cur

const run = (input, customPreambleSize) => {
  const preambleSize = customPreambleSize || 25
  const parsedInput = input.map(Number)

  const invalidNumber = parsedInput
    .slice(preambleSize)
    .find((sum, index) => {
      const preamble = parsedInput.slice(index, index + preambleSize)
      return !containsTwoSummands(preamble, sum)
    })

  return parsedInput
    .map((_, index) => {
      const succeedingNumbersAddedUp = parsedInput
        .slice(index)
        .reduce((array, number) => [...array, (array.pop() || 0) + number], [])

      const lastIndexOfSummands = succeedingNumbersAddedUp.findIndex(number => number === invalidNumber)

      return lastIndexOfSummands < 0
        ? 0
        : parsedInput
          .slice(index, index + lastIndexOfSummands + 1)
          .sort((a, b) => a - b)
          .reduce(pickingFirstAndLast, [])
          .reduce(addingUp, 0)
    })
    .find(sum => sum > 0)
}

module.exports = run
