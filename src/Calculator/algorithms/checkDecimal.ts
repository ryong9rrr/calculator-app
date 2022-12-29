export default function checkDecimal(exp: string) {
  if (exp.length === 0) {
    return
  }

  if (exp[0] === '.') {
    throw new Error('invalid expression.')
  }

  const check1 = /[.]\d+[.]/g
  const check2 = /\D[.]+\d+/g
  if (check1.test(exp) || check2.test(exp)) {
    throw new Error('invalid expression.')
  }
}
