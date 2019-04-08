/* function isBoolean(input) {
   var output = false;
   if (typeof input === "boolean") {
        output = true;
   } else {
        output = false;
   }
   return output;
}*/
function isBoolean(input) {
    return typeof input === "boolean";
}


/* function isNumeric(input) {
   return !isNaN(parseInt(input)) || input === Infinity;
}*/
function isNumeric(input) {
    return !isNaN(parseFloat(input));
}


/* function isNegative(input) {
    return input < 0;
}*/
function isNegative(input) {
    return input < 0;
}


/* function isPositive(input) {
    if (isNumeric(input)) {
        return input > 0;
    } else {
        return false;
    }
}*/
function isPositive(input) {
    return input > 0;
}



/* function isString(input) {
   return typeof input === "string";
}*/
function isString(input) {
    return typeof input === "string";
}



/* function isArray(input) {
    return Array.isArray(input);
*/
function isArray(input) {
    return Array.isArray(input);
}


/* function increment(input) {
    return (isNumeric(input)) ? input + 1: false;
}*/
function increment(input) {
    if(isNumeric(input)) {
        return parseFloat(input) + 1;
    } else {
        return false;
    }
}


/* function decrement(input) {
    return (isNumeric(input)) ? input - 1: false;
}*/
function decrement(input) {
    if(isNumeric(input)) {
        return parseFloat(input) - 1;
    } else {
        return false;
    }
}


/* function square(input) {
    return (isNumeric(input)) ? input * input: false;
}*/
function square(input) {
    if (isNumeric(input)) {
        return input * input;
    } else {
        return false;
    }
}


/* function upperCase(input) {
    if (!isString(input) || isNumeric(input)) ? false : input.toUpperCase(); {
}*/
function upperCase(input) {
    if (isNaN(parseFloat(input))) {
        return input.toUpperCase();
    } else {
        return false;
    }
}

/* function reverseString() {
    str = str.split("");
    str = str.reverse();
    str = str.join();
}*/
/* function isPalindrome(input) {
    if (isNumeric (input)) {
        return false;
    }
    if (isString(input)) {
        input = input.toLowerCase();
        return reverseString(input) === input;
    } else {
        return false;
    }
}*/
function isPalindrome(input) {
    if (input === input.toString()) {
        return true;
    } else {
        return false;
    }
}


/*  function getHighestNumber(input1, input2, input3) {
    if (!isNumeric(input1) || !isNumeric(input2) || !isNumeric(input3)) {
        return false;
     }
     return Math.max(input1, input2, input3);
}*/
function getHighestNumber(input1, input2, input3) {
    if (isNumeric(input1, input2, input3)) {
        return  true;
    } else {
        return false;
    }
}


/* function containsVowel(input) {
    if (isNumeric(input) || input === undefined) {
        return false;
    }
    vowel syntax
}*/
function containsVowel(input) {
    if (input !== toString(input)) {
        return false;
    } else {
        return true;
    }
}


/* function add(input1, input2) {
    if (isNumeric(input1) && isNumeric(input2)) {
        return +input1 + +input2;
    }
    return false;
}*/
function add(input1, input2) {
    if (isNumeric(input1, input2)) {
        return input1 + input2;
    } else {
        return false;
    }

}


/* function multiply(input1, input2) {
     if (isNumeric(input1) && isNumeric(input2)) {
        return input1 * input2;
    }
    return false;
}*/
function multiply(input1, input2) {
    if (isNumeric(input1, input2)) {
        return input1 * input2;
    } else {
        return false;
    }
}


/* function sumOfSquares(input1, input2) {
       if (isNumeric(input1) && isNumeric(input2)) {
        return add(square(input1), add(square(input2);
    }
    return false;
}*/
function sumOfSquares(input1, input2) {
    if (isNumeric(input1, input2)) {
        return (input1 * input1) + (input2 * input2);
    } else {
        return false;
    }
}