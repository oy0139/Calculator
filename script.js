const add = (num1,num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => {
    if (num2 == 0) {
        return "Error: you cant do that"
    }
    else {
        return num1 / num2
    }
}

let number1 = ""
let operator = null
let number2 = ""
let displayValue = 0

const displayElement = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const decimal = document.querySelector(".decimal");


numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
    number1 += button.value;
    displayElement.textContent = number1;
    })
});

function operate(num1, num2) {
    if (operator == "+") {
       return add(num1, num2);
    }
    else if (operator == "-") {
        return subtract(num1, num2)
    }
    else if (operator == "*") {
        return multiply(num1, num2) 
    }
    else if (operator == "/") {
        return divide(num1, num2)
    }
}
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (number1 !== "") {
            number2 = number1;
        }
        operator = button.value;
        number1 = "";
        displayElement.textContent = ""
    })
})

equalsButton.addEventListener("click", () => {
    parsedNumber1 = parseInt(number1);
    parsedNumber2 = parseInt(number2);
    let calculatedResult = operate(parsedNumber2, parsedNumber1);
    displayElement.textContent = calculatedResult;
    displayValue = calculatedResult;
    number1 = displayValue;
})

clearButton.addEventListener("click", () => {
    number1 = ""
    operator = null
    number2 = ""
    displayValue = 0
})

decimal.addEventListener("click", () => {
    if (operator === null) {
        if (!number1.includes(".")) {
            number1 += ".";
            displayElement.textContent = number1;
        }
    }
    if (operator !== null) {
        if (!number1.includes(".")) {
            number1 += ".";
            displayElement.textContent = number1;
        }
    }
})

