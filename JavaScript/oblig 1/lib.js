function isDateValid(dato){
    return isDateLengthValid(dato)
        && isDotsValid(dato)
        && isYearValid(dato)
        && isMonthValid(dato)
        && isYearMonthsDay(dato)

}
// Teksten må ha lengde 10.

function isDateLengthValid(dato) {
    return dato.length == 10 
    
}

// Det må være punktum i tredje og sjette posisjon

function isDotsValid(dato){
   return dato[2]=='.' && dato[5]=='.'; 
}

// År er 0000 eller større. Kan sjekkes med year.length === 4 && year >= '0000' && year <= '9999'

function isYearValid(dato){
    var year = dato.substring(6);
    return year.length === 4 && year >= '0000' && year <= '9999';
}

//Måned er fra og med 01 til og med 12. Kan sjekkes som over.

function isMonthValid(dato){
    var month = dato.substring (3, 5);
    return month >='01' && month <='12';
}
// Gyldig dag er 1 - 28, men;
// 29 er lov for februar dersom det skulle være skuddår
// 30 er lov for alle måneder utenom februar
// 31 er lovlig for januar, mars, mai, juli, august, oktober og desember

function isYearMonthsDay (dato){
    var day = dato.substring (0, 2);
    var month = dato.substring (3, 5);
    var year = dato.substring (6);
    var isFebruary = month =='02';
    
    var isMonthThirty = month == '04' || month ==  '06' || month ==  '09' || month ==  '11';
    var isLeapYear = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    // console.log(isLeapYear)
    return day >= '01' && day <= '28'
      || day == '29' && (!isFebruary ||isLeapYear  )
      || day == '30' && (!isFebruary)
      || day == '31' && !isFebruary && !isMonthThirty;
}