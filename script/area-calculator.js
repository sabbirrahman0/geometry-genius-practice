function calculateTriangleArea(){
//    get triangle base value
const baseField = document.getElementById('triangle-base');
const baseValueText = baseField.value;
const base = parseFloat(baseValueText);
console.log(base);

// get triangle height value

const heightField = document.getElementById('triangle-height');
const heightValueText = heightField.value;
const height = parseFloat(heightValueText);
console.log(height);

const Area = 0.05 * base * height;

// show triangle area value

const areaSpan = document.getElementById('triangle-area');
areaSpan.innerText = Area;
}

function calculateRectangleArea(){
    // get rectangle width value

    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    
    // get rectangle length value

    const lengthField = document.getElementById('rectangle-length');
    const lengthValueField = lengthField.value;
    const length = parseFloat(lengthValueField);
    
    // calculate area

    const area = width * length ;
    console.log(area);

    // show rectangle area

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area ;

}

// reusable function --> how to reduce duplicate code

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    const area = base * height ;
    setElementInnerText('parallelogram-area', area);
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = 3.1416 * majorRadius * minorRadius;
    setElementInnerText('ellipse-area', area);
}

// reusable get input value field in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// reusable set , span , p , div etc 

function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

// add to calculation entry
/**
 * get the element where you want to add the dynamic HTML
 * Create an element you want to add
 * if needed add some class
 * set inner HTML . it could be dynamic template string
 * append the created element as a child of the parent
 * 
 */

function addToCalculationEntry(){
    const calculationEntry = document.getElementById('calculation-entry')
    const p = document.createElement('p');
    p.innerHTML = areaType + '' + area ;


    calculationEntry.appendChild(p);
}


// data validation system

// 1.set the proper type of input field...(number, data, email)
// 2.check type using typeof
// 3.isNaN : means not a number ...is NaN is checking whether the input is not a number
// 