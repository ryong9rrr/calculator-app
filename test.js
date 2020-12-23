const form = document.querySelector(".js-form");
const resultScreen = document.querySelector(".main-result");

let numArray = [];

class Stack{
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

let tempStack = new Stack();
let saveStack = new Stack();


function paintNumber() {
    var sum = 0;
    for(var i=0; i<numArray.length; i++){
        sum = sum + numArray[i];
    }

    const numberSum = Number(sum);
    resultScreen.innerText = numberSum;

    tempStack.push(numberSum);
}

function saveNumber(num) {
    numArray.push(num);
    paintNumber();
}

function clickedBtn(event){
    const btn = event.target;
    const btnValue = btn.value; //num 자료형 : string
    
    if(btn.id < 10){
        saveNumber(btnValue);
    } else if(btn.id === "add"){
        console.log("add");
        saveStack.push(tempStack.pop());  // saveStack 에 후위연산해야함
        console.log(saveStack);
        tempStack = new Stack();
        numArray = [];
        console.log(tempStack);
        console.log(numArray);
    } else {
        console.log("error..");
    }
    
}

function init() {
    form.addEventListener('click', clickedBtn);
}

init();