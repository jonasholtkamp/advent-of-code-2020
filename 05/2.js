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

const generateAllPossibleSeats = () => {
  return Array(128)
    .fill(undefined)
    .map((_, index) => ({ row: index }))
    .map(value => {
      return Array(8)
        .fill(undefined)
        .map((_, index) => ({ column: index }))
        .flatMap(column => ({ ...value, ...column }))
    })
    .flat()
}

const toIndexedMap = (prev, { row, column }) => Object.assign(prev, { [row]: [...(prev[row] || []), column] })

const run = input => {
  const existingSeatsAsIndexedMap = input
    .map(toRowAndColumn)
    .reduce(toIndexedMap, {})

  const missingSeatIds = generateAllPossibleSeats()
    .filter(({ row, column }) => !existingSeatsAsIndexedMap[row] || !existingSeatsAsIndexedMap[row].includes(column))
    .map(toSeatId)

  const existingSeatIds = input
    .map(toRowAndColumn)
    .map(toSeatId)

  return missingSeatIds
    .filter(seatId => existingSeatIds.includes(seatId - 1) && existingSeatIds.includes(seatId + 1))
    .pop()
}

module.exports = run
