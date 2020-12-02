const input = [
  1721,
  979,
  366,
  299,
  675,
  1456
]

it('1', () => {
  expect(require('./1')(input)).toBe(514579)
})

it('2', () => {
  expect(require('./2')(input)).toBe(241861950)
})
