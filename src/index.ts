import './style/index.css'
import App from './app'
import Calculator from './Calculator'

const calculator = new Calculator()

const app = new App(calculator)

app.run()
