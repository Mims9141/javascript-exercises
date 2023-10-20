const sumAll = function(num1, num2) {
    const diffNum = Math.abs(num1 - num2);
    if(num1 < 0 || num2 < 0){
        return 'ERROR'
    };
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'ERROR'
    };
    if(num1 < num2){
        let cTotal = 0;
        for (i = 0; i <= diffNum; i++){
            cTotal = cTotal + (num1 + i);
        };
        return cTotal;
     } else{
            let cTotal = 0;  
            for (i = 0; i <= diffNum; i++){
            cTotal = cTotal + (num2 + i);
            };
            return cTotal;   
        };
};

sumAll(1, 4)

// Do not edit below this line
module.exports = sumAll;
