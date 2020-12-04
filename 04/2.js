const toPassportAttribute = field => field.match(/(\w+):(.+)/)

const toPassport = input => {
  const a = input
    .replace(/\n/g, ' ')
    .split(' ')
    .map(toPassportAttribute)
    .filter(val => val)

  return a.reduce((acc, [_, key, value]) => Object.assign(acc, { [key]: String(value) }), {})
}

const validators = {
  betweenIncluding: (val, lowerLimit, upperLimit) => val >= lowerLimit && val <= upperLimit,
  hasDigits: (val, number) => RegExp(`^\\d{${number}}$`).test(val),
  hasFourDigits: val => validators.hasDigits(val, 4),
  hasNineDigits: val => validators.hasDigits(val, 9),
  isCentimeters: val => /^\d+cm$/.test(val),
  isCentimetersBetween: (val, lowerLimit, upperLimit) => validators.isCentimeters(val) && validators.betweenIncluding(val.slice(0, -2), lowerLimit, upperLimit),
  isInches: val => /^\d+in$/.test(val),
  isInchesBetween: (val, lowerLimit, upperLimit) => validators.isInches(val) && validators.betweenIncluding(val.slice(0, -2), lowerLimit, upperLimit),
  isHexColor: val => /^#[0-9a-f]{6}$/.test(val)
}

// Yes, there is Joi and AJV. But this is more fun :)
const validationMap = {
  byr: val => validators.hasFourDigits(val) && validators.betweenIncluding(val, 1920, 2002),
  iyr: val => validators.hasFourDigits(val) && validators.betweenIncluding(val, 2010, 2020),
  eyr: val => validators.hasFourDigits(val) && validators.betweenIncluding(val, 2020, 2030),
  hgt: val => validators.isCentimetersBetween(val, 150, 193) || validators.isInchesBetween(val, 59, 76),
  hcl: validators.isHexColor,
  ecl: val => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(val),
  pid: validators.hasNineDigits
}

const hasValidContent = (key, value) => !validationMap[key] || validationMap[key](value)

const byValidating = passport => Object.keys(validationMap).every(field => hasValidContent(field, passport[field]))

const run = input => {
  return input
    .split(/\n\n/g)
    .map(toPassport)
    .filter(byValidating)
    .length
}

module.exports = run
