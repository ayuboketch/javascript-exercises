const palindromes = function (string) {
    const cleanedString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reverseString = cleanedString.split('').reverse().join('');
    return cleanedString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
