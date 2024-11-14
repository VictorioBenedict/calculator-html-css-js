
const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    //display.value = "miss na kita <3";    
    display.value = eval(display.value);
}

