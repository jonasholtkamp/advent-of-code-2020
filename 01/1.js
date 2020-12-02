const run = numbers => {
  const numbers2 = [...numbers]
  for (const number of numbers) {
    for (const number2 of numbers2) {
      // console.log({number, number2})
      if (number !== number2 && number + number2 === 2020) {
        return number * number2
      }
    }
  }
}

module.exports = run
