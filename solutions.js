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

// anatomy of a function definition
// part 1 - the word function
// part 2 - the name of the fn
// part 3 - parameter(s) in parenthes
// part 4 - body of the function (the sequence of steps and the return)

function isTrue(input) {
    return input === true
}

function isFalse(x) {
    return x === false;
}

// isIdentical also called strictly equal (type and value)
function isIdentical(a, b) {
    return a === b;
}

// == is also called loose equality (type coercion)
function isEqual(a, b) {
    return a == b;
}

function isNumber(input) {
    return !isNaN(parseFloat(input));
}

// addOne should return 4 when passed "3"
function addOne(input) {
    if(isNumber(input)) {
       return parseFloat(input) + 1;
    } else {
        return NaN;
    }
}

// not
function not(input) {
    return !input;
}

function isEven(input) {
    if(isNumber(input)) {
        return input % 2 === 0;
    } else {
        return false;
    }
}

function or(a, b) {
    return a || b;
}

function and(a, b) {
    return a && b;
}

function concat(a, b) {
    return String(a) + String(b);
}
