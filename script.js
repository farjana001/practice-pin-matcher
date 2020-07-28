
// // pin generate part
var pinGenerate = document.getElementById('pin-generate');
    pinGenerate.addEventListener('click', function(){
var pinRandomNum = Math.round(1000 + Math.random() * 9000);
    document.getElementById('generate-input-display').value = pinRandomNum;      
})



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
// document.getElementById('calc-input-display').value = "";

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



// submit part
var submitBtn = document.getElementById('calc-submit');
submitBtn.addEventListener('click', function(){
    let pinInput = document.getElementById('generate-input-display').value;
    let submitInput = document.getElementById('calc-input-display').value; 
    if (pinInput === submitInput){
        var pinMatched = document.getElementById('pin-matched');
        pinMatched.style.display = 'block';
        var missMatched = document.getElementById('miss-matched');
        missMatched.style.display = 'none';
        document.getElementById('generate-input-display').value = "";
        document.getElementById('calc-input-display').value = "";
    }
    else{
        var pinMatched = document.getElementById('pin-matched');
        pinMatched.style.display = 'none';
        var missMatched = document.getElementById('miss-matched');
        missMatched.style.display = 'block';
        document.getElementById('generate-input-display').value = "";
        document.getElementById('calc-input-display').value = ""; 
    }
})
