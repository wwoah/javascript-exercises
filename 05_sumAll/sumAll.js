const sumAll = function(left, right) {
    
    if(left < 0 || right < 0 ) { return "ERROR"; }
    if(typeof(left) != "number" || typeof(right) != "number") { return "ERROR"; }
    if(!Number.isInteger(left) || !Number.isInteger(right)) { return "ERROR"; }

    let upperbound = Math.max(left,right);
    let sum = 0;

    for(let i = 0; i <= upperbound; i++){ sum += i; }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
