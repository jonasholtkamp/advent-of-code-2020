const toIndexedMap = (prev, { container, content }) => Object.assign(prev, { [container]: content })

const getContainersFor = (searchString, indexedMap) => {
  const containersWithThisObject = Object.entries(indexedMap)
    .filter(([_, content]) => content.includes(searchString))
    .map(([container]) => container)

  return [
    containersWithThisObject,
    containersWithThisObject.flatMap(container => getContainersFor(container, indexedMap))
  ].flat()
}

const run = input => {
  const searchForBag = 'shiny gold'

  const indexedMap = input
    .map(line => {
      const [container, contentList] = line.split(/ bags? contain /)

      return {
        container,
        content: contentList
          .split(', ')
          .map(content => content.replace('.', ''))
          .map(content => {
            if (content === 'no other bags') return undefined
            return content.match(/\s([\w\s]+) bags?/)[1]
          })
      }
    })
    .reduce(toIndexedMap, {})

  return new Set(getContainersFor(searchForBag, indexedMap)).size
}

module.exports = run
