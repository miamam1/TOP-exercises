const removeFromArray = function(Array, ...args ) {
    for(let o of args) {
        for(let i = 0; i < Array.length ; i++) {
            if(Array[i] === o) {
                removed = Array.splice(i, 1)
            }
        }
    }
    return Array
};

// Do not edit below this line
module.exports = removeFromArray;
