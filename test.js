const form = document.querySelector(".js-form");
const resultScreen = document.querySelector(".main-result");

let numArray = [];

// loadNumber 함수에서 온 값을 변환
//입력받은 숫자의 자료형(String()) -> 숫자(Number())로 변환하는 함수
function switchToNumber(){
    
}


function loadNumber(event){
    const btn = event.target;
    const num = btn.value; //num 자료형 : string
    const a = num + num;
    console.log(num);
    console.log(a);
    //console.log(typeof(num)); 
}

function init() {
    form.addEventListener('click', loadNumber);
}

init();