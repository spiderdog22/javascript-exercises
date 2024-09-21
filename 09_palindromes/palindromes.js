const reverseString = (str) => {
    return str.split('').reverse().join('');
};

const palindromes = function (str) {
    let letters = str.replaceAll(/[^a-zA-B0-9]+/gi, '').toLowerCase();
    console.log(letters);
    let reversed = reverseString(letters);
    console.log(reversed);
    console.log(letters === reversed);
    return letters === reversed;
};

console.log(palindromes('r3ace3car'));

// Do not edit below this line
module.exports = palindromes;
