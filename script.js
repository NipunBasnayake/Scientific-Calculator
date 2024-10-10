var display = document.querySelector('#display');
var buttons = document.querySelectorAll('.calc-button');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        let buttonText = e.target.innerText;
        processInput(buttonText);
    });
});

document.addEventListener('keydown', function(e) {
    let key = e.key;

    if (key === 'Enter') {
        evaluateExpression();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Escape') {
        clearScreen();
    } else {
        processInput(key);
    }
});

function processInput(input) {
    if (input === '×' || input === '*') {
        input = '*';
    } else if (input === '÷' || input === '/') {
        input = '/';
    } else if (input === 'π') {
        input = Math.PI;
    } else if (input === 'e') {
        input = Math.E;
    }

    if (/[\d+\-*/().]/.test(input)) {
        display.value += input;
    }
}

document.getElementById('evaluate').addEventListener('click', evaluateExpression);
document.getElementById('clear-all').addEventListener('click', clearScreen);
document.getElementById('clear-entry').addEventListener('click', backspace);

function evaluateExpression() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function clearScreen() {
    display.value = '';
}

function calculateSin() {
    let value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = Math.sin(value);
    } else {
        display.value = "Error";
    }
}

function calculateCos() {
    let value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = Math.cos(value);
    } else {
        display.value = "Error";
    }
}

function calculateTan() {
    let value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = Math.tan(value);
    } else {
        display.value = "Error";
    }
}

function calculateLog() {
    let value = parseFloat(display.value);
    if (!isNaN(value) && value > 0) {
        display.value = Math.log(value);
    } else {
        display.value = "Error";
    }
}

function calculateSqrt() {
    let value = parseFloat(display.value);
    if (!isNaN(value) && value >= 0) {
        display.value = Math.sqrt(value);
    } else {
        display.value = "Error";
    }
}

function calculateFactorial() {
    let num = parseInt(display.value);
    if (num >= 0 && Number.isInteger(num)) {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        display.value = result;
    } else {
        display.value = "Error";
    }
}

function insertPi() {
    if (display.value) {
        display.value += Math.PI;
    } else {
        display.value = Math.PI;
    }
}

function insertE() {
    if (display.value) {
        display.value += Math.E;
    } else {
        display.value = Math.E;
    }
}

function calculatePower() {
    let base = parseFloat(display.value);
    let exponent = 2; 
    if (!isNaN(base)) {
        display.value = Math.pow(base, exponent);
    } else {
        display.value = "Error";
    }
}
