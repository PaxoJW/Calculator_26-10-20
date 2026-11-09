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

let display = document.querySelector(".calculator-container > .display");

let numBtns = document.querySelectorAll(".btns-container > .numpad > button");

let opBtns = document.querySelectorAll(".btns-container > .operations > .operators > button");

let equalBtn = document.querySelector(".equalBtn");
let cancBtn = document.querySelector(".cancBtn");
let decimalBtn = document.querySelector(".decimalBtn");
let delBtn = document.querySelector(".delBtn");

//Check if it is a float
function isFloat(n) {
    return Number(n) === n && n % 1 !==0;
}


function operate (operator, firstNumber, secondNumber) {  
    result = '';
    if (operator === '+') {
        result = calculator.add(firstNumber, secondNumber);
    } else if (operator === '-') {
        result = calculator.sub(firstNumber, secondNumber);
    } else if (operator === '*') {
        result = calculator.mul(firstNumber, secondNumber);
    } else {
        result = calculator.div(firstNumber, secondNumber);
    }
    //If float limit the decimal places to 2
    if (isFloat(result)) {
        return result.toFixed(2);
    } else {
        return result;
    }
    
}

//function to display on the calculator screen
function displayOp(array) {
    display.innerHTML = `${array.join("")}`;
}

//function to control number buttons
numBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (operator === '' && result === '') {
            firstNumber += e.target.innerText;
        } else if (operator === '' && result !== ''){
            firstNumber = e.target.innerText;
            decimalBtn.disabled = false;
            result = '';
        } else {
            secondNumber += e.target.innerText;
        }
        console.log("numbers clicked so far:", firstNumber, secondNumber);
        displayOp([firstNumber, operator, secondNumber]);
    });
    
});

//function to control operators logic
opBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        console.log("Operators are beign selected");
        if (secondNumber !== '') {
            if (operator === '/' && Number(secondNumber) === 0) {
                alert("Can't divide by", secondNumber);
                secondNumber = '';
            } else {
                console.log("Calculating this first...");
                result = operate(operator, firstNumber, secondNumber);
                firstNumber = result;
                secondNumber = '';
                operator = e.target.innerText;
                decimalBtn.disabled = false;
                console.log(result, operator);
            }
        } else {
            operator = e.target.innerText;
            decimalBtn.disabled = false;
        }        
        console.log(operator);
        displayOp([firstNumber, operator, secondNumber]);
    });
});


equalBtn.addEventListener("click", () => {
    if (secondNumber !== '') {
        if (operator === '/' && Number(secondNumber) === 0) {
            alert("Can't divide by", secondNumber);
            secondNumber = '';
        } else {
            result = operate(operator, firstNumber, secondNumber);
            console.log("Calculating...");
            console.log(result);
            firstNumber = result;
            operator = '';
            secondNumber = '';
            decimalBtn.disabled = false;
        }
    } else {
        console.log("You are missing something:", firstNumber, operator,secondNumber);
        
    }
    displayOp([firstNumber, operator, secondNumber]);
})
    
cancBtn.addEventListener("click", () => {
    firstNumber = '';
    operator = '';
    secondNumber = '';
    console.log(firstNumber, secondNumber, operator);
    // activate decimal button
    decimalBtn.disabled = false;
    displayOp([firstNumber, operator, secondNumber]);
})

delBtn.addEventListener("click", (e) => {
    if (secondNumber !== "") {
        secondNumber = secondNumber.slice(0,-1);
    } else if (operator !== "") {
        operator = '';
    } else if (result !== "") {
        firstNumber = ''
        result = ''
    } else {
        console.log(typeof(firstNumber), typeof(result));
        firstNumber = String(firstNumber).slice(0, -1);
        console.log(firstNumber);
    }
    displayOp([firstNumber, operator, secondNumber]);
})

decimalBtn.addEventListener("click", (e) => {
    if (operator === '' && result !== ''){
        console.log("click 1");
        console.log(e.target.innerText);
        console.log(typeof(firstNumber), typeof(e.target.innerText));
        firstNumber = "0" + e.target.innerText;
        result = '';
    } else if (operator === '' && result === '') {
        console.log("click 2");
        firstNumber += e.target.innerText;
    } else if (operator !== '' && secondNumber === '') {
        console.log("click 3");
        secondNumber = "0" + e.target.innerText;
    } else {
        console.log("click 4");
        secondNumber += e.target.innerText;
    }
    //deactivate the button
    decimalBtn.disabled = true;
    
    displayOp([firstNumber, operator, secondNumber]);
})