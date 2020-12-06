const toListOfPeople = group => group.split('\n')

const toListsOfAnswers = people => people.map(answers => answers.match(/\w/g))

const toIntersectingAnswers = answers => answers
  .reduce((prev, cur, index) => {
    if (index === 0) return cur
    return prev.filter(answer => cur.includes(answer))
  })

const addingUpAnswers = (prev, cur) => prev + cur.length

const run = input => {
  return input
    .map(toListOfPeople)
    .map(toListsOfAnswers)
    .map(toIntersectingAnswers)
    .reduce(addingUpAnswers, 0)
}

module.exports = run
