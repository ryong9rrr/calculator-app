export default function sliceExpression(expression: string) {
  const result: string[] = ['']

  for (const value of [...expression]) {
    if (!Number.isNaN(Number(value)) || value === '.') {
      result[result.length - 1] += value
      continue
    }
    result.push(value)
    result.push('')
  }

  return result.filter((value) => value !== '')
}
