const TEST_CASE = [
  ["0.22.1.2", false],
  ["5+0.001", true],
  ["5+0.0.1", false],
  ["0.51+0.1", true],
  [".5+2", false],
  ["0.5+.2", false],
  ["-0.5+1", true],
  ["-0.0.2", false],
  ["0.5", true],
  ["5+1.001", true],
  ["5+0.2.1", false],
  ["0.51+1.1", true],
  [".5+2", false],
  ["5+.2", false],
  ["0.5+.2", false],
  ["-1.5+1", true],
  ["-0.0.2", false],
  ["0.5", true],
  ["5+0.22.1", false],
  ["0.51+1..1", false],
  ["..5+2", false],
  ["0.5+.22", false],
  ["-1.5+1", true],
  ["-0.0.2", false],
  ["-0.0002.1111", false],
  ["0.5", true],
];

export function checkDecimal(strings) {
  if (strings.length === 0) {
    return true;
  }

  if (strings[0] === ".") {
    return false;
  }

  const check1 = /[.]\d+[.]/g;
  const check2 = /\D[.]+\d+/g;
  if (check1.test(strings) || check2.test(strings)) {
    return false;
  }
  return true;
}

function test() {
  for (const [strings, expected] of TEST_CASE) {
    const result = checkDecimal(strings);
    console.log(`${expected === result} #### ${strings}`);
  }
}

/*

true #### 0.22.1.2
true #### 5+0.001
true #### 5+0.0.1
true #### 0.51+0.1
true #### .5+2
true #### 0.5+.2
true #### -0.5+1
true #### -0.0.2
true #### 0.5
true #### 5+1.001
true #### 5+0.2.1
true #### 0.51+1.1
true #### .5+2
true #### 5+.2
true #### 0.5+.2
true #### -1.5+1
true #### -0.0.2
true #### 0.5
true #### 5+0.22.1
true #### 0.51+1..1
true #### ..5+2
true #### 0.5+.22
true #### -1.5+1
true #### -0.0.2
true #### -0.0002.1111
true #### 0.5
*/
