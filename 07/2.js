const toIndexedMap = (prev, { container, content }) => Object.assign(prev, { [container]: content })

const sumOf = array => array.reduce((prev, cur) => prev + cur, 0)

const firstLevelContent = content => content.map(({ number }) => parseInt(number))

const recursiveContent = (content, indexedMap) => content.map(({ number, type }) => number * getContentCountFor(type, indexedMap))

const getContentCountFor = (searchString, indexedMap) => {
  const content = indexedMap[searchString].filter(s => s)

  return sumOf(firstLevelContent(content)) + sumOf(recursiveContent(content, indexedMap))
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
            const numberAndType = content.match(/(\d+)\s([\w\s]+) bags?/)
            return { number: numberAndType[1], type: numberAndType[2] }
          })
      }
    })
    .reduce(toIndexedMap, {})

  return getContentCountFor(searchForBag, indexedMap)
}

module.exports = run
