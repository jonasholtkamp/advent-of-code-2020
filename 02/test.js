const input = [
  '1-3 a: abcde',
  '1-3 b: cdefg',
  '2-9 c: ccccccccc'
]

it('1', () => {
  expect(require('./1')(input)).toBe(2)
})

it('2', () => {
  expect(require('./2')(input)).toBe(1)
})
