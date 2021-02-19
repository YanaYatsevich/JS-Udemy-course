const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  currentResult = currentResult + parseInt(userInput.value); //parseInt - convert String to Num
  outputResult(currentResult, '');
}

addBtn.addEventListener('click', add);
