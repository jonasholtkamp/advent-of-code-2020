const toListOfPeople = group => group.split('\n')

const toSetOfAnswers = people => people
  .flatMap(answers => answers.match(/\w/g))
  .reduce((prev, cur) => prev.add(cur), new Set())

const addingUpAnswers = (prev, cur) => prev + cur.size

const run = input => {
  return input
    .map(toListOfPeople)
    .map(toSetOfAnswers)
    .reduce(addingUpAnswers, 0)
}

module.exports = run
