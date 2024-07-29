const DisplayData =document.getElementById("Display_Field")
function clickToEnter(input){
Display_Field.value += input;
}
function calculateResult(){
    const Result = eval(DisplayData.value);
    DisplayData.value=Result;
}
function clearDisplay(){
    DisplayData.value = "";

}