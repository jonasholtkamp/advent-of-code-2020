it('1', () => {
  const input = [
    'FBFBBFFRLR',
    'BFFFBBFRRR',
    'FFFBBBFRRR',
    'BBFFBBFRLL'
  ]

  expect(require('./1')(input)).toEqual(820)
})
