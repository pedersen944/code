// controller 

function selectBar (barNumber){
   // console.log("jeg kjører AF!")
   
    if (selectedBar != barNumber) {
        selectedBar = barNumber;
        disabledButton = false;} else {
        disabledButton = true;
        selectedBar = 'Ingen'
    }
        
        show();
}




function addBar() {
    inputValue < 1 || inputValue > 10 ? barInputWarning = "verdi må være mellom 1 og 10" : numbers.push(parseInt(inputValue));
    show();
}


function editBar() {
    inputValue == 0 || inputValue > 10 ? barInputWarning = "Verdi må være mellom 1 og 10" : numbers[parseInt(selectedBar) - 1] = parseInt(inputValue);
    show();
}

function removeBar() {

    numbers.splice(parseInt(selectedBar) - 1, 1)
    show();
}