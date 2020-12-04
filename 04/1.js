const toPassportAttribute = field => field.match(/(\w+):(.+)/)

const toPassport = input => {
  const a = input
    .replace(/\n/g, ' ')
    .split(' ')
    .map(toPassportAttribute)
    .filter(val => val)

  return a.reduce((acc, [_, key, value]) => Object.assign(acc, { [key]: value }), {})
}

const mandatoryPassportFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

const byValidating = passport => mandatoryPassportFields.every(field => Object.keys(passport).includes(field))

const run = input => {
  return input
    .split(/\n\n/g)
    .map(toPassport)
    .filter(byValidating)
    .length
}

module.exports = run
