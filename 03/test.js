const input = [
  '..##.......',
  '#...#...#..',
  '.#....#..#.',
  '..#.#...#.#',
  '.#...##..#.',
  '..#.##.....',
  '.#.#.#....#',
  '.#........#',
  '#.##...#...',
  '#...##....#',
  '.#..#...#.#'
]

it('1', () => {
  expect(require('./1')(input)).toBe(7)
})

it('2', () => {
  expect(require('./2')(input)).toBe(336)
})
