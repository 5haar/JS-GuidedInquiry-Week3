
// Prompts user for numbers and operator to perform calculations. 
let num1 = window.prompt("This is my calculator. Enter first number:");
let operator = window.prompt("Enter an operator (  +  -  *  /  )");
let num2 = window.prompt("Enter second number:");


// Adds the numbers
function add(input1, input2) {
    const total = (Number(input1) + Number(input2));
    return total;
}

// Subtracts numbers
function subtract(input1, input2) {
    const total = (Number(input1) - Number(input2));
    return total;
}

// Multiplies numbers
function multiply(input1, input2) {
    const total = (Number(input1) * Number(input2));
    return total;
}

// Divides numbers
function divide(input1, input2) {
    const total = (Number(input1) / Number(input2));
    return total;
}

// Performs calculations based off of user input and displays the calculation in required format (num1 + num2 = total)
if (operator === "+") {
    console.log(`${num1} ${operator} ${num2} = ${add(num1, num2)}`);
    alert(`${num1} ${operator} ${num2} = ${add(num1, num2)}`);
} else if (operator === "-"){
    console.log(`${num1} ${operator} ${num2} = ${subtract(num1, num2)}`);
    alert(`${num1} ${operator} ${num2} = ${subtract(num1, num2)}`);
} else if (operator === "*"){
    console.log(`${num1} ${operator} ${num2} = ${multiply(num1, num2)}`);
    alert(`${num1} ${operator} ${num2} = ${multiply(num1, num2)}`);
} else if (operator === "/"){
    console.log(`${num1} ${operator} ${num2} = ${divide(num1, num2)}`);
    alert(`${num1} ${operator} ${num2} = ${divide(num1, num2)}`);
} else {
    console.log(`You entered invalid values.`);
    alert(`You entered invalid values.`);
}



