// var btnOne = document.getElementById('calc-one');
// var btnTwo = document.getElementById('calc-two');
// var btnThree = document.getElementById('calc-three');
// var btnFour = document.getElementById('calc-four');
// var btnFive = document.getElementById('calc-five');
// var btnSix = document.getElementById('calc-six');
// var btnSeven = document.getElementById('calc-seven');
// var btnEight = document.getElementById('calc-eight');
// var btnNine = document.getElementById('calc-nine');
// var btnZero = document.getElementById('calc-zero');

var clearBtn = document.getElementById('calc-clear');
var calcBackspace = document.getElementById('calc-backspace');
var displayNumberValue = document.getElementById('calc-input-display');

var displayValue = "";
var evalStringArray = [];

var calcNumBtn = document.getElementsByClassName('calc-btn');

var updateDisplayValue = (clickObj) => {
    var btnText = clickObj.target.innerText;

    if(displayValue === "")
       displayValue = "";

    displayValue += btnText;
    displayNumberValue.value = displayValue;
}

for (let i = 0; i < calcNumBtn.length; i++) {
    calcNumBtn[i].addEventListener('click', updateDisplayValue, false);
    
}

clearBtn.onclick = () => {
    displayValue = "";
    evalStringArray = [];
    displayNumberValue.value = displayValue;
}