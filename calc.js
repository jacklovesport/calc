//Maths 
function add (a,b) {
return a + b;
} 
function subtract(a,b) {
    return a - b;
}
function multiply(a,b){
return a * b;
}
function divide(a,b){
    if (b ===0){
        throw new Error("Division by zero is not possible.")
    }
    return a / b;
}

function calculate() {
    let display = document.getElementById('display');
    let currentValue = display.innerText;

    let regex = /(\d+)([\+\-\*\/])(\d+)/;
    let match = currentValue.match(regex);

    if (match) {
        let a = parseFloat(match[1]);
        let operator = match[2];
        let b = parseFloat(match[3]);
        
        try {
            switch (operator) {
                case '+':
                    display.innerText = add(a, b);
                    break;
                case '-':
                    display.innerText = subtract(a, b);
                    break;
                case '*':
                    display.innerText = multiply(a, b);
                    break;
                case '/':
                    display.innerText = divide(a, b);
                    break;
                default:
                    throw new Error("Unsupported operation.");
            }
        } catch (error) {
            display.innerText = "Error";
            console.error(error);
        }
    }
}



//

function clearDisplay() {
let display = document.getElementById('display').innerText = '';
}


function addToDisplay(value) {
  let display = document.getElementById('display').innerText += value;
}

function addOperator(operator) {
    let display = document.getElementById('display');
    let currentValue = display.innerText.trim();

    if (/[\+\-\*\/]$/.test(currentValue)) {
        display.innerText = currentValue.slice(0, -1) + operator;
    } else {
        display.innerText += operator;
    }
}
