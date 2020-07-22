const defaultResult = 0;
let currentResult = defaultResult;

addBtn.addEventListener('click', addNum);

function userNumInput(){
    return parseInt(userInput.value);
}

function addNum(){
    const enteredNum = userNumInput();
    const desc = `${currentResult} + ${enteredNum}`
    currentResult = currentResult + enteredNum;
    outputResult(currentResult, desc);
}