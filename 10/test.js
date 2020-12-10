const fs = require('fs')
const path = require('path')

const input1 = fs.readFileSync(path.join(__dirname, 'test-input-1.txt'), 'utf8').trim().split('\n')
const input2 = fs.readFileSync(path.join(__dirname, 'test-input-2.txt'), 'utf8').trim().split('\n')

it('1-1', () => {
  expect(require('./1')(input1)).toEqual(35)
})

it('1-2', () => {
  expect(require('./1')(input2)).toEqual(220)
})

it('2-1', () => {
  expect(require('./2')(input1)).toEqual(8)
})

// it('2-2', () => {
//   expect(require('./2')(input2)).toEqual(19208)
// })
