const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

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

function writeToLog(operationID, prevResult, operationNum, newResult){
    const logEntry = {
        operation: operationID,
        prevResult: prevResult,
        num: operationNum,
        result: newResult 
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function addNum(){
    const enteredNum = userNumInput();
    const initialResult = currentResult;
    currentResult += enteredNum;
    createAndWriteOutput('+', initialResult, enteredNum);
    writeToLog('ADD', initialResult, enteredNum, currentResult);
}

function subtractNum(){
    const enteredNum = userNumInput();
    const initialResult = currentResult;
    currentResult -= enteredNum;
    createAndWriteOutput('-', initialResult, enteredNum);
    writeToLog('SUBTRACT', initialResult, enteredNum, currentResult);
}

function multiplyNum(){
    const enteredNum = userNumInput();
    const initialResult = currentResult;
    currentResult *= enteredNum;
    createAndWriteOutput('*', initialResult, enteredNum);
    writeToLog('MULTIPLY', initialResult, enteredNum, currentResult);
}

function divideNum(){
    const enteredNum = userNumInput();
    const initialResult = currentResult;
    currentResult /= enteredNum;
    createAndWriteOutput('/', initialResult, enteredNum);
    writeToLog('DIVIDE', initialResult, enteredNum, currentResult);
}