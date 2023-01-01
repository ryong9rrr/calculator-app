import validateForBracket from './validateForBracket'

describe('algorithms test : validateForBracket()', () => {
  test('ok', () => {
    const TEST_CASE = [
      '5 + 2',
      '(5 + 2)',
      '(5)',
      '(1 + 2) * 3',
      '2 + 3 * (2 + 3) / 4 * (2 + 3)',
      '3 * (4 + ((1 + 2) * 3))',
    ]

    TEST_CASE.forEach((exp) => {
      expect(() => {
        validateForBracket(exp)
      }).not.toThrow()
    })
  })

  test('throw error', () => {
    const TEST_CASE = [
      '(5 + 2',
      '5 + 2)',
      '5)',
      '1 + 2) * 3',
      '(1 + 2 * 3',
      '2 + 3 * (2 + 3 / 4 * (2 + 3)',
      '(2 + 3) * 2 + 3) / 4 * (2 + 3)',
      '3 * 4 + ((1 + 2) * 3))',
      '3 * 4 + (1 + 2 * 3))',
      '5)+(3',
      '))((',
    ]

    TEST_CASE.forEach((exp) => {
      expect(() => {
        validateForBracket(exp)
      }).toThrow('bracket')
    })
  })
})
