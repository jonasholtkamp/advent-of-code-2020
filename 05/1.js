const toRowAndColumn = input => {
  const binary = input
    .replace(/[BR]/g, 1)
    .replace(/[FL]/g, 0)

  const rowBinary = binary
    .slice(0, 7)

  const columnBinary = binary
    .slice(-3)

  return { row: parseInt(rowBinary, 2), column: parseInt(columnBinary, 2) }
}

const toSeatId = rowAndColumn => rowAndColumn.row * 8 + rowAndColumn.column

const descending = (a, b) => a - b


const run = input => {
  return input
    .map(toRowAndColumn)
    .map(toSeatId)
    .sort(descending)
    .pop()
}

module.exports = run
