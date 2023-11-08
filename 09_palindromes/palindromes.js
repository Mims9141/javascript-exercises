const palindromes = function (string) {
    // make string case agnostic and gets rid of commas and empty space
    const newString = string.toLowerCase().replace(/[\\/\s,!.]/g, "");
    // convert to array and reverse then back to string
    const array = newString.split("")
    const reverse = array.reverse().toString().replace(/[\\/\s,!.]/g, "");

    if(reverse === newString ){
        return true;
    }else {return false}
};

// Do not edit below this line
module.exports = palindromes;
