const fibonacci = function(element) {
    if (element < 0)
        return 'OOPS';

    /*
    let series = [ 0, 1 ];

    while (series.length < element + 1) {
        let first = series[series.length - 2];
        let second = series[series.length - 1];

        series.push(second + first);
    }

    return series[element];
    */

    if (element === 0) return 0;

    let first = 0;
    let second = 1;

    for (let i = 0; i < element; i++) {
        let third = second + first;
        first = second;
        second = third;
    }

    return first;
};

// Do not edit below this line
module.exports = fibonacci;
