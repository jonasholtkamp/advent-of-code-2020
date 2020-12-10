const fs = require('fs')
const path = require('path')

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8').trim().split('\n')

// it('1', () => {
//   expect(require('./1')(input, 5)).toEqual(127)
// })

it('2', () => {
  expect(require('./2')(input)).toEqual(62)
})
