import checkBracket from './checkBrackets'

const TEST_CASE: [string, boolean][] = [
  ['5 + 2', true],
  ['(5 + 2)', true],
  ['(5 + 2', false],
  ['5 + 2)', false],
  ['(5)', true],
  ['5)', false],
  ['(1 + 2) * 3', true],
  ['1 + 2) * 3', false],
  ['(1 + 2 * 3', false],
  ['2 + 3 * (2 + 3) / 4 * (2 + 3)', true],
  ['2 + 3 * (2 + 3 / 4 * (2 + 3)', false],
  ['(2 + 3) * 2 + 3) / 4 * (2 + 3)', false],
  ['3 * (4 + ((1 + 2) * 3))', true],
  ['3 * 4 + ((1 + 2) * 3))', false],
  ['3 * 4 + (1 + 2 * 3))', false],
  ['5)+(3', false],
  ['))((', false],
]

test('algorithms test : checkBrackets()', () => {
  TEST_CASE.forEach(([exp, result]) => {
    expect(checkBracket(exp)).toEqual(result)
  })
})
