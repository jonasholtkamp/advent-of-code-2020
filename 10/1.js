const increaseIfDifferenceIs = (counter, difference, expectedDifference) => counter + ((difference === expectedDifference) ? 1 : 0)

const increaseIfDifferenceIsOne = (counter, difference) => increaseIfDifferenceIs(counter, difference, 1)

const increaseIfDifferenceIsThree = (counter, difference) => increaseIfDifferenceIs(counter, difference, 3)

const run = input => {
  const parsedInput = input
    .map(Number)
    .sort((a, b) => a - b)

  const chainingResult = parsedInput
    .reduce(({ oneJoltDiff, threeJoltDiff, currentJoltage }, outletJoltage) => {
      const joltDiff = outletJoltage - currentJoltage

      if (joltDiff > 3) throw Error(`Jolt difference can't be more than 3, is ${joltDiff}`)

      return {
        oneJoltDiff: increaseIfDifferenceIsOne(oneJoltDiff, joltDiff),
        threeJoltDiff: increaseIfDifferenceIsThree(threeJoltDiff, joltDiff),
        currentJoltage: outletJoltage
      }
    }, { oneJoltDiff: 0, threeJoltDiff: 0, currentJoltage: 0 })

  return chainingResult.oneJoltDiff * (chainingResult.threeJoltDiff + 1)
}

module.exports = run
