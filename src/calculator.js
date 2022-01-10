import { checkBracket } from "./utils/checkBracket.js";
import { checkDecimal } from "./utils/checkDecimal.js";

class Calculator {
  constructor(targetId) {
    this.stack = [];
    this.DISPLAY = document.querySelector(targetId);
  }

  get stackLength() {
    return this.stack.length;
  }

  get stackLast() {
    return this.stackLength > 0
      ? this.stack[this.stackLength - 1]
      : console.error("스택이 비었어요.");
  }

  #displayClear() {
    this.stack = [];
    return this.#render();
  }

  #clickedDelete = () => {
    if (this.stackLength === 1) return this.#displayClear();
    else if (this.stackLength > 1) {
      this.stack.pop();
      return this.#render();
    }
  };

  #operate(strings) {
    if (!checkBracket(strings)) return alert("괄호가 올바르지 않습니다.");
    if (!checkDecimal(strings)) return alert("소수점이 올바르지 않습니다.");

    console.log(strings);
    return;
  }

  #clickedEqual = () => {
    if (this.stackLength === 0) return this.#render();
    if (this.stackLast !== ")" && isNaN(this.stackLast)) {
      return alert("올바르지 않은 수식입니다.");
    }
    return this.#operate(this.stack.join(""));
  };

  #ValidOperators = (value) => {
    if (
      (value === "/" || value === "X" || value === ".") &&
      (this.stackLength === 0 ||
        (this.stackLength > 0 &&
          this.stackLast !== ")" &&
          isNaN(this.stackLast)))
    )
      return false;

    if (value === "(" && this.stackLength > 0 && !isNaN(this.stackLast))
      return false;

    if (value === "." && this.stackLength > 0 && this.stackLast === ")")
      return false;

    return true;
  };

  putOperators = ({ target }) => {
    if (target.textContent === "=") return this.#clickedEqual();
    if (!this.#ValidOperators(target.textContent))
      return alert("올바르지 않은 수식입니다.");

    this.stack.push(target.textContent);
    return this.#render();
  };

  putNumbers = ({ target }) => {
    this.stack.push(target.textContent);
    return this.#render();
  };

  putModifiers = ({ target }) => {
    if (target.textContent === "del") return this.#clickedDelete();
    if (target.textContent === "AC") return this.#displayClear();
  };

  #render = () => {
    if (this.stack.length === 0) {
      return (this.DISPLAY.textContent = "0");
    }
    return (this.DISPLAY.textContent = this.stack.join(""));
  };
}

export default Calculator;
