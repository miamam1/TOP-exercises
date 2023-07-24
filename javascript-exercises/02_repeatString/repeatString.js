const repeatString = function(string, num) {
    let repeatedString = ""
    if(num < 0 ) {
        return("ERROR")
    }
    for(let count = 0; count < num; count++ ) {
        repeatedString += string
    }
    return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
