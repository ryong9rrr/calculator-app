const form = document.querySelector(".js-form");
const resultScreen = document.querySelector(".main-result");
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

function calculate(){
    console.log("calculate");
}

function deleteNum(){
    console.log("deleteNum");
}

function getValue(event){
    const btn = event.target;
    const currentValue = btn.value;

    if (btn.id < 10 | btn.id == "dot" | btn.id == "left" | btn.id == "right") {
        resultScreen.innerText = currentValue;
    } else if(btn.id == "delete") {
        deleteNum();
    } else if(btn.id == "equal") {
        calculate();
    } else if (btn.id =="AC") {
        returnZero();
    } else {
        mathNotation();
    }
}

function init(){
    form.addEventListener("click", getValue);
}

init();