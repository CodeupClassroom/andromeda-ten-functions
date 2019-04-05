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


function isFalse(n) {
   return n === false;
}

function not(input2) {
    return !input2;
}

function addOne(x) {
    return parseFloat(x) + 1;
}

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function isIdentical(y, z) {
    return y === z;
}

function isEqual(a, b) {
    return a == b;
}

function or (c, d) {
    return c || d;
}

function and (e, f) {
    return e && f;
}

function concat (g, h) {
    return "" + g + h;

}