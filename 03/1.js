const getObjectAt = (map, target) => {
  const mapOverflowAt = map[0].length
  return map[target[1]][target[0] % mapOverflowAt]
}

const calculateTarget = (start, route) => [start[0] + route[0], start[1] + route[1]]

const run = input => {
  const twoDimMap = input.map(row => row.split(''))
  const start = [0, 0]
  const route = [3, 1]

  let target = start
  const targetRows = twoDimMap.length / route[1] - 1
  return Array(targetRows)
    .fill('')
    .map(_ => {
      target = calculateTarget(target, route)
      return getObjectAt(twoDimMap, target)
    })
    .filter(val => val === '#')
    .length
}

module.exports = run
