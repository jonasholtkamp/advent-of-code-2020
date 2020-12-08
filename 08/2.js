const parseLine = line => /^(nop|acc|jmp) ([+-]\d+)$/.exec(line).slice(1, 3)

const calculateAccumulatorChange = (instruction, argument) => (instruction === 'acc') ? parseInt(argument) : 0

const calculateOffsetChange = (instruction, argument) => (instruction === 'jmp') ? parseInt(argument) : 1

const flipInstructionMap = {
  jmp: 'nop',
  nop: 'jmp'
}

const flipInstruction = (input, positionToFlip) => {
  const flippedInput = [...input]
  const instructionSetToFlip = input[positionToFlip]
  flippedInput.splice(positionToFlip, 1, [flipInstructionMap[instructionSetToFlip[0]], instructionSetToFlip[1]])
  return flippedInput
}

const getAccumulatorResult = (input, positionToFlip) => {
  const flippedInput = flipInstruction(input, positionToFlip)

  let i = 0
  let accumulator = 0
  const visitedInstructions = []

  while (i < flippedInput.length) {
    const [instruction, argument] = flippedInput[i]

    accumulator += calculateAccumulatorChange(instruction, argument)
    i += calculateOffsetChange(instruction, argument)

    if (visitedInstructions.includes(i)) break
    visitedInstructions.push(i)
  }

  return { accumulator, lastInstructionExecuted: i }
}

const run = input => {
  const parsedInput = input
    .map(parseLine)

  const positionsOfNopAndJmpInstructions = parsedInput
    .reduce((prev, [instruction], index) => (['nop', 'jmp'].includes(instruction)) ? [...prev, index] : prev, [])

  for (const positionToFlip of positionsOfNopAndJmpInstructions) {
    const { accumulator, lastInstructionExecuted } = getAccumulatorResult(parsedInput, positionToFlip)
    if (lastInstructionExecuted === input.length) return accumulator
  }
}

module.exports = run
