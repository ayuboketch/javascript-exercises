const sumAll = function(firstNum, lastNum) {
    // Check for non-number parameters
    if (typeof firstNum !== 'number' || typeof lastNum !== 'number') {
        return 'ERROR';
    }
    
    // Check for negative numbers
    if (firstNum < 0 || lastNum < 0) {
        return 'ERROR';
    }
    
    // Determine the start and end of the range
    let start = firstNum < lastNum ? firstNum : lastNum;
    let end = firstNum < lastNum ? lastNum : firstNum;
    
    let sum = 0;
    // Iterate from start to end (inclusive) and sum the numbers
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
