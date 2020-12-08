const parseLine = line => /^(nop|acc|jmp) ([+-]\d+)$/.exec(line).slice(1, 3)

const calculateAccumulatorChange = (instruction, argument) => {
  if (instruction === 'acc') return parseInt(argument)
  return 0
}

const calculateOffsetChange = (instruction, argument) => {
  if (instruction === 'jmp') return parseInt(argument)
  return 1
}

const run = input => {
  let i = 0
  let accumulator = 0
  const visitedInstructions = []
  while (i < input.length) {
    const [instruction, argument] = parseLine(input[i])

    accumulator += calculateAccumulatorChange(instruction, argument)
    i += calculateOffsetChange(instruction, argument)

    if (visitedInstructions.includes(i)) break
    visitedInstructions.push(i)
  }

  return accumulator
}

module.exports = run
