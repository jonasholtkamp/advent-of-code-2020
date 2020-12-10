const containsTwoSummands = (input, sum) => input.some(summand => sum / 2 !== summand && input.includes(sum - summand))

const run = (input, customPreambleSize) => {
  const preambleSize = customPreambleSize || 25
  const parsedInput = input.map(Number)

  return parsedInput
    .slice(preambleSize)
    .find((sum, index) => {
      const preamble = parsedInput.slice(index, index + preambleSize)
      return !containsTwoSummands(preamble, sum)
    })
}

module.exports = run
