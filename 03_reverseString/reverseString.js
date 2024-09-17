const reverseString = function(str) {
    let splitedStr = str.split('');
    splitedStr.reverse();

    return splitedStr.join('');
};

// Do not edit below this line
module.exports = reverseString;