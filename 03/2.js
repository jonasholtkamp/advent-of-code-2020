const getObjectAt = (map, target) => {
  const mapOverflowAt = map[0].length
  return map[target[1]][target[0] % mapOverflowAt]
}

const calculateTarget = (start, route) => [start[0] + route[0], start[1] + route[1]]

const getEncountersForRoute = (map, start, route) => {
  let target = start
  const targetRows = Math.floor(map.length / route[1] - 1)
  return Array(targetRows)
    .fill('')
    .map(_ => {
      target = calculateTarget(target, route)
      return getObjectAt(map, target)
    })
    .filter(val => val === '#')
    .length
}

const byMultiplying = (prev, cur) => prev * cur

const run = input => {
  const twoDimMap = input.map(row => row.split(''))
  const start = [0, 0]
  const routes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]]

  return routes
    .map(route => getEncountersForRoute(twoDimMap, start, route))
    .reduce(byMultiplying)
}

module.exports = run
