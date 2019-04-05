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


function isTrue(input) {
    return input === true;
}

function isFalse(input) {
    return input === false;
}

function not(input) {
    if (input === false) {
        return true;
    } else if (input === true) {
        return false;
    } else if (0 >= input) {
        return true;
    } else if (input === undefined) {
        return true;
    } else if (input > 0) {
        return false;
    } else if (typeof input === "string"){
        return false;
    } else if (isNaN(input)) {
        return true;
    }
}

function addOne(input) {
    return +input + 1;
}

function isEven(input) {
    return +input % 2 === 0;
}

function isIdentical(a, b) {
    return a === b;
}

function concat(a,b) {
    return "" + a +b;
}
function or(a,b) {
    return a || b;
}

function and(a,b) {
    return a && b;
}
function isEqual (a,b) {
    return a == b;
}