const isDigit = (element: string) => {
  return !Number.isNaN(Number(element))
}

export default function postfix(expArr: string[]): string[] {
  const stack: string[] = []
  const postfixStack: string[] = []
  const ranks: { [key: string]: number } = {
    '(': 0,
    '+': 1,
    '-': 1,
    X: 2,
    '/': 2,
  }

  for (const elem of expArr) {
    if (isDigit(elem)) {
      postfixStack.push(elem)
      continue
    }

    if (elem === '(') {
      stack.push(elem)
      continue
    }

    if (elem === ')') {
      while (stack.length > 0 && stack[stack.length - 1] !== '(') {
        postfixStack.push(stack.pop() as string)
      }
      stack.pop()
      continue
    }

    while (stack.length > 0 && ranks[elem] <= ranks[stack[stack.length - 1]]) {
      postfixStack.push(stack.pop() as string)
      stack.push(elem)
    }
    stack.push(elem)
  }

  while (stack.length > 0) {
    postfixStack.push(stack.pop() as string)
  }

  return postfixStack
}
