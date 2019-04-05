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


function isTrue(randomBoolean) {
    if (randomBoolean === true) {
        return true;
    } else if (randomBoolean === false) {
        return false;
    } else if (randomBoolean > 0) {
        return false;
    } else if (randomBoolean === "");
        return false;
}

isTrue();



function isFalse(randomBoolean) {
    if (randomBoolean === false) {
        return true;
    } else if (randomBoolean === true) {
        return false;
    } else if (randomBoolean === undefined) {
        return false;
    } else if (randomBoolean === null) {
        return false;
    } else if (randomBoolean > 0) {
        return false;
    } else if (randomBoolean === "") {
        return false;
    } else if (randomBoolean === "hello world") {
        return false;
    }
}


function not(x) {
    return !x;
}


function addOne(x) { //come back to shore this up
    return parseFloat(x) + 1;
}


function isEven(randomNumber) {
    if (randomNumber % 2 === 0) {
        return true;
        } else {
            return false;
        }
}


function isIdentical (x, y) {
    return x === y;
}


function isEqual(x, y) {
    return x == y;
}

isEqual(5, "5");



function and(x, y) {
   return x && y;
}



function concat(x, y) {
    return String(x) + String(y); //x.toString();
}

function or (x, y) {
    return x || y;
}