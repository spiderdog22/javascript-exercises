const findTheOldest = function(arr) {
    let oldest = arr.reduce( (acc, el) => {
        let ageAcc = (acc.yearOfDeath ? acc.yearOfDeath : new Date().getFullYear()) - acc.yearOfBirth;
        let ageEl = (el.yearOfDeath ? el.yearOfDeath : new Date().getFullYear()) - el.yearOfBirth;
        return ageAcc < ageEl ? el : acc;
    });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
