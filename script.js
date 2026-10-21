const calculator = (function() {
    const add = (a,b) => a + b;
    const sub = (a,b) => a - b;
    const mul = (a,b) => a * b;
    const div = (a,b) => a / b;
    return {add, sub, mul, div};
})();


let firstNumber = "";
let secondNumber = "";
let operator = "";

function operate (operator, firstNumber, secondNumber) {
    
    if (operator === '+') {
        return calculator.add(firstNumber, secondNumber);
    } else if (operator === '-') {
        return calculator.sub(firstNumber, secondNumber);
    } else if (operator === '*') {
        return calculator.mul(firstNumber, secondNumber);
    } else {
        return calculator.div(firstNumber, secondNumber);
    }
    
}

