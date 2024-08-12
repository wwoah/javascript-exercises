const repeatString = function(str, iterations) {

    if(iterations < 0) { return "ERROR";}

    let result = "";

    for(let i = 0; i < iterations; i++){
        let tempResult = result + str;
        result = tempResult;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
