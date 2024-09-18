const display = document.querySelector(".panel input");

let firstNum = "";
let operator = "";
let shouldClear= false;

const handleNumberClick = (numb) => {
    if (shouldClear) {
        display.value = "";
        shouldClear = false;
    }
    display.value += numb;
}

document.querySelector("#zero").addEventListener("click", () => handleNumberClick(0));
document.querySelector("#one").addEventListener("click", () => handleNumberClick(1));
document.querySelector("#two").addEventListener("click", () => handleNumberClick(2));
document.querySelector("#three").addEventListener("click", () => handleNumberClick(3));
document.querySelector("#four").addEventListener("click", () => handleNumberClick(4));
document.querySelector("#five").addEventListener("click", () => handleNumberClick(5));
document.querySelector("#six").addEventListener("click", () => handleNumberClick(6));
document.querySelector("#seven").addEventListener("click", () => handleNumberClick(7));
document.querySelector("#eight").addEventListener("click", () => handleNumberClick(8));
document.querySelector("#nine").addEventListener("click", () => handleNumberClick(9));
document.querySelector("#point").addEventListener("click", () => handleNumberClick("."));


const handleOperatorClick = (op) => {
   firstNum = display.value;
   operator = op;
   shouldClear = true;
};

const handleEqualsClick = () => {
    
    const secondNum = parseFloat(display.value);
    let result;
    if (operator === "+") {
        result = parseFloat(firstNum) + secondNum;
    } else if (operator === "-") {
        result = parseFloat(firstNum) - secondNum;
    } else if (operator === "x") {
        result = parseFloat(firstNum) * secondNum;
    } else if (operator === "/") {
        result = parseFloat(firstNum) / secondNum;
    } else if (operator === "+/-") {
        return display.value *= nePo;
    }

    display.value = result;
    shouldClear = true;
};

const handleSignClick = () => {
    const nePo= -1;
    display.value *= nePo;
}


document.querySelector('#addition').addEventListener('click', () => handleOperatorClick('+'));
document.querySelector('#subtraction').addEventListener('click', () => handleOperatorClick('-'));
document.querySelector('#multiplication').addEventListener('click', () => handleOperatorClick('x'));
document.querySelector('#division').addEventListener('click', () => handleOperatorClick('/'));
document.querySelector("#sign").addEventListener("click", () => handleSignClick("+/-"));
document.querySelector('#equal').addEventListener('click', handleEqualsClick);


const handleClearClick = () => {
    display.value = "";
    firstNum = "";
    operator = "";
    shouldClear = false
};
document.querySelector('#ac').addEventListener('click', handleClearClick);