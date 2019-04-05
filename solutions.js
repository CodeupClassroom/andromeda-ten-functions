"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */


function isTrue(input){
    var isTrueth = false;
    if(input === true){
        isTrueth = true;
    }

    return isTrueth;
}

function isFalse(input){
    var isFalseth = false;
    if(input === false){
        isFalseth = true;
    }

    return isFalseth;
}

/*
 not(false)                  // true
 not(0)                      // true
 not("")                     // true
 not(null)                   // true
 not(NaN)                    // true
 not(undefined)              // true
 not(true)                   // false
 not("something")            // false
 not(Infinity)               // false
 not(123)                    // false
 */

function not(input){
    if(input){
        return false;
    }
    return true;
}
function addOne(input){

    var num = parseInt(input);

    if (isNaN(num)){
        if (input === Infinity){
            return Infinity;
        }
        return NaN;
    }
    return ++num;
}
function isEven(input){
    var num = parseFloat(input);
    if(num % 2 === 0){
        return true;
    }
    return false;
}
function isIdentical(com, pare){
    var trueth = false;
    if (com === pare){
        trueth = true;
    }
    return trueth;
}
function isEqual(val1, val2){
    var trueth = false;
    if (val1 == val2){
        trueth = true;
    }
    return trueth;
}
function or(val1, val2){
    return val1 || val2;

}
function and(val1, val2){
    return val1 && val2;
}
function concat(val1, val2){
    var sVal1 = val1.toString();
    var sVal2 = val2.toString();
    return sVal1 + sVal2;
}