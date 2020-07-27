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

function calculateRes(calculationType){
    const enteredNum = userNumInput();
    const initialResult = currentResult;
    let mathOperator;

    if (calculationType === 'ADD'){
        currentResult += enteredNum;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNum;
        mathOperator = "-";
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNum;
        mathOperator = "*";
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNum;
        mathOperator = "/";
    } 

    createAndWriteOutput(mathOperator, initialResult, enteredNum);
    writeToLog(calculationType, initialResult, enteredNum, currentResult);
}

function addNum(){
    calculateRes('ADD');
}

function subtractNum(){
    calculateRes('SUBTRACT');
}

function multiplyNum(){
    calculateRes('MULTIPLY');
}

function divideNum(){
    calculateRes('DIVIDE');
}