// 오직 괄호의 짝이 맞는지만 검사하는 알고리즘
// 올바른 식인지 아닌지는 관심없음

// 아래 테스트 케이스 모두 통과
// TEST_CASE[](입력받은 수식, 기댓값)
const TEST_CASE = [
  ["5 + 2", true],
  ["(5 + 2)", true],
  ["(5 + 2", false],
  ["5 + 2)", false],
  ["(5)", true],
  ["5)", false],
  ["(1 + 2) * 3", true],
  ["1 + 2) * 3", false],
  ["(1 + 2 * 3", false],
  ["2 + 3 * (2 + 3) / 4 * (2 + 3)", true],
  ["2 + 3 * (2 + 3 / 4 * (2 + 3)", false],
  ["(2 + 3) * 2 + 3) / 4 * (2 + 3)", false],
  ["3 * (4 + ((1 + 2) * 3))", true],
  ["3 * 4 + ((1 + 2) * 3))", false],
  ["3 * 4 + (1 + 2 * 3))", false],
  ["5)+(3", false],
  ["))((", false],
];

export function checkBracket(strings) {
  if (strings.length === 0) {
    return true;
  }

  const stack = [];
  for (const char of strings) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0) {
        return false;
      }
      if (stack.length > 0 && stack[stack.length - 1] == "(") {
        stack.pop();
        continue;
      }
      stack.push(char);
    }
  }
  return stack.length > 0 ? false : true;
}

function test() {
  for (const [strings, expected] of TEST_CASE) {
    const result = checkBracket(strings);
    console.log(`${expected === result} #### ${strings}`);
  }
}

/*

true #### 5 + 2
true #### (5 + 2)
true #### (5 + 2
true #### 5 + 2)
true #### (5)
true #### 5)
true #### (1 + 2) * 3
true #### 1 + 2) * 3
true #### (1 + 2 * 3
true #### 2 + 3 * (2 + 3) / 4 * (2 + 3)
true #### 2 + 3 * (2 + 3 / 4 * (2 + 3)
true #### (2 + 3) * 2 + 3) / 4 * (2 + 3)
true #### 3 * (4 + ((1 + 2) * 3))
true #### 3 * 4 + ((1 + 2) * 3))
true #### 3 * 4 + (1 + 2 * 3))
true #### 5)+(3
true #### ))((
*/
