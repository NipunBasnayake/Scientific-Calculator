var display = document.querySelector('#display');
var buttons = document.querySelectorAll('.calc-button');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        let buttonText = e.target.innerText;
        if (buttonText === '×') {
            buttonText = '*';
        } else if (buttonText === '÷') {
            buttonText = '/';
        }
        display.value += buttonText;
    });
});

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
    display.value = Math.sin(display.value);
}

function calculateCos() {
    display.value = Math.cos(display.value);
}

function calculateTan() {
    display.value = Math.tan(display.value);
}

function calculateLog() {
    display.value = Math.log(display.value);
}

function calculateSqrt() {
    display.value = Math.sqrt(display.value);
}

function calculateFactorial() {
    let num = parseInt(display.value);
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    display.value = result;
}

function insertPi() {
    display.value += Math.PI;
}

function insertE() {
    display.value += Math.E;
}

function calculatePower() {
    let base = display.value;
    let exponent = 2;
    display.value = Math.pow(base, exponent);
}
