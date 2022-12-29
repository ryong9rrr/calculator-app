import { CalculatorService } from './interfaces'

export default class App {
  private calculator: CalculatorService

  constructor(calculatorService: CalculatorService) {
    this.calculator = calculatorService
  }

  run() {
    console.log('app running...')
  }
}
