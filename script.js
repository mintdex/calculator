const numberBtns = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal-sign");
const clear = document.querySelector(".clear").addEventListener("click", reset);
const screen = document.querySelector("#screen");
let firstVal = 0, secondVal, operator;

function reset() {
    firstVal = 0, secondVal = null, operator = null;
    screen.textContent = 0;
}
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch (operator){
        case "add": 
            return a + b;
        case "substract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            if (b === 0) {
                alert("can not divide by 0");
                return;
            } else {
                return a / b; 
            }
        default:
            alert("You need to input operand first");
            return
    }
    
}


const display = (e) => {
    const inputVal = e.target.getAttribute("value");
    // Only accept 1 dot for decimal numbers
    if (screen.textContent.includes(".") && inputVal === ".") return;
    
    // replace beginning 0 value with new input or when user start to input second operand
    if (Number(screen.textContent) === 0 || operator) {
        screen.textContent = inputVal;
    } else {
        screen.textContent += inputVal;
    }
    secondVal = Number(screen.textContent);
}

const displayDecimal = (e) => {

}

numberBtns.forEach(numBtn => numBtn.addEventListener("click", display));

operators.forEach(op => op.addEventListener("click", (e) => {
    if (operator) {
        screen.textContent = operate(operator, firstVal, secondVal);
        firstVal = Number(screen.textContent);
    }

    if (!secondVal) {
        alert("Need to input operand frist")
        return;
    }
    firstVal = Number(screen.textContent);
    operator = e.target.getAttribute("value");

    
}));

equal.addEventListener("click", () => {
    screen.textContent = operate(operator, firstVal, secondVal);

});