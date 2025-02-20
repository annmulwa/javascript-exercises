const sumAll = function(initialNum, finalNum) {
    let sum = 0;
    let i;
    if (!Number.isInteger(initialNum) || !Number.isInteger(finalNum)) {
        return ("ERROR");
    } else if (initialNum < 0 || finalNum < 0) {
        return ("ERROR");
    } else if (initialNum < finalNum) {
        for (i = initialNum; i <= finalNum; i++) {
            sum += i;
        }
        return sum;
    } else if (initialNum > finalNum) {
        for (i = finalNum; i <= initialNum; i++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
