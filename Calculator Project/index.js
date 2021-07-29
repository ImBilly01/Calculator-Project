let firstNumber = document.querySelector('.firstN');
let secondNumber = document.querySelector('.secondN');
let result = document.querySelector('.result');
const addition = document.querySelector('.addition');
const subtraction = document.querySelector('.subtraction');
const multiplication = document.querySelector('.multiplication');
const division = document.querySelector('.division');

// Add Numbers
addition.addEventListener('click', () => {
    result.innerHTML = parseInt(firstNumber.value) + parseInt(secondNumber.value);
});

// Subtract Numbers
subtraction.addEventListener('click', () => {
    result.innerHTML = parseInt(firstNumber.value) - parseInt(secondNumber.value);
});

// Multiply Numbers
multiplication.addEventListener('click', () => {
    result.innerHTML = parseInt(firstNumber.value) * parseInt(secondNumber.value);
});

// Divide Numbers
division.addEventListener('click', () => {
    result.innerHTML = parseFloat(firstNumber.value) / parseFloat(secondNumber.value);
});