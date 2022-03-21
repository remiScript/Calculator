// Create array of number buttons
const numberButtons = Array.from(document.querySelectorAll('[data-number]'));

// Create array of operand buttons
const operationButtons = Array.from(document.querySelectorAll('[data-operation]'));

// Establish variables for equals/del/clear buttons
const equalsButtons = document.querySelector('[data-equals]');
const deleteButtons = document.querySelector('[data-delete]');
const allClearButtons = document.querySelector('[data-all-clear]');

// Establish variables for the screen, current and previous
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

// store value of equation throughout
let total = 0;
let operand1 = 0;
let operand2 = 0;



// NUMBER BUTTONS -------------------------------------------------------------
// Create event listener for each number button
numberButtons.map(button => {
    // Listen for click event, supply event as argument
    button.addEventListener('click', (e) => {
        console.log(e.target.innerText);
        // If the screen is a /*+- then change it to whatever we just pressed
        if(currentOperandTextElement.innerText == '/' || 
            currentOperandTextElement.innerText == '*' ||
            currentOperandTextElement.innerText == '+' ||
            currentOperandTextElement.innerText == '-') {
                currentOperandTextElement.innerText = e.target.innerText;
        } 
        // otherwise, append that number onto the end of what's onscreen
        else {
            if (currentOperandTextElement.innerText === '0') {
                currentOperandTextElement.innerText = e.target.innerText;
            } else {
                currentOperandTextElement.innerText += e.target.innerText;
            }
            
        }
        
    })    
});
// ------------------------------------------------------------------------------





// OPERAND BUTTONS ------------------------------------------------------------
// add event listeners for each operand button
operationButtons.map(button => {
    button.addEventListener('click', (e) => {
        operand1 = operand2;
        operand2 = currentOperandTextElement.innerText;
        
        // change the onscreen text to be whatever operand is pressed
        currentOperandTextElement.innerText = total;

        if (e.target.innerText == '+') {
            total = total + parseInt(operand2);
            console.log('operand 1: ' + operand1);
            console.log('operand 2: ' + operand2);
            console.log('The total was added and is now: ' + total)
        }
    })
}); 
// ----------------------------------------------------------------------------




// EQUAL BUTTON --------------------------------------------------------------
const equateEquation = equalsButtons.addEventListener('click', function() {
    // currentOperandTextElement.innerText = '';
})
// ---------------------------------------------------------------------------



// DELETE BUTTON -------------------------------------------------------------
const deleteNum = deleteButtons.addEventListener('click', function() {
    let editedText = currentOperandTextElement.innerText.slice(0, -1);
    currentOperandTextElement.innerText = editedText;
})
// ---------------------------------------------------------------------------



// CLEAR BUTTON -------------------------------------------------------------
const clearScreen = allClearButtons.addEventListener('click', function(){
    total = 0;
    currentOperandTextElement.innerText = '0';
})
// ---------------------------------------------------------------------------