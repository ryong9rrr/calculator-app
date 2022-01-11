// 후위연산 알고리즘
export class Operator {
  constructor(func) {
    this.func = func;
    this.stack = [];
    this.postfixStack = [];
    this.temp = "";
  }

  get stackLength() {
    return this.stack.length;
  }

  get stackLast() {
    return this.stackLength > 0
      ? this.stack[this.stackLength - 1]
      : console.error("스택이 비었어요.");
  }

  #prec = (op) => {
    switch (op) {
      case "(":
      case ")":
        return 0;
      case "+":
      case "-":
        return 1;
      case "X":
      case "/":
        return 2;
    }
    return 999;
  };

  #postfix = () => {
    if (this.func[0] === "+" || this.func[0] === "-") {
      this.stack.push("0");
    }
    for (const [i, x] of Array.from(this.func).entries()) {
      switch (x) {
        case "(":
          this.stack.push(x);
          break;

        case "+":
        case "-":
        case "X":
        case "/":
          while (
            this.stackLength > 0 &&
            this.#prec(x) <= this.#prec(this.stackLast)
          ) {
            this.postfixStack.push(this.stack.pop());
          }
          this.stack.push(x);
          break;

        case ")":
          // 스택이 비어있으면 올바르지 않은 수식? -> 상위에서 try ~ catch 할 것
          if (this.stackLength === 0)
            throw new Error("case ')' error: 스택이 비어있어요. ");
          let returnedOp = this.stack.pop();
          while (this.stackLength > 0 && returnedOp !== "(") {
            this.temp += returnedOp;
            returnedOp = this.stack.pop();

            if (isNaN(this.stackLast)) {
              this.postfixStack.push(this.temp);
              this.temp = "";
            }
          }
          break;

        default:
          this.temp += x;
          if (isNaN(this.func[i + 1]) || i + 1 == this.stackLength) {
            if (this.func[i + 1] === ".") {
              //소수점 처리
              continue;
            }
            this.postfixStack.push(this.temp);
            this.temp = "";
          }
          break;
      }
    }
    while (this.stackLength > 0) {
      this.postfixStack.push(this.stack.pop());
    }

    return true;
  };

  #operatePostfix = () => {
    if (!this.#postfix())
      throw new Error("postfix error: 올바르지 않은 수식이에요.");
    for (const x of this.postfixStack) {
      if (!isNaN(x)) {
        this.stack.push(x);
      } else {
        const b = parseFloat(this.stack.pop());
        const a = parseFloat(this.stack.pop());

        switch (x) {
          case "+":
            this.stack.push(a + b);
            break;
          case "-":
            this.stack.push(a - b);
            break;
          case "X":
            this.stack.push(a * b);
            break;
          case "/":
            this.stack.push(a / b);
            break;
        }
      }
    }
    if (this.stackLength > 1 || isNaN(Number(this.stack))) {
      throw new Error("operate Error: 올바르지 않은 수식이에요.");
    }

    return Number(this.stack[0]);
  };

  operate = () => {
    return this.#operatePostfix();
  };
}
