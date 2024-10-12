var display = document.querySelector('#display');
var buttons = document.querySelectorAll('.calc-button');

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    
    if (document.body.classList.contains('light-theme')) {
        this.textContent = 'Switch to Dark Theme';
    } else {
        this.textContent = 'Switch to Light Theme';
    }
});

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        let buttonText = e.target.innerText;
        processInput(buttonText);
    });
});

document.addEventListener('keydown', function(e) {
    let key = e.key;

    if (key === 'Enter' || key === '=') {
        e.preventDefault();
        evaluateExpression();
    } else if (key === 'Backspace') {
        e.preventDefault();
        backspace(); 
    } else if (key === 'Delete') {
        e.preventDefault();
        clearScreen(); 
    } else if (/[\d+\-*/().]/.test(key)) {
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
function evaluateExpression() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

document.getElementById('clear-entry').addEventListener('click', backspace);
function backspace() {
    display.value = display.value.slice(0, -1);
}

document.getElementById('clear-all').addEventListener('click', clearScreen);
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
    let value = parseInt(display.value);
    if (!isNaN(value) && value >= 0) {
        display.value = factorial(value);
    } else {
        display.value = "Error";
    }
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function calculatePower() {
    let value = display.value.split('^');
    if (value.length === 2) {
        let base = parseFloat(value[0]);
        let exponent = parseFloat(value[1]);
        if (!isNaN(base) && !isNaN(exponent)) {
            display.value = Math.pow(base, exponent);
        } else {
            display.value = "Error";
        }
    }
}

function insertPi() {
    display.value += Math.PI;
}

function insertE() {
    display.value += Math.E;
}
