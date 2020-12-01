const input = [
  1721,
  979,
  366,
  299,
  675,
  1456
]

it('1-1', () => {
  expect(require('./a')(input)).toBe(514579)
})

it('1-2', () => {
  expect(require('./b')(input)).toBe(241861950)
})
