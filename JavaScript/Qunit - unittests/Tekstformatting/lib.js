  
function fixText(txt){ 
    txt = txt.trim();
    let lowerRest =  txt.slice(1).toLowerCase();
   return txt.charAt(0).toUpperCase() + lowerRest;
}
