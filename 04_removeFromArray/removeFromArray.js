const removeFromArray = function(inputArr) {

    const args = Array.from(arguments);
    args.splice(0,1);

    const inputLen = inputArr.length;
    const argLen = args.length;

    for(let i = 0; i < inputLen; i++){
        for(let j = 0; j < argLen; j++) {
            if(inputArr[i] === args[j]){
                inputArr.splice(i,1);
                i = 0;
                j = 0;
            }
        }
    }

    return inputArr;
};

// Do not edit below this line
module.exports = removeFromArray;
