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
    return a/b;
}

let a = null;
let b = null;
let op = "";
let displayValue = "";

function updateDisplay(display, digit) {
    if (display == "ERR") {
        return "ERR"
    }
    else if (display.length >= 18) {
        return "ERR"
    }
    else if (display == "0") {
        return digit
    }
    else {
        return display += digit
    }
}

function operate(a, b, op) {
    switch (op) {
        case "+":
            return add(a,b)
        case "-":
            return subtract(a,b)
        case "*":
            return multiply(a,b)
        case "/":
            return divide(a,b)
        default:
            return "ERROR"
    }
}

const buttons = document.querySelectorAll(".button");
const display = document.querySelector("#display");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (button.id == "AC") {
            displayValue = 0;
            a = null;
            b = null;
            op = "";
            display.textContent = displayValue
        }

        else if (button.id == "sign") {
            displayValue = multiply(Number(displayValue), -1)
            display.textContent = displayValue
        }

        else if (button.id == "percent") {
            displayValue = divide(Number(displayValue), 100)
            display.textContent = displayValue
        }

        else if (button.id == "add") {
            op = "+";
            a = displayValue;
            displayValue = "0"
        }

        else if (button.id == "subtract") {
            op = "-";
            a = displayValue;
            displayValue = "0"
        }

        else if (button.id == "multiply") {
            op = "*";
            a = displayValue;
            displayValue = "0"
        }

        else if (button.id == "divide") {
            op = "/";
            a = displayValue;
            displayValue = "0"
        }

        else if (button.id == "=") {
            if (a) {
                b = displayValue
            }
            if (a && b && op!= "") {
                displayValue = operate(Number(a), Number(b), op)
                displayValue = updateDisplay(displayValue, "")
                display.textContent = displayValue
            }
        }

        else {
            displayValue = updateDisplay(displayValue, button.id)
            display.textContent = displayValue
        }
    });
    button.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "lightcoral"; 
    });

    button.addEventListener("mouseleave", (e) => {
        e.target.style.backgroundColor = "azure"; 
    });
});