import calculateForPostfix from './calculateForPostfix'

const TEST_CASE = [
  {
    expArrForPostfix: ['100', '200', '300', 'X', '-', '500', '-', '20', '2', '/', '+'],
    result: -60390,
  },
  {
    expArrForPostfix: ['1', '3', '8', 'X', '+'],
    result: 25,
  },
  {
    expArrForPostfix: ['2', '5', 'X', '7', '-'],
    result: 3,
  },
  {
    expArrForPostfix: ['2.1', '5.3', 'X', '7.0', '-'],
    result: 4.13,
  },
]

test('algorithms test : calculateForPostfix()', () => {
  TEST_CASE.forEach(({ expArrForPostfix, result }) => {
    const calculatingResult = calculateForPostfix(expArrForPostfix)
    expect(calculatingResult).toEqual(result)
  })
})
