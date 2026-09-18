let currentNumber = "0";
let previousNumber = "";
let operation = null;

const currentDisplay = document.getElementById("current");
const previousDisplay = document.getElementById("previous");

function updateDisplay() {
    currentDisplay.textContent = currentNumber;
    previousDisplay.textContent = previousNumber;
}

function appendNumber(number) {
    if (number === "." && currentNumber.includes(".")) return;

    if (currentNumber === "0" && number !== ".") {
        currentNumber = number;
    } else {
        currentNumber += number;
    }

    updateDisplay();
}

function chooseOperator(operator) {
    if (currentNumber === "") return;

    if (previousNumber !== "") {
        calculate();
    }

    operation = operator;
    previousNumber = currentNumber + " " + getOperatorSymbol(operator);
    currentNumber = "0";

    updateDisplay();
}

function getOperatorSymbol(operator) {
    if (operator === "*") return "×";
    if (operator === "/") return "÷";
    if (operator === "-") return "−";
    if (operator === "+") return "+";
    return operator;
}

function calculate() {
    if (operation === null || previousNumber === "") return;

    const firstNumber = parseFloat(previousNumber);
    const secondNumber = parseFloat(currentNumber);

    let result;

    switch (operation) {
        case "+":
            result = firstNumber + secondNumber;
            break;

        case "-":
            result = firstNumber - secondNumber;
            break;

        case "*":
            result = firstNumber * secondNumber;
            break;

        case "/":
            if (secondNumber === 0) {
                currentNumber = "Error";
                previousNumber = "";
                operation = null;
                updateDisplay();
                return;
            }
            result = firstNumber / secondNumber;
            break;
    }

    currentNumber = String(result);
    previousNumber = "";
    operation = null;

    updateDisplay();
}

function clearDisplay() {
    currentNumber = "0";
    previousNumber = "";
    operation = null;

    updateDisplay();
}

function deleteNumber() {
    if (currentNumber.length === 1) {
        currentNumber = "0";
    } else {
        currentNumber = currentNumber.slice(0, -1);
    }

    updateDisplay();
}

function percentage() {
    currentNumber = String(parseFloat(currentNumber) / 100);
    updateDisplay();
}

updateDisplay();
