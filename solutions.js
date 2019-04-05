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

/* 1. isTrue */

function isTrue(input) {
    if (input === true) {
        return true;
    } else {
        return false;
    }
}

/* 2. isFalse */

function isFalse(input) {
    if (input === false) {
        return true;
    } else {
        return false;
    }
}

/* 3. not */

function not(input) {
    return !input;
}

/* 4. addOne */

function addOne(input) {
    return parseFloat(input) + 1;
}

/* 5. isEven */

function isEven(input) {
    if (parseFloat(input) % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

/* 6. isIdentical */

function isIdentical(a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}

/* 7. isEqual */

function isEqual (a, b) {
    if (a == b) {
        return true;
    } else {
        return false;
    }
}

/* 8. or */

function or (a, b) {

        return a || b
}

/* 9. and */

function and(a, b) {

        return a && b;

}

/* 10. concat */

function concat(a, b) {
    return a.toString() + b.toString();
}