const fs = require('fs')
const path = require('path')

const input = fs.readFileSync(path.join(__dirname, 'test-input.txt'), 'utf8').trim().split('\n\n')

it('1', () => {
  expect(require('./1')(input)).toEqual(11)
})

it('1', () => {
  expect(require('./2')(input)).toEqual(6)
})
