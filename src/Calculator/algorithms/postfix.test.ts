import postfix from './postfix'

test('algorithms test : postfix()', () => {
  const arr = [
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
  ]

  const result = ['100', '200', '300', 'X', '-', '500', '-', '20', '2', '/', '+']
  expect(postfix(arr)).toEqual(result)
})
