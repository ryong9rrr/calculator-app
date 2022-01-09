# 오직 괄호의 짝이 맞는지만 검사하는 알고리즘
# 올바른 식인지 아닌지는 관심없음

# 아래 테스트 케이스 모두 통과
TEST_CASE = [
    ("5 + 2", True),
    ("(5 + 2)", True),
    ("(5 + 2", False),
    ("5 + 2)", False),
    ("(5)", True),
    ("5)", False),
    ("(1 + 2) * 3", True),
    ("1 + 2) * 3", False),
    ("(1 + 2 * 3", False),
    ("2 + 3 * (2 + 3) / 4 * (2 + 3)", True),
    ("2 + 3 * (2 + 3 / 4 * (2 + 3)", False),
    ("(2 + 3) * 2 + 3) / 4 * (2 + 3)", False),
    ("3 * (4 + ((1 + 2) * 3))", True),
    ("3 * 4 + ((1 + 2) * 3))", False),
    ("3 * 4 + (1 + 2 * 3))", False),
    ("5)+(3", False),
    ("))((", False)
]

# 오직 괄호의 짝이 맞는지만 검사하는 함수
def check_braket(strings):
    stack = []
    for char in strings:
        if char == "(":
            stack.append(char)
        elif char == ")":
            if not stack:
                return False
            if stack and stack[-1] == "(":
                stack.pop()
                continue
            stack.append(char)
    if stack:
        return False
    return True

# 테스트 진행, 모두 True가 나와야 올바른 알고리즘
for case, expected_result in TEST_CASE:
    result = check_braket(case)
    print(f"{expected_result == result} ##### {case}")

"""
결과

True ##### 5 + 2
True ##### (5 + 2)
True ##### (5 + 2
True ##### 5 + 2)
True ##### (5)
True ##### 5)
True ##### (1 + 2) * 3
True ##### 1 + 2) * 3
True ##### (1 + 2 * 3
True ##### 2 + 3 * (2 + 3) / 4 * (2 + 3)
True ##### 2 + 3 * (2 + 3 / 4 * (2 + 3)
True ##### (2 + 3) * 2 + 3) / 4 * (2 + 3)
True ##### 3 * (4 + ((1 + 2) * 3))
True ##### 3 * 4 + ((1 + 2) * 3))
True ##### 3 * 4 + (1 + 2 * 3))
True ##### 5)+(3
True ##### ))((

Process finished with exit code 0
"""