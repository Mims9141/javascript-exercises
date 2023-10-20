const removeFromArray = function(arrayArg, ...args) {
    const aLength = args.length;
    for (let i = 0; i < aLength; i++){
        const arrayL = arrayArg.length;
        arrayLoop:
        for (let j = 0; j < arrayL; j++){
        if(args[i] === arrayArg[j] ){
            arrayArg.splice(j, 1);
            break arrayLoop; 
            };
        };
    };
    return arrayArg;
};
removeFromArray([1, 2, 3, 4], 3); // remove 3 and return [1,2,4]

// Do not edit below this line
module.exports = removeFromArray;

[1, 2, 3, 4], [3, 2]