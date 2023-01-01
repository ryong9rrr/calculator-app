const ERROR_MESSAGE = 'invalid expression.'

const getPriority = (value: string) => {
  switch (value) {
    case '(':
    case ')':
      return 0
    case '+':
    case '-':
      return 1
    case 'X':
    case '/':
      return 2
  }
  return 999
}

export default function postfix(exp: string[]) {
  const stack: string[] = []
  const result: string[] = []
  let temp = ''

  if (exp[0] === '+' || exp[0] === '-') {
    stack.push('0')
  }

  for (const [i, x] of Array.from(exp).entries()) {
    switch (x) {
      case '(':
        stack.push(x)
        break

      case '+':
      case '-':
      case 'X':
      case '/':
        while (stack.length > 0 && getPriority(x) <= getPriority(stack[stack.length - 1])) {
          result.push(stack.pop() as string)
        }
        stack.push(x)
        break

      case ')':
        // 스택이 비어있으면 올바르지 않은 수식? -> 상위에서 try ~ catch 할 것
        if (stack.length === 0) throw new Error(ERROR_MESSAGE)
        let returnedOp = stack.pop() as string
        while (stack.length > 0 && returnedOp !== '(') {
          temp = temp + returnedOp
          returnedOp = stack.pop() as string

          if (Number.isNaN(Number(stack[stack.length - 1]))) {
            result.push(temp)
            temp = ''
          }
        }
        break

      default:
        temp += x
        if (Number.isNaN(Number(exp[i + 1])) || i + 1 === stack.length) {
          result.push(temp)
          temp = ''
        }
        break
    }
  }
  while (stack.length > 0) {
    result.push(stack.pop() as string)
  }

  return result
}
