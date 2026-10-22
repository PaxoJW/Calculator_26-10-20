const calculator = (function() {
    const add = (a,b) => Number(a) + Number(b);
    const sub = (a,b) => Number(a) - Number(b);
    const mul = (a,b) => Number(a) * Number(b);
    const div = (a,b) => Number(a) / Number(b);
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
        console.log(operator);
        return calculator.div(firstNumber, secondNumber);
    }
}

let display = document.querySelector(".calculator-container > .display");

function displayOp(array) {
    display.innerHTML = `${array.join("")}`;
}

let numBtns = document.querySelectorAll(".btns-container > .numpad > button");
console.log(numBtns);
numBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        console.log("We're getting clicked");
        if (operator === '' && result === '') {
            firstNumber += e.target.innerText;
        } else if (operator === '' && result !== ''){
            firstNumber = e.target.innerText;
            result = '';
        } else {
            secondNumber += e.target.innerText;
        }
        console.log("numbers clicked so far", firstNumber, secondNumber);
        displayOp([firstNumber, operator, secondNumber]);
    });
    
});

let opBtns = document.querySelectorAll(".btns-container > .operations > .operators > button");
console.log(opBtns);
opBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        console.log("Operators are beign selected");
        if (secondNumber !== '') {
            result = operate(operator, firstNumber, secondNumber);
            console.log("Calculating this first...");
            firstNumber = result;
            secondNumber = '';
            operator = e.target.innerText;
            console.log(result, operator);
        } else {
            operator = e.target.innerText;
        }        
        console.log(operator);
        displayOp([firstNumber, operator, secondNumber]);
    });
});

let equalBtn = document.querySelector(".equalBtn");
let cancBtn = document.querySelector(".cancBtn");

equalBtn.addEventListener("click", () => {
    if (secondNumber !== '') {
        console.log("before operation:", typeof(firstNumber), operator, typeof(secondNumber));
        result = operate(operator, firstNumber, secondNumber);
        console.log("Calculating...");
        console.log(result);
        console.log("after operation:", typeof(firstNumber), operator, typeof(secondNumber));
        firstNumber = result;
        secondNumber = '';
        operator = '';
        displayOp([firstNumber, operator, secondNumber]);
    } else {
        console.log("You are missing something:", firstNumber, operator,secondNumber);
        displayOp([firstNumber, operator, secondNumber]);
    }
    
})
    
cancBtn.addEventListener("click", () => {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    console.log(firstNumber, secondNumber, operator);
    displayOp([firstNumber, operator, secondNumber]);
})



