import sliceExpression from './sliceExpression'

const TEST_CASE = [
  {
    exp: '(((100-(200X300))-500)+(20/2))',
    result: [
      '(',
      '(',
      '(',
      '100',
      '-',
      '(',
      '200',
      'X',
      '300',
      ')',
      ')',
      '-',
      '500',
      ')',
      '+',
      '(',
      '20',
      '/',
      '2',
      ')',
      ')',
    ],
  },
  {
    exp: '1+3X8',
    result: ['1', '+', '3', 'X', '8'],
  },
  {
    exp: '2X5-7',
    result: ['2', 'X', '5', '-', '7'],
  },
  {
    exp: '2.1X5.3-7.0',
    result: ['2.1', 'X', '5.3', '-', '7.0'],
  },
]

test('algorithms test : sliceExpression()', () => {
  TEST_CASE.forEach(({ exp, result }) => {
    expect(sliceExpression(exp)).toEqual(result)
  })
})
