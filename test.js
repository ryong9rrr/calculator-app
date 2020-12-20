const form = document.querySelector(".js-form");
const resultScreen = document.querySelector(".main-result");

let numArray = [];

function paintNumber() {
    var sum = 0;
    for(var i=0; i<numArray.length; i++){
        sum = sum + numArray[i];
    }
    resultScreen.innerText = Number(sum);
}

function saveNumber(num) {
    numArray.push(num);
    paintNumber();
}

function clickedNumber(event){
    const btn = event.target;
    const num = btn.value; //num 자료형 : string
    
    saveNumber(num);
}

function init() {
    form.addEventListener('click', clickedNumber);
}

init();