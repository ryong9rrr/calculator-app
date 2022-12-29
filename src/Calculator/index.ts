import { CalculatorService } from '@/interfaces'

export default class Calculator implements CalculatorService {
  //eslint-disable-next-line
  calculate(expression: string): number {
    return 0
  }

  add(a: number, b: number) {
    return a + b
  }
}
