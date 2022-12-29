export default function checkBracket(exp: string) {
  if (exp.length === 0) {
    return
  }

  const stack = []
  for (const char of exp) {
    if (char === '(') {
      stack.push(char)
    } else if (char === ')') {
      if (stack.length === 0) {
        throw new Error('invalid expression.')
      }
      if (stack.length > 0 && stack[stack.length - 1] == '(') {
        stack.pop()
        continue
      }
      stack.push(char)
    }
  }
  if (stack.length > 0) {
    throw new Error('invalid expression.')
  }
}
