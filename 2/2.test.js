const input = [
  '1-3 a: abcde',
  '1-3 b: cdefg',
  '2-9 c: ccccccccc'
]

it('a', () => {
  expect(require('./a')(input)).toBe(2)
})

it('b', () => {
  expect(require('./b')(input)).toBe(1)
})
