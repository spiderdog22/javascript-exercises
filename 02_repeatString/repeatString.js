const repeatString = function(str, repeats) {
    if (repeats < 0)
        return 'ERROR'

    let result = '';

    for (let i = 0; i < repeats; i++)
        result += str;

    return result;
};

// Do not edit below this line
module.exports = repeatString;
