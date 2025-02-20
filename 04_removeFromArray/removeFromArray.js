const removeFromArray = function(arr, ...args) {
    const newArray = arr.filter(num => !args.includes(num));
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
