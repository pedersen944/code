function isDateValid(dato){}

// Teksten må ha lengde 10.

function isDateLengthValid(dato) {
    return date.length === 10;
}

// Det må være punktum i tredje og sjette posisjon

function isDotsValid(dato){
   return dato[2]=='.' && dato[5]=='.'; 
}

// År er 0000 eller større. Kan sjekkes med year.length === 4 && year >= '0000' && year <= '9999'

function isYearValid(dato){
    var year = dato.substring(6);
    year.length === 4 && year >= '0000' && year <= '9999';
}

//Måned er fra og med 01 til og med 12. Kan sjekkes som over.

function isMonthValid(dato){
    var month = dato.substring (3, 5);
    return month >='01' && month <='12';
}

