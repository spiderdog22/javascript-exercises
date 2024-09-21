const getTheTitles = function(arr) {
    return arr.reduce( (acc, el) => {
        acc.push(el.title);
        return acc;
    }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
