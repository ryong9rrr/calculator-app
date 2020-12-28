const form = document.querySelector(".js-form");
const resultScreen = document.querySelector(".main-result");

let valueArray = [];

let stack = [];
let convert = [];
let temp = ""; // 두자리수 이상의 숫자를 저장할 임시변수

// 우선순위를 반환하는 함수
function prec(op) {
    switch(op) {
        case '(':
        case ')':
            return 0;
        case '+':
        case '-':
            return 1;
        case '×':
        case '/':
            return 2;    
        }
        return 999;
}



function resultBtn(){
    const f = resultScreen.textContent;

    for(let i = 0; i<f.length; i++) {
        const char = f.charAt(i);
        
        switch(char) {
            case '(' :
                stack.push(char);
                break;

            case '+' : case '-' : case '×' : case '/' :
                //스택에 넣어야함





            case ')' :


            default :
                temp += char;
                if(isNaN(f.charAt(i+1)) || ((i+1)==f.length)){
                    convert.push(temp);
                    temp="";
                }
                break;
        }
    }

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

