const run = numbers => {
  for (const number1 of numbers) {
    for (const number2 of numbers) {
      for (const number3 of numbers) {
        if (number1 !== number2 && number1 !== number3 && number1 + number2 + number3 === 2020) {
          return number1 * number2 * number3
        }
      }
    }
  }
}

module.exports = run
