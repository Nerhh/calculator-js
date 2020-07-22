const defaultResult = 0;
let currentResult = defaultResult;

addBtn.addEventListener('click', addNum);
subtractBtn.addEventListener('click', subtractNum);
multiplyBtn.addEventListener('click', multiplyNum);
divideBtn.addEventListener('click', divideNum);

function userNumInput(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(opp, resultBefore, calcNumber){
    const desc = `${resultBefore} ${opp} ${calcNumber}`
    outputResult(currentResult, desc);
}

function addNum(){
    const enteredNum = userNumInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNum;
    createAndWriteOutput('+', initialResult, enteredNum);
}

function subtractNum(){
    const enteredNum = userNumInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNum;
    createAndWriteOutput('-', initialResult, enteredNum);
}

function multiplyNum(){
    const enteredNum = userNumInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNum;
    createAndWriteOutput('*', initialResult, enteredNum);
}

function divideNum(){
    const enteredNum = userNumInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNum;
    createAndWriteOutput('/', initialResult, enteredNum);
}