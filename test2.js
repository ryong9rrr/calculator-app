const form = document.querySelector(".js-form");
const resultScreen = document.querySelector(".main-result");

let valueArray = [];

function resultBtn(){
    const result = resultScreen.textContent;

    console.log(result);
}

function initBtn(){
    valueArray = [];
    paintValue();
}

function delBtn(){
    valueArray.length = valueArray.length - 1;
    paintValue();
}

function paintValue() {
    var value = "";
    for(var i=0; i<valueArray.length; i++){
        value = value + valueArray[i];
    }
    resultScreen.innerText = value;
}

function saveBtn(value) {
    valueArray.push(value);
    paintValue();
}

function clickedBtn(event) {
    const btn = event.target;
    let btnValue = btn.value;

    if(btn.id < 30) {
        saveBtn(btnValue);
    } else if(btn.id =="31") {
        delBtn(btnValue);
    } else if(btn.id =="32") {
        initBtn(btnValue);
    } else if(btn.id =="33") {
        resultBtn(btnValue);
    }
    
}

function init() {
    form.addEventListener('click', clickedBtn);
}

init();

