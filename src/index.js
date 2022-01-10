import { checkBracket } from "../algorithm/checkBracket.js";
import { checkDecimal } from "../algorithm/checkDecimal.js";

const $ = (selector) => document.querySelector(selector);
const DISPLAY = $("#total");
let stack = [];

function putNumbers({ target }) {
  stack.push(target.textContent);
  DISPLAY.textContent = stack.join("");
}

function operate(strings) {
  if (!checkBracket(strings)) {
    return alert("괄호가 올바르지 않습니다.");
  }

  if (!checkDecimal(strings)) {
    return alert("소수점이 올바르지 않습니다.");
  }
  console.log(strings);
}

function putEqual() {
  if (stack.length === 0) {
    return (DISPLAY.textContent = "0");
  }

  if (stack[stack.length - 1] !== ")" && isNaN(stack[stack.length - 1])) {
    return alert("올바르지 않은 수식입니다.");
  }

  return operate(stack.join(""));
}

function putOperators({ target }) {
  if (target.textContent === "=") {
    return putEqual();
  }

  if (
    (target.textContent === "/" ||
      target.textContent === "X" ||
      target.textContent === ".") &&
    (stack.length === 0 ||
      (stack.length > 0 &&
        stack[stack.length - 1] !== ")" &&
        isNaN(stack[stack.length - 1])))
  ) {
    return alert("올바르지 않은 수식입니다.");
  }

  if (
    target.textContent === "(" &&
    stack.length > 0 &&
    !isNaN(stack[stack.length - 1])
  ) {
    return alert("올바르지 않은 수식입니다.");
  }

  if (
    target.textContent === "." &&
    stack.length > 0 &&
    stack[stack.length - 1] === ")"
  ) {
    return alert("올바르지 않은 수식입니다.");
  }

  stack.push(target.textContent);
  DISPLAY.textContent = stack.join("");
}

function displayClear() {
  stack = [];
  return (DISPLAY.textContent = "0");
}

function putModifiers({ target }) {
  if (target.textContent === "del") {
    if (stack.length === 1) {
      return displayClear();
    } else if (stack.length > 1) {
      stack.pop();
      return (DISPLAY.textContent = stack.join(""));
    }
  } else if (target.textContent === "AC") {
    return displayClear();
  }
}

function Calculator() {
  $(".digits").addEventListener("click", putNumbers);
  $(".operations").addEventListener("click", putOperators);
  $(".modifiers").addEventListener("click", putModifiers);
}

Calculator();
