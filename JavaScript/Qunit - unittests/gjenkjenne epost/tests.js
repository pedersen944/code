function isEmail(txt) {
    if (txt.includes("@")  && !txt.includes(" ")) return true;
    
    
        let indexOfAt = txt.indexOf("@");
        let firstDotIndex = txt.indexOf(".");
        if (firstDotIndex== -1 || firstDotIndex > indexOfAt) return false;
        
        let SecondDotIndex = txt.indexOf(".", indexOfAt);
        return SecondDotIndex >= 0;
        
        
    
}
    

   

    
    
