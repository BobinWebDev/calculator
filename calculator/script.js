document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('box'));
    const clearButton = document.getElementById('btn-clear');
    const equalButton = document.getElementById('btn-equal');
  
    let firstNumber = '';
    let operator = '';
    let secondNumber = '';
    let inputStage = 1; // 1: entering first number, 2: entering second number
  
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        const value = e.target.innerText;
  
        if (!isNaN(value) || value === '0') {
          // If a number is clicked
          if (inputStage === 1) {
            firstNumber += value;
            display.value = firstNumber;
          } else if (inputStage === 2) {
            secondNumber += value;
            display.value = secondNumber;
          }
        } else if (['+', '-', '*', '/'].includes(value)) {
          // If an operator is clicked
          if (firstNumber !== '') {
            operator = value;
            inputStage = 2;
            display.value = ''; // Clear display for second number
          }
        }
      });
    });
  
    equalButton.addEventListener('click', () => {
      if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
        const result = eval(`${firstNumber} ${operator} ${secondNumber}`);
        display.value = result;
        firstNumber = result.toString();
        operator = '';
        secondNumber = '';
        inputStage = 1; // Reset stage to entering first number
      }
    });
  
    clearButton.addEventListener('click', () => {
      firstNumber = '';
      operator = '';
      secondNumber = '';
      inputStage = 1;
      display.value = '0';
    });
  });
  