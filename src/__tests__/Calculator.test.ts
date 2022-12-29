import Calculator from '@/modules/Calculator'

let calculator: Calculator | null = null

describe('sample test', () => {
  beforeEach(() => {
    calculator = new Calculator()
  })

  test('add', () => {
    const result = calculator?.add(1, 2)

    expect(result).toEqual(3)
  })
})
