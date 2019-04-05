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
function isTrue(a) {
   return a === true;
}

function isFalse(a){
    return a === false;
}
//Needs work
function not(a){
    return !a;
}
//will this return NaN?
function addOne(a) {
    return parseInt(a) + 1;
}

function isEven(a){

    if (parseInt(a) % 2 === 0){
        return true;
    } else if (a === false){
        return false;
    } else {
        return false;
    }
}

function isIdentical (a,b) {
    return a === b;
}

function isEqual (a,b) {
    return a == b;
}

function or (a,b) {
    return a || b;
}

function and (a,b) {
    return a && b;
}

function concat (a,b) {
    return "" + a + b;
}