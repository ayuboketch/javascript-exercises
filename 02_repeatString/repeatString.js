const repeatString = function(string, num) {
    let result = "";
    if (num < 0) {
        return "ERROR";
    }
    for (let i = 0; i < num; i++) {
        if (i < num) {
            result += string;
            };
        };
    return result;
    };

// Do not edit below this line
module.exports = repeatString;
