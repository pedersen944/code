function isEmail(txt) {
    if (txt.includes("@") ) {
        let indexOfAt = txt.indexOf("@");
        let firstDotIndex = txt.indexOf(".");
        let findSecondDotIndex = txt.substring(indexOfAt).indexOf(".");
        if(firstDotIndex < findSecondDotIndex){

            return true;
        }
        else return false;
    }
    else return false;
}
    

   

    
    
