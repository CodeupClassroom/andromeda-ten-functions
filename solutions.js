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
function isTrue(x) {
    if(x === true){
        return true;
    } else {
        return false;
    }
}
function isFalse(y) {
    if (y === false){
        return true;
    } else {
        return false;
    }
}
function not(z) {
    return !z;
}
function addOne(a) {
    if (isNaN(a)){
        return NaN;
    } else {
        return +a + 1;
    }
}
function isEven(b) {
    var num = parseInt(b);
    return num % 2 === 0;

}
function isIdentical(c, d) {
    if (c === d){
        return true;
    } else {
        return false;
    }
}
function isEqual(e, f) {
    if (e == f){
        return true;
    } else {
        return false;
    }
}
function or(g, h) {
   return  g || h;
}
function and(j, k) {
   return j && k;
}
function concat(l, m) {
    var first = l.toString();
    var second = m.toString();
    return first + second;
}