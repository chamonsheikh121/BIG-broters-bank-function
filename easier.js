function inputFloatValue(inputId){
    const inputElement = document.getElementById(inputId);
    const inputString = inputElement.value;
    const inputFloat = parseFloat(inputString);
    inputElement.value = '';
    return inputFloat;
    
}


function currentElementFloatValue(elementId){
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementFloat = parseFloat(elementString);
    return elementFloat;
}


function attachWithCurrentElement(elementId, newValue){
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}