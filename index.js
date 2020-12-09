const form = document.querySelector(".js-form");
const resultScreen = document.querySelector(".main-result");
let valueArray = [];
/*
const btnDivision = document.getElementById("division");
const btnMultiply = document.getElementById("multiply");
const btnSubtract = document.getElementById("subtract");
const btnPlus = document.getElementById("plus");
const btnNum7 = document.getElementById("num_7");
const btnNum8 = document.getElementById("num_8");
const btnNum9 = document.getElementById("num_9");
const btnNum4 = document.getElementById("num_4");
const btnNum5 = document.getElementById("num_5");
const btnNum6 = document.getElementById("num_6");
const btnNum1 = document.getElementById("num_1");
const btnNum2 = document.getElementById("num_2");
const btnNum3 = document.getElementById("num_3");
const btnDelete = document.getElementById("delete");
const btnNum0 = document.getElementById("num_0");
const btnDot = document.getElementById("dot");
const btnEqual = document.getElementById("equal");
const btnAC = document.getElementById("AC");
*/
function mathNotation(){
    console.log("math");
}

function returnZero(){
    console.log("returnZero");
}

class Stack {
    constructor() {
      this.store = [];
    }
    
    push(item) {
      this.store.push(item);
    }
    
    pop() {
      return this.store.pop();
    }
}

function saveNumber(currentValue) {
    const leg = valueArray.length;
    const currentResult = Math.pow(10, leg) * currentValue;
    valueArray.push(currentResult); 
    console.log(valueArray);
    //valueArray.reverse.push(currentValue);
    //resultScreen.innerText = `${valueArray}`;
    
}

function loadNumber(event) {
    const btn = event.target;
    const currentValue = btn.value;
    //const stackSaveLength = stackSave.store.length;
    const testLength = test.length;

    test.push(currentValue);
    stackSave.push(currentValue);
    
    var sum = 0;

    if (btn.id < 10) {
        saveNumber(currentValue);
    } /*else if(btn.id == "dot" | btn.id == "left" | btn.id == "right"){

    }*/ else if(btn.id == "delete") {
        deleteNum();
    } else if(btn.id == "equal") {
        calculate();
    } else if (btn.id =="AC") {
        returnZero();
    } else {
        mathNotation();
    }

    //const result = Math.pow(10, stackSaveLength) * stack.pop();

    resultScreen.innerText = `${sum}`;
    
}

function init() {
    form.addEventListener('click', loadNumber);
}

init();