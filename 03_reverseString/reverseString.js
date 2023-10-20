const reverseString = function(string) {
    let reverseString = '';
    const sLength = string.length;
    let i = 1;
    while(i <= sLength){
        reverseString = reverseString + string.charAt(sLength-i);
        i++;
    }
    return reverseString;

};


reverseString('hey')
// Do not edit below this line
module.exports = reverseString;
