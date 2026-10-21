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
let result = 0;

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

let numBtns = document.querySelectorAll(".calculator-container > .numpad > button");
console.log(numBtns);
numBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        console.log("We're getting clicked");
        if (firstNumber === '') {
            firstNumber = e.target.innerHTML;
        } else {
            secondNumber = e.target.innerHTML;
        }
        console.log(firstNumber, secondNumber);
    });
});

let opBtns = document.querySelectorAll(".calculator-container > .operations > button");

opBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {  
        if (e.target.innerText === '=') {
            if (secondNumber !== '') {
                result = operate(operator, firstNumber, secondNumber);
                console.log("Give me what's mine");
                console.log(result);
                firstNumber = result;
                secondNumber = '';
                operator = '';
            }
        } else if (e.target.innerHTML === 'Canc') {
            console.log("You're beign deleted");
        } else {
            console.log("Operations are beign made");
            operator = e.target.innerHTML;
        }   
        console.log(operator);
    });
});
