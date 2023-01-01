const format = (number: string) => {
  if (parseFloat(number) === parseInt(number, 10)) {
    return parseInt(number, 10)
  }
  return Number(parseFloat(number).toFixed(2))
}

export default function calculateForPostfix(exp: string[]) {
  const stack: (string | number)[] = []

  for (const x of exp) {
    if (!Number.isNaN(Number(x))) {
      stack.push(x)
    } else {
      const b = parseFloat(stack.pop() as string)
      const a = parseFloat(stack.pop() as string)

      switch (x) {
        case '+':
          stack.push(a + b)
          break
        case '-':
          stack.push(a - b)
          break
        case 'X':
          stack.push(a * b)
          break
        case '/':
          stack.push(a / b)
          break
      }
    }
  }

  const result = stack[0]

  if (stack.length > 1 || Number.isNaN(Number(result))) {
    throw new Error('operate Error: 올바르지 않은 수식이에요.')
  }

  return format(result.toString())
}
