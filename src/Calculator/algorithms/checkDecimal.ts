export default function checkDecimal(exp: string) {
  if (exp.length === 0) {
    return true
  }

  if (exp[0] === '.') {
    return false
  }

  const check1 = /[.]\d+[.]/g
  const check2 = /\D[.]+\d+/g
  if (check1.test(exp) || check2.test(exp)) {
    return false
  }
  return true
}
