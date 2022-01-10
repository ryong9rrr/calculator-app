import Calculator from "./calculator.js";
import { $ } from "./utils/DOM.js";

document.addEventListener("DOMContentLoaded", () => {
  const { putNumbers, putOperators, putModifiers } = new Calculator("#total");

  $(".digits").addEventListener("click", putNumbers);
  $(".operations").addEventListener("click", putOperators);
  $(".modifiers").addEventListener("click", putModifiers);
});
