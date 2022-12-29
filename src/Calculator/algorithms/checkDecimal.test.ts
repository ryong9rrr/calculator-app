import checkDecimal from './checkDecimal'

const TEST_CASE: [string, boolean][] = [
  ['0.22.1.2', false],
  ['5+0.001', true],
  ['5+0.0.1', false],
  ['0.51+0.1', true],
  ['.5+2', false],
  ['0.5+.2', false],
  ['-0.5+1', true],
  ['-0.0.2', false],
  ['0.5', true],
  ['5+1.001', true],
  ['5+0.2.1', false],
  ['0.51+1.1', true],
  ['.5+2', false],
  ['5+.2', false],
  ['0.5+.2', false],
  ['-1.5+1', true],
  ['-0.0.2', false],
  ['0.5', true],
  ['5+0.22.1', false],
  ['0.51+1..1', false],
  ['..5+2', false],
  ['0.5+.22', false],
  ['-1.5+1', true],
  ['-0.0.2', false],
  ['-0.0002.1111', false],
  ['0.5', true],
]

test('algorithms test : checkDecimal()', () => {
  TEST_CASE.forEach(([exp, result]) => {
    expect(checkDecimal(exp)).toEqual(result)
  })
})
