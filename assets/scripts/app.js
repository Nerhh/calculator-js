const defaultResult = 0;
let currentResult = defaultResult;

addBtn.addEventListener('click', addNum);
subtractBtn.addEventListener('click', subtractNum);
multiplyBtn.addEventListener('click', multiplyNum);
divideBtn.addEventListener('click', divideNum);

// Extract input from field
function userNumInput(){
    return parseInt(userInput.value);
}

// Writes calculation log
function createAndWriteOutput(opp, resultBefore, calcNumber){
    const desc = `${resultBefore} ${opp} ${calcNumber}`
    outputResult(currentResult, desc);
}

function addNum(){
    const enteredNum = userNumInput();
    const initialResult = currentResult;
    currentResult += enteredNum;
    createAndWriteOutput('+', initialResult, enteredNum);
}

function subtractNum(){
    const enteredNum = userNumInput();
    const initialResult = currentResult;
    currentResult -= enteredNum;
    createAndWriteOutput('-', initialResult, enteredNum);
}

function multiplyNum(){
    const enteredNum = userNumInput();
    const initialResult = currentResult;
    currentResult *= enteredNum;
    createAndWriteOutput('*', initialResult, enteredNum);
}

function divideNum(){
    const enteredNum = userNumInput();
    const initialResult = currentResult;
    currentResult /= enteredNum;
    createAndWriteOutput('/', initialResult, enteredNum);
}