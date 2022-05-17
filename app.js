const num1El = document.getElementById('num1');
const operatorEl = document.getElementById('operator');
const num2El = document.getElementById('num2');
const answerEl = num1El.value + num2El.value;

const buttonEl = document.getElementById('button');
buttonEl.addEventListener('click', () => {
    var whatTheUserTyped = num1El.value;
    var whatElseTheUserTyped = num2El.value;
   answerEl.textContent = whatTheUserTyped += whatElseTheUserTyped;

   return answerEl;}) 
