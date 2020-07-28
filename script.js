
// pin generate part
// var pinGenerate = document.getElementById('pin-generate');
//     pinGenerate.addEventListener('click', function(){
//         var pinRandom = Math.random() * 1000;
//         var pinRandomNum = Math.round(pinRandom);
//         console.log(pinRandomNum);
//     })




// calculator part

var displayValue = "";
var inputDisplay = document.getElementById('calc-input-display');

var updateDisplayValue = (clickObj) => {
    var btnText = clickObj.target.innerText;

    if(displayValue === "")
       displayValue = "";

    displayValue += btnText;
    inputDisplay.value = displayValue;
}

var calcNumBtn = document.getElementsByClassName('calc-btn');
for (let i = 0; i < calcNumBtn.length; i++) {
    calcNumBtn[i].addEventListener('click', updateDisplayValue);
    
}

// clear button
var clearBtn = document.getElementById('calc-clear');
clearBtn.onclick = () => {
    displayValue = "";
    inputDisplay.value = displayValue;
}

// backspace button
var backspaceBtn = document.getElementById('calc-backspace');
backspaceBtn.onclick = () => {
    let lengthOfDisplayValue = displayValue.length;
    displayValue = displayValue.slice(0, lengthOfDisplayValue - 1);

    if(displayValue === "")
       displayValue = "";
       inputDisplay.value = displayValue;
}
