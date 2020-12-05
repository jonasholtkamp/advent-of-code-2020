it('1', () => {
  const input = [
    'FBFBBFFRLR',
    'BFFFBBFRRR',
    'FFFBBBFRRR',
    'BBFFBBFRLL'
  ]

  expect(require('./1')(input)).toEqual(820)
})

// it('2 valid', () => {
//   expect(require('./2')(input)).toBe(4)
// })

// it('2 invalid', () => {
//   expect(require('./2')(input)).toBe(0)
// })
