const leapYears = function(year) {

    let div4 = year % 4;
    let div100 = year % 100;
    let div400 = year % 400;

    console.log(div4);
    console.log(div100);
    console.log(div400);


    if(div100 == 0) {
        if(div400 == 0) { return true; }
        return false;
    }
    else if(year % 4 == 0) { return true; }
    return false;

};

// Do not edit below this line
module.exports = leapYears;
