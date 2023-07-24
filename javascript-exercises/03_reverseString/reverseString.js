const reverseString = function(string) {
    string = string.split('').reverse()
    let newString = ''
    for(let i = 0; i < string.length ; i++) {
        newString += string[i]
    }
    return newString


};

// Do not edit below this line
module.exports = reverseString;
