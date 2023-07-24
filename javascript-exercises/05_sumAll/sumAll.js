const sumAll = function(int1, int2) {
    let total = []
    let sum = 0
    let temp = 0
    if(int1 > int2) {
        temp = int1
        int1 = int2
        int2 = temp;
    }
    if(int1 < 0 || int2 < 0) {
        return "ERROR"
    }
    if(typeof int1 !== "number" || typeof int2 !== "number"  ) {
        return "ERROR"
    } 
   
    for(int1; int1 < int2; int1++) {
        total.push(int1)
    }
    for(let i = 0; i < total.length; i++) {
        sum += total[i]

    }

    return sum + int2
    // didnt need to do this at all im stupid
    //basically just needed to do for i with + 1 to int2 
    //makes sure that the last number 

};

// Do not edit below this line
module.exports = sumAll;
