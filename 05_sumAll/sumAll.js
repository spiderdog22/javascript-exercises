const sumAll = function(a, b) {
    if (( a < 0 || b < 0 ) ||
        // 'Math.floor(a) !== a': Checks if floor'ed 'a' is the same as 'a'.
        // It also serves for check the correct type. If 'a' is not a number,
        // then it will return 'ERROR'
        ( Math.floor(a) !== a || Math.floor(b) !== b)) {
        return 'ERROR';
    }

    let minor = b > a ? a : b;
    let major = b > a ? b : a;

    // Substracts one summation (N*(N+1)/2), that represents all the first N natural numbers
    // added all together; with another.
    return (major * (major + 1))/2 - (minor * (minor - 1))/2
};

// Do not edit below this line
module.exports = sumAll;