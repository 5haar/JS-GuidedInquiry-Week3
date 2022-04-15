let num1 = window.prompt("Enter a number:");
let operator = window.prompt("Enter an operator (  +  -  *  /  ):");
let num2 = window.prompt("Enter a second number:");

if (operator == "+") {

    console.log(`${num1} + ${num2} = ${Number(num1)+Number(num2)}`)

} else if (operator =="-") {

    console.log(`${num1} - ${num2} = ${Number(num1)-Number(num2)}`)

} else if (operator =="*") {

    console.log(`${num1} * ${num2} = ${Number(num1)*Number(num2)}`)

} else if (operator =="/") {

    console.log(`${num1} / ${num2} = ${Number(num1)/Number(num2)}`)
    
}
