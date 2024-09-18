const removeFromArray = function(array, ...args) {
    let result = [];

    array.forEach((el) => {

        /*
        My solution
        let descarted = false;

        for (let arg of args)
            if (arg === el)
                descarted = true;
        
        if (!descarted)
            result.push(el);
        */

        if (!args.includes(el)) {
            result.push(el);
        }
    });

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;

console.log(removeFromArray([1, 2, 3, 4], 3, 2))