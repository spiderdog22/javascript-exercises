const leapYears = function(year) {
    let divisibleByFour = year % 4 == 0;
    let isCentury = year % 100 == 0;
    let divisiblebyFourHundred = year % 400 == 0;

    return (divisibleByFour && !isCentury) || divisiblebyFourHundred;
};

// Do not edit below this line
module.exports = leapYears;
