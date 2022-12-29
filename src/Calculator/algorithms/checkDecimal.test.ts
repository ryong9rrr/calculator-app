import checkDecimal from './checkDecimal'

describe('algorithms test : checkDecimal()', () => {
  test('ok', () => {
    const TEST_CASE = [
      '5+0.001',
      '0.51+0.1',
      '-0.5+1',
      '0.5',
      '5+1.001',
      '0.51+1.1',
      '-1.5+1',
      '0.5',
      '-1.5+1',
      '0.5',
    ]

    TEST_CASE.forEach((exp) => {
      expect(() => {
        checkDecimal(exp)
      }).not.toThrow()
    })
  })

  test('throw error', () => {
    const TEST_CASE = [
      '0.22.1.2',
      '5+0.0.1',
      '.5+2',
      '0.5+.2',
      '-0.0.2',
      '5+0.2.1',
      '.5+2',
      '5+.2',
      '0.5+.2',
      '-0.0.2',
      '5+0.22.1',
      '0.51+1..1',
      '..5+2',
      '0.5+.22',
      '-0.0.2',
      '-0.0002.1111',
    ]

    TEST_CASE.forEach((exp) => {
      expect(() => {
        checkDecimal(exp)
      }).toThrow()
    })
  })
})
